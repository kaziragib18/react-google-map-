import React from 'react';
import { GoogleMap, LoadScript } from '@react-google-maps/api';

const containerStyle = {
      width: '400px',
      height: '400px'
};

const center = {
      lat: 22.357733738899825,
      lng: 91.82012551464157
};

const Maps = () => {
      return (
            <LoadScript
                  googleMapsApiKey="YOUR_API_KEY"
            >
                  <GoogleMap
                        mapContainerStyle={containerStyle}
                        center={center}
                        zoom={10}
                  >
                        { /* Child components, such as markers, info windows, etc. */}
                        <></>
                  </GoogleMap>
            </LoadScript>
      );
};

export default Maps;