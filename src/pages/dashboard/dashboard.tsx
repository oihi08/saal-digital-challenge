import { Alert } from 'antd';
import TableContainer from 'components/tableContainer/tableContainer';
import TableFilters from 'components/tableFilters/tableFilters';
import { ObjectData } from 'interfaces/object.interface';
import { useEffect, useState } from 'react';
import apiService from 'services/api.service';
import './dashboard.css';
import Spinner from 'components/spinner/spinner';
import TableActions from 'components/tableActions/tableActions';

const Dashboard = () => {
  const [error, setError] = useState<boolean>(false);
  const [, setLoading] = useState<boolean>(false);
  const [objects, setObjects] = useState<ObjectData[]>([]);
  const [filteredObjects, setFilteredObjects] = useState<ObjectData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const response = await apiService.getObjects();
        setObjects(response.data);
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
      ) : objects?.length > 0 ? (
        <>
          <div className="table-actions">
            <TableFilters data={objects} setData={setFilteredObjects} />
            <TableActions />
          </div>
          <TableContainer data={filteredObjects} />
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
export default Dashboard;
