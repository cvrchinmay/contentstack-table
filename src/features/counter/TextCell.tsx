
export interface ICell {
  value: string;
  width: number;
}

const TextCell: React.FC<ICell> = ({value, width}) => {
  return (
    <td className={`p-4 border border-solid text-left`} style={{ width: `${width}px` }}>{value}</td>
  );
};

export default TextCell;