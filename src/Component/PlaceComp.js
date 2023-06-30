import React, { useRef } from 'react';
import { StandaloneSearchBox } from '@react-google-maps/api';

const PlacesAutocomplete = ({ onSelect }) => {
  const searchBoxRef = useRef(null);

  const onLoad = (ref) => {
    searchBoxRef.current = ref;
  };

  const onPlaceChanged = () => {
    if (searchBoxRef.current) {
      const place = searchBoxRef.current.getPlaces()[0];
      onSelect(place);
    }
  };

  return (
    <StandaloneSearchBox onLoad={onLoad} onPlacesChanged={onPlaceChanged}>
      <input type="text" placeholder="Enter a location" />
    </StandaloneSearchBox>
  );
};

export default PlacesAutocomplete;
