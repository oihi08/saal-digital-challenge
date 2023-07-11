import { Pagination } from 'antd';
import { TableContainerProps } from 'interfaces/tableContainerProps.interface';
import './tableContainer.scss';
import { useEffect, useState } from 'react';
import { useTabContext } from 'context/tab.context';

const TableContainer = ({ data }: TableContainerProps) => {
  const pageSize = 10;
  const { currentTab } = useTabContext();

  const [pagination, setPagination] = useState({
    current: 1,
    total: data.length,
  });

  const slicedData = data.slice(
    (pagination.current - 1) * pageSize,
    pagination.current * pageSize,
  );

  const handlePageChange = (page: number) => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      current: page,
    }));
  };

  useEffect(() => {
    setPagination((prevPagination) => ({
      ...prevPagination,
      total: data.length,
    }));
  }, [data]);

  return (
    <div>
      <table className="table">
        <thead>
          <tr>
            <th>Name</th>
            {currentTab === 'supplies' && <th>Description</th>}
            <th>{currentTab === 'supplies' ? 'Type' : 'Deparment'}</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {slicedData.map((val, key) => {
            return (
              <tr key={val.id}>
                <td className="table-name-column">{val.name}</td>
                {currentTab === 'supplies' && 'description' in val && (
                  <td>{val.description}</td>
                )}
                {currentTab === 'supplies' && 'type' in val && (
                  <td>{val.type}</td>
                )}
                {currentTab === 'personnel' && 'department' in val && (
                  <td>{val.department}</td>
                )}
                <td>Button</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        className="table-pagination"
        current={pagination.current}
        total={pagination.total}
        pageSize={pageSize}
        onChange={handlePageChange}
      />
    </div>
  );
};
export default TableContainer;
