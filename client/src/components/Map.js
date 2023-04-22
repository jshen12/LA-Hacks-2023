import React, {useState, useEffect, useRef} from 'react';
//import GoogleMapReact from 'google-map-react'
import { GoogleMap, LoadScript, MarkerF, useLoadScript } from "@react-google-maps/api";



function Map ({center, zoom, markers, markerClickFunc}) {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: 'AIzaSyBlCKlyClwWy-yF6ObFU8I9oARXSxrrJfI',
  });
  if (!isLoaded) return <div>Loading...</div>

  const markerComponents = markers.map(({id, name, lat, lng}, ind) => (
    <MarkerF 
      key={ind}
      position={{lat, lng}}
      onClick={() => {markerClickFunc(id);}}
      />
  ));

  return (
    <GoogleMap zoom={zoom} center={center} mapContainerStyle={{height: "100vh", width: "50%"}}>
      {markerComponents}
    </GoogleMap>
  )
}


export default Map;