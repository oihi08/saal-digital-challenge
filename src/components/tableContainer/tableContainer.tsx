import { Pagination } from 'antd';
import { TableContainerProps } from 'interfaces/tableContainerProps.interface';
import './tableContainer.scss';
import { useEffect, useState } from 'react';

const TableContainer = ({ data }: TableContainerProps) => {
  const pageSize = 10;

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
            <th>Description</th>
            <th>Type</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {slicedData.map((val, key) => {
            return (
              <tr key={val.id}>
                <td className="table-name-column">{val.name}</td>
                <td>{val.description}</td>
                <td>{val.type}</td>
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
