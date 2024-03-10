import { useEffect, useState } from "react";
import { Resizable } from "react-resizable";
import { fetchData } from "../../API/api";
import SortingIcon from "../../SortingIcon";
import { ColumnType, MAX_PAGES, MENU_ITEMS, SortType, TEXT_ALLIGNMENT, fetchFilterData } from "../../Utils/Utils";
import ActionsMenu from "./ActionMenu";

interface ITableCol {
  key: string;
  title: string;
  type: ColumnType;
  width: number;
  extraData?: string;
}

interface ITableRow {
  [key: string]: string | number;
}

interface ITableProps {
  cols: ITableCol[];
}


const Table: React.FC<ITableProps> = ({ cols }) => {
  const [rowData, setRowData] = useState<ITableRow[]>([])
  const [pageNo, setPageNo] = useState<number>(1);
  const [sortType, setSortType] = useState<SortType>(SortType.NO_SORT);
  const [sortField, setSortField] = useState<string>("");
  const [clickedKey, setClickedKey] = useState<string>("");
  const [showFilterForKey, setShowFilterForKey] = useState<string>("");

  const handleScroll = () => {
    const { scrollTop, clientHeight, scrollHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 10) {
      setPageNo((prevPage) => prevPage < MAX_PAGES ? prevPage + 1 : MAX_PAGES);
    }
  };

  useEffect(() => {
    (async () => {
      const data = await fetchData({ field: sortField, sortType: sortType }, pageNo);
      setRowData(data);

      window.addEventListener('scroll', handleScroll);

      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    })()
  }, [pageNo, sortField, sortType])
  
  const [columnWidths, setColumnWidths] = useState<{ [key: string]: number }>(() => {
    const initialWidths: { [key: string]: number } = {};
    cols.forEach(({ key, width }) => {
      initialWidths[key] = width;
    });
    return initialWidths;
  });

  const handleResize = (columnKey: string, event:any, size: any) => {
    const width = size.size.width;
    setColumnWidths((prevWidths) => ({ ...prevWidths, [columnKey]: width }));
  };

  const onSortingHandler = (currentSortType: SortType) => {
    setSortType(currentSortType);
  }


  return (
      <table className="p-16 border-collapse">
        <thead className="">
        <tr className="" style={{height: '40px'}}>
          <th
              className={`absolute right-2 z-20 px-4 py-2 bg-white text-left border-collapse border border-solid`}
              style={{ width: '100px' }}>
              Actions
          </th>
          {cols.map((col) => (
            <Resizable
              key={col.key}
              className=""
              axis="x"
              width={columnWidths[col.key]}
              height={30}
              onResize={(event:any, size:any) => handleResize(col.key, event, size)}
              minConstraints={[150, 30]}
              maxConstraints={[800, 30]}
              resizeHandles={['e']}
            >
              <th
                onMouseEnter={() => {
                  setShowFilterForKey(col.key);
                }}
                onMouseLeave={() => {
                  setShowFilterForKey("");
                }}
              className={`pl-4 pr-12 py-2 fixed top-0 text-left border-collapse border border-solid ${TEXT_ALLIGNMENT[col.type]}`} style={{ width: `${columnWidths[col.key]}px` }}>
                <span>{col.title}</span>
                <span className={`absolute cursor-pointer mt-0.5 ml-4`}>
                  <ActionsMenu key={`A${col.key}`} currentKey={ col.key } menu={fetchFilterData(col.key)} isClicked={true}
                    onClickHandler={() => { }} actionType="filter" />
                </span>
                {(col.key === showFilterForKey || col.key === sortField) &&
                  <span className="absolute mt-1 ml-1">
                  <SortingIcon sorting={sortType} onClickHandler={(currentSortType:SortType) => {
                    setSortField(showFilterForKey)
                    onSortingHandler(currentSortType)
                  }} />
                </span>}                
              </th>
            </Resizable>
          ))}      
          </tr>
        </thead>
        <tbody>
          {rowData.map((item, rowIndex) => (
            <tr
              key={item.id}
              className="hover:bg-[#F7F9FC] h-15 border-collapse">
              <td className={`absolute bg-white test-center right-2 h-15 p-4 z-10 border border-solid`} style={{ width: '100px' }}><ActionsMenu key={`A${item.id}`} currentKey={item.id} menu={MENU_ITEMS}
                isClicked={item.id === clickedKey}
                onClickHandler={(key: string) => {
                  key === item.id && key !== clickedKey ? setClickedKey(item.id) :setClickedKey("");    
                }} />
              </td>
              {cols.map((col) => (
                <td className={`p-4 border border-solid ${TEXT_ALLIGNMENT[col.type]}`} style={{ width: `${columnWidths[col.key]}px` }}>{item[col.key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
  );
};
// <Cell key={col.key} value={item[col.key]} classes={`${classes}`} />

export default Table;