import { useState } from 'react';
import axios from 'axios';

function useFlip() {
  const [isFlipped, setIsFlipped] = useState(false);

  function toggleFlip() {
    setIsFlipped(!isFlipped);
  }

  return [isFlipped, toggleFlip];
}

function useAxios(baseUrl) {
    const [data, setData] = useState([]);
  
    async function addData(endpoint = '') {
      const response = await axios.get(`${baseUrl}${endpoint}`);
      setData(data => [...data, response.data]);
    }
  
    return [data, addData];
  }

export { useFlip, useAxios };
