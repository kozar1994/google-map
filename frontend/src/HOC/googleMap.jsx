import React from 'react'
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker,
} from "react-google-maps";

export const MapWithAMarker = withScriptjs(
  withGoogleMap((props) => {
    const { markers } = props;

    return (
      <GoogleMap
        defaultZoom={8}
        defaultCenter={{ lat: 49.843926, lng: 24.026226 }}
      >
        {markers && markers.map((marker) => (
          <Marker
            key={marker.ObjectId}
            title={marker.Title}
            image={{
              url: marker.Latitude
            }}
            position={{ lat: marker.Latitude, lng: marker.longitude }}
          />
        ))}
      </GoogleMap>
    );
  })
);