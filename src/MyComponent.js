import React, { useState, useEffect } from 'react';
import axios from 'axios';

const MyComponent = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/api/data'); // Replace '/api/data' with your backend endpoint
        setData(response.data);
      } catch (error) {
        setError(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div>
      {data ? (
        <div>Data: {JSON.stringify(data)}</div>
      ) : error ? (
        <div>Error: {error}</div>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default MyComponent;
