import React, { useState, useEffect } from 'react';


function ApiCall(prop) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch.get(`https://localhost:3000/user/${prop}`);
          setData(response.data);
        } catch (error) {
          setError(error.message);
        } finally {
          setLoading(false);
        }
      };
  
      fetchData();
    }, []);
  
    if (loading) return <p>Chargement...</p>;
    if (error) return <p>Erreur : {error}</p>;
    return (
        console.log(data)
    )
}

export default ApiCall