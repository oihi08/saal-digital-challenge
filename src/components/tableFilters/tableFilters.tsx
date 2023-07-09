import { AutoComplete } from 'antd';
import './tableFilters.css';
import { Dispatch, SetStateAction, useState } from 'react';
import { ObjectData } from 'interfaces/object.interface';

type TableFiltersProps = {
  data: ObjectData[];
  setData: Dispatch<SetStateAction<ObjectData[]>>;
};

const TableFilters = ({ data, setData }: TableFiltersProps) => {
  const [options, setOptions] = useState<{ value: string; id: number }[]>([]);

  const getObjects = (searchText: string) => {
    const filteredData = !searchText
      ? []
      : data.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.description.toLowerCase().includes(searchText.toLowerCase()),
        );

    const options = filteredData.map((item) => ({
      value: `${item.name} - ${item.description}`,
      id: item.id,
    }));

    return options;
  };

  const filterTableData = (
    attribute: keyof ObjectData,
    value: number | string,
  ) => {
    setData(data.filter((item) => item[attribute] === value));
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
        onClear={() => setData(data)}
        onSearch={(text) => setOptions(getObjects(text))}
        placeholder="Search by name or description"
      />
    </div>
  );
};
export default TableFilters;
