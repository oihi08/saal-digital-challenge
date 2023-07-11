import { AutoComplete } from 'antd';
import './tableFilters.scss';
import { Dispatch, SetStateAction, useState } from 'react';
import { ObjectData } from 'interfaces/object.interface';
import { PersonnelData } from 'interfaces/personnel.interface';
import { useTabContext } from 'context/tab.context';

type TableFiltersProps = {
  data: (ObjectData | PersonnelData)[];
  setData: Dispatch<SetStateAction<(ObjectData | PersonnelData)[]>>;
};

const TableFilters = ({ data, setData }: TableFiltersProps) => {
  const [options, setOptions] = useState<{ value: string; id: number }[]>([]);
  const { currentTab } = useTabContext();

  const getObjects = (searchText: string) => {
    const filteredData = !searchText
      ? []
      : data.filter((item) => {
          if ('description' in item) {
            return item.description
              .toLowerCase()
              .includes(searchText.toLowerCase());
          }
          return item.name.toLowerCase().includes(searchText.toLowerCase());
        });

    const options = filteredData.map((item) => ({
      value: `${item.name}${
        'description' in item ? ' -' + item.description : ''
      }`,
      id: item.id,
    }));

    return options;
  };

  const filterTableData = (
    attribute: keyof (ObjectData | PersonnelData),
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
        placeholder={`Search by name ${
          currentTab === 'supplies' ? 'or description' : ''
        }`}
      />
    </div>
  );
};
export default TableFilters;
