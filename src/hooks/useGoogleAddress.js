import { useState, useEffect } from 'react';
// npm install axios --save
import axios from 'axios';

const useGoogleAddress = address => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyDf0N6uIaiVuTcSuWNiSPbooDJ1PeeVwoY`;

  useEffect(() => {
    async function Traer() {
      try {
        const response = await axios(API);
        setMap(response.data.results[0].geometry.location);
      } catch (e) {
        console.error(e);
      }
    }; Traer();
  }, []);
  return map;

};

export default useGoogleAddress;