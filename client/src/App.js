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

let listings = [
  {
    _id: 0,
    food_name: "Eggs",
    food_quantity: 12,
    rest_name: "Ralph's",
    rest_dist: 0.3,
    end_time: new Date(2023, 4, 23, 18, 30),
    lat: 34.0659, 
    lng: -118.4452,
  },
  {
    _id: 1,
    food_name: "Milk",
    food_quantity: 3,
    rest_name: "Ralph's",
    rest_dist: 0.3,
    end_time: new Date("2023-04-25"),
    lat: 34.0669, 
    lng: -118.4452
  },
  {
    _id: 2,
    food_name: "BLT Sandwich",
    food_quantity: 1,
    rest_name: "Target",
    rest_dist: 0.8,
    end_time: new Date("2023-04-23"),
    lat: 34.0679, 
    lng: -118.4452
  },
  {
    _id: 3,
    food_name: "BLT Sandwich",
    food_quantity: 1,
    rest_name: "Target",
    rest_dist: 0.8,
    end_time: new Date("2023-04-23"),
    lat: 34.0679, 
    lng: -118.4442
  },
  {
    _id: 4,
    food_name: "BLT Sandwich",
    food_quantity: 1,
    rest_name: "Target",
    rest_dist: 0.8,
    end_time: new Date("2023-04-23"),
    lat: 34.0699, 
    lng: -118.4422
  },
  {
    _id: 5,
    food_name: "BLT Sandwich",
    food_quantity: 1,
    rest_name: "Target",
    rest_dist: 0.8,
    end_time: new Date("2023-04-23"),
    lat: 34.0609, 
    lng: -118.4452
  },
  {
    _id: 6,
    food_name: "BLT Sandwich",
    food_quantity: 1,
    rest_name: "Target",
    rest_dist: 0.8,
    end_time: new Date("2023-04-23"),
    lat: 34.0629, 
    lng: -118.4412
  },
  {
    _id: 7,
    food_name: "BLT Sandwich",
    food_quantity: 1,
    rest_name: "Target",
    rest_dist: 0.8,
    end_time: new Date("2023-04-23"),
    lat: 34.0699, 
    lng: -118.4492
  },
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

  const handleListingClick = (id) => {
    console.log(id);
    setIdClicked(id);
    const listingClicked = listings.find(e => e["_id"] === id);
    setCurrentLoc({lat: listingClicked["lat"], lng: listingClicked["lng"]});
  }


  return (
    <div class="flex">
      <Listings listings={listings} handleClick={handleListingClick} idClicked={idClicked}/>
      <Map center={currentLoc} zoom={zoom} markers={listings} markerClickFunc={handleMarkerClick}/>
    </div>
  );
}

export default App;
