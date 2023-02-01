import React from "react";
// npm install @react-google-maps/api --save
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";

const Map = ({data}) => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };

  const defaultCenter = {
    lat: data.lat,
    lng: data.lng,
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDf0N6uIaiVuTcSuWNiSPbooDJ1PeeVwoY">
      <GoogleMap 
        mapContainerStyle={mapStyles} 
        zoom={17} 
        center={defaultCenter}
      >
        <Marker position={{ lat: Number(data.lat), lng: Number(data.lng)}} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
