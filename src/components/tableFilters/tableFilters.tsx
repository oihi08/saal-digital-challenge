import { AutoComplete } from 'antd';
import './tableFilters.scss';
import { Dispatch, SetStateAction, useContext, useState } from 'react';
import { ObjectData } from 'interfaces/object.interface';
import TableContext from 'context/table.context';

type TableFiltersProps = {
  setData: Dispatch<SetStateAction<ObjectData[]>>;
};

const TableFilters = ({ setData }: TableFiltersProps) => {
  const { tableData } = useContext(TableContext);
  const [options, setOptions] = useState<{ value: string; id: number }[]>([]);

  const getObjects = (searchText: string) => {
    const filteredData = searchText
      ? tableData.filter((item) => {
          return (
            item.description.toLowerCase().includes(searchText.toLowerCase()) ||
            item.name.toLowerCase().includes(searchText.toLowerCase())
          );
        })
      : [];

    const options = filteredData.map((item) => ({
      value: `${item.name}${
        'description' in item ? ' -' + item.description : ''
      }`,
      id: item.id,
    }));

    return options;
  };

  const filterTableData = (
    attribute: keyof ObjectData,
    value: number | string,
  ) => {
    setData(tableData.filter((item) => item[attribute] === value));
  };

  return (
    <div className="d-flex">
      <AutoComplete
        options={options}
        className="table-autocomplete"
        allowClear
        onSelect={(value, option) => {
          if (option) {
            filterTableData('id', option.id);
          }
        }}
        onClear={() => setData(tableData)}
        onSearch={(text) => setOptions(getObjects(text))}
        placeholder="Search by name or description"
      />
    </div>
  );
};
export default TableFilters;
