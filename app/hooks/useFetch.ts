import { useState } from 'react';
import { initialCompaniesData } from '../data';

function useFetchTasks() {
  const [error, setError] = useState<Error | null>(null);
  const [companiesData, setCompaniesData] = useState(initialCompaniesData);
  const [totalCount, setTotalCount] = useState(1);

  const fetchData = async (exchange: string, page: string) => {
    try {
      const response = await fetch(`/api/exchangeMarket/${exchange}/${page}`, {
        method: 'GET',
      });
      const data = await response.json();
      setCompaniesData(data.companies);
      setTotalCount(data.total_count)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return { fetchData, companiesData, error, totalCount };
}

export default useFetchTasks;