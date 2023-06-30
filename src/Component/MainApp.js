import React, { useState } from 'react';
import MapComponent from './MapComp';
import PlacesAutocomplete from './PlaceComp';

const MainApp = () => {
  const [origin, setOrigin] = useState(null);
  const [destination, setDestination] = useState(null);

  const handleOriginSelect = (place) => {
    setOrigin(place.geometry.location);
  };

  const handleDestinationSelect = (place) => {
    setDestination(place.geometry.location);
  };

  return (
    <div>
      <PlacesAutocomplete onSelect={handleOriginSelect} />
      <PlacesAutocomplete onSelect={handleDestinationSelect} />
      {origin && destination && <MapComponent origin={origin} destination={destination} />}
    </div>
  );
};

export default MainApp;
