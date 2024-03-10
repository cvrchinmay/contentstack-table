import { ReactNode } from "react";

export interface IRow {
  children: ReactNode
}

const Row: React.FC<IRow> = ({children}) => {
  return (
    <tr className="hover:bg-slate-500">{children}</tr>
  );
};

export default Row;