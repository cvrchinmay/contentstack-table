import { COLUMN_CONFIG, ColumnType, PAGE_SIZE, ROW_DATA, SortType } from "../Utils/Utils";

export interface ISortBy {
  field: string;
  sortType: SortType
}

export async function fetchData(sortBy: ISortBy, pageNo: number) {
  try {
    const rowData = [...ROW_DATA];
    if (sortBy.sortType !== SortType.NO_SORT) {
      const config = COLUMN_CONFIG.find((config) => config.key === sortBy.field);
      if (config?.type !== ColumnType.NUMERIC) {
        rowData.sort((a: any, b: any) => {
          return sortBy.sortType === SortType.ASC ? a[sortBy.field].localeCompare(b[sortBy.field]) : b[sortBy.field].localeCompare(a[sortBy.field])
        })  
      } else {
        rowData.sort((a, b) => {
          return sortBy.sortType === SortType.ASC ? a.id - b.id : b.id - a.id
        })
      }
    }
    return rowData.slice(0, pageNo * PAGE_SIZE);
  } catch (e) {
    console.error("Something Went Wrong -> " + e);
    return [];
  }
}