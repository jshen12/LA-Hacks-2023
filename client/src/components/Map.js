import React, {useState, useEffect, useRef} from 'react';
import { GoogleMap, MarkerF, useLoadScript } from "@react-google-maps/api";



function Map ({center, zoom, markers, markerClickFunc}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBlCKlyClwWy-yF6ObFU8I9oARXSxrrJfI',
  });
  if (!isLoaded) return <div>Loading...</div>

  const markerComponents = markers.map(({id, _id, lat, lng}, ind) => (
    <MarkerF 
      key={ind}
      position={{lat, lng}}
      onClick={() => {markerClickFunc(_id);}}
      />
  ));

  return (
    <GoogleMap zoom={zoom} center={center} mapContainerStyle={{height: "100vh", width: "100%"}}>
      {markerComponents}
      
    </GoogleMap>
  )
}


export default Map;