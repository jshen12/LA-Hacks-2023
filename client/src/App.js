import logo from './logo.svg';
import './App.css';
import Map from './components/Map.js'
import Listings from "./components/Listings";
import CreateListing from "./pages/CreateListing";
import SignUpPage from "./pages/SignUpPage";
import React, {useState, useEffect, useRef} from 'react';



const markers = [
  { id: 0, address: "Address1", lat: 34.0659, lng: -118.4452 },
  { id: 1, address: "Address2", lat: 34.0669, lng: -118.4452 },
  { id: 2, address: "Address3", lat: 34.0679, lng: -118.4452 },
];



function App() {
  const [idClicked, setIdClicked] = useState(-1);
  const [currentLoc, setCurrentLoc] = useState({lat: 34.0689, lng: -118.4452});
  const [isPopUpForm, setIsPopUpForm] = useState(false);
  const zoom = 15;

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition((position) => {
        console.log(position);
        setCurrentLoc({lat: position.coords.latitude, lng: position.coords.longitude});
      }, 
      () => {console.log("error");},
      {timeout:10000})
    } else {
      console.log("error");
    }
  }, [])

  const handleMarkerClick = (name) => {
    console.log(name);
    setIdClicked(name);
  };


  return (
    <Map center={currentLoc} zoom={zoom} markers={markers} markerClickFunc={handleMarkerClick}/>
  );
}

export default App;
