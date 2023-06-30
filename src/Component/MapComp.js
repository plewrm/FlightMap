import React from 'react';
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const MapComponent = ({ origin, destination }) => {
  const containerStyle = {
    width: '100%',
    height: '400px',
  };

  const center = {
    lat: 0, // Specify the initial center latitude of the map
    lng: 0, // Specify the initial center longitude of the map
  };

  return (
    <LoadScript googleMapsApiKey="AIzaSyDgAcnyneTVU1e37g6Qx8El2y2DRUK7cqM">
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={10}>
        <DirectionsService options={{ origin, destination, travelMode: 'DRIVING' }} callback={(response) => console.log(response)} />
        <DirectionsRenderer />
      </GoogleMap>
    </LoadScript>
  );
};

export default MapComponent;
