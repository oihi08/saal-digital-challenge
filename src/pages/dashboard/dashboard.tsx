import { Alert } from 'antd';
import TableContainer from 'components/tableContainer/tableContainer';
import TableFilters from 'components/tableFilters/tableFilters';
import { ObjectData } from 'interfaces/object.interface';
import { useEffect, useState } from 'react';
import apiService from 'services/api.service';
import './dashboard.scss';
import Spinner from 'components/spinner/spinner';
import TableActions from 'components/tableActions/tableActions';
import TableContext from 'context/table.context';

const Dashboard = () => {
  const [error, setError] = useState<boolean>(false);
  const [, setLoading] = useState<boolean>(false);
  const [tableData, setTableData] = useState<any[]>([]);
  const [filteredObjects, setFilteredObjects] = useState<ObjectData[]>([]);

  const updateTableData = (newObject: any[]) => {
    setTableData(newObject);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiService.getObjects();
        setTableData(response.data);
        setFilteredObjects(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {error ? (
        <Alert message="Something was wrong. Try again later." type="error" />
      ) : tableData?.length > 0 ? (
        <>
          <TableContext.Provider value={{ tableData, updateTableData }}>
            <div className="table-actions">
              <TableFilters setData={setFilteredObjects} />
              <TableActions />
            </div>
            <TableContainer data={filteredObjects} />
          </TableContext.Provider>
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
export default Dashboard;
