export const ApiCallid = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/user/${id}`);
      console.log('Response status:', response.status);
  
      if (!response.ok) {
        throw new Error(`Erreur lors de la récupération des données: ${response.statusText}`);
      }
  
      const result = await response.json();
      console.log('Fetched data:', result);
  
      return result.data; // Assurez-vous de retourner les données et non un Promise
    } catch (error) {
      console.error('Fetch error:', error);
      throw error; // Re-throw the error for handling in the component
    }
  };

  export const ApiCallActivity= async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/user/${id}/activity`);
      console.log('Response status:', response.status);
  
      if (!response.ok) {
        throw new Error(`Erreur lors de la récupération des données: ${response.statusText}`);
      }
  
      const result = await response.json();
      console.log('Fetched data:', result);
  
      return result.data; // Assurez-vous de retourner les données et non un Promise
    } catch (error) {
      console.error('Fetch error:', error);
      throw error; // Re-throw the error for handling in the component
    }
  };

  export const ApiCallPerformance = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/user/${id}/performance`);
      console.log('Response status:', response.status);
  
      if (!response.ok) {
        throw new Error(`Erreur lors de la récupération des données: ${response.statusText}`);
      }
  
      const result = await response.json();
      console.log('Fetched data:', result);
  
      return result.data; // Assurez-vous de retourner les données et non un Promise
    } catch (error) {
      console.error('Fetch error:', error);
      throw error; // Re-throw the error for handling in the component
    }
  };
  

  export const ApiCallAverageSession = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/user/${id}/average-sessions`);
      console.log('Response status:', response.status);
  
      if (!response.ok) {
        throw new Error(`Erreur lors de la récupération des données: ${response.statusText}`);
      }
  
      const result = await response.json();
      console.log('Fetched data:', result);
  
      return result.data; // Assurez-vous de retourner les données et non un Promise
    } catch (error) {
      console.error('Fetch error:', error);
      throw error; // Re-throw the error for handling in the component
    }
  };