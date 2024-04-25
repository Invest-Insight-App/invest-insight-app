import { useState } from 'react';
import { dummieData, initialCompaniesData } from '../data';

interface response {
  companies?: any,
  total_count?: number
  summary?: any,
  responses?: any[],
}

const { responses, summary } = dummieData

function useFetchTasks() {
  const [error, setError] = useState<Error | null>(null);
  const [responseData, setResponseData] = useState<response>({
    companies: initialCompaniesData,
    total_count: 1,
    responses: responses,
    summary: summary
  });

    const fetchData = async (url: string) => {
    try {
      const response = await fetch(url, {
        method: 'GET',
      });
      const data = await response.json();
      setResponseData(data)
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return { fetchData, error, responseData };

}

export default useFetchTasks;