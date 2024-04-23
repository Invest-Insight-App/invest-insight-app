// IMPORTANT! Set the runtime to edge
export const runtime = 'edge';
const baseURL = "http://127.0.0.1:8000/investmentInsight/v1/sentimentAnalysis?";


import React, { useState } from 'react';

const MyComponent: React.FC = () => {

  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);


    const fetchData = async () => {
        try {
        const response = await fetch(baseURL+'company_name=${companyname}&start_date=${date}');
        if (!response.ok) {
            throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
        } catch (error) {
        setError(error.message || 'An error occurred');
        } finally {
        setLoading(false);
        }
    };

  //fetchData()

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {/* Render your data here */}
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default MyComponent;