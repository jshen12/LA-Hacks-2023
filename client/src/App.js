import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js'
import React, {useState, useEffect, useRef} from 'react';



const markers = [
  { id: 0, address: "Address1", lat: 34.1689, lng: -118.5452 },
  { id: 1, address: "Address2", lat: 34.2689, lng: -118.3452 },
  { id: 2, address: "Address3", lat: 34.3689, lng: -118.2452 },
];



function App() {
  const [idClicked, setIdClicked] = useState(-1);
  const center = {lat: 34.0689, lng: -118.4452};
  const zoom = 15;

  const handleMarkerClick = (name) => {
    console.log(name);
    setIdClicked(name);
  };


  return (
    <Map center={center} zoom={zoom} markers={markers} markerClickFunc={handleMarkerClick}/>
  );
}

export default App;
