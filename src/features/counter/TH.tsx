import { ReactNode } from "react";

export interface IRow {
  children: ReactNode
}

const TH: React.FC<IRow> = ({children}) => {
  return (
    <th className="flex flex-row p-2 border border-collapse border-solid gap-x-4">{children}</th>
  );
};

export default TH;