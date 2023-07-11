import { createContext } from 'react';

interface TableContextProps {
  tableData: any[];
  updateTableData: (data: any[]) => void;
}

const TableContext = createContext<TableContextProps>({
  tableData: [],
  updateTableData: () => {},
});

export default TableContext;
