import Map from '../components/Map.js'
import Listings from "../components/Listings";
import CreateListing from "./CreateListing";
import React, {useState, useEffect, useRef} from 'react';
import logo from '../assets/small_logo.png';


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

function MainPage() {
  const [idClicked, setIdClicked] = useState(-1);
  const [currentLoc, setCurrentLoc] = useState({lat: 34.0689, lng: -118.4452});
  const [isPopUpForm, setIsPopUpForm] = useState(false);  
  const [searchInput, setSearchInput] = useState('Enter Your Location');
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
  <div class = "flex flex-row flex-wrap h-screen bg-secondary" > {/* main screen*/}
        <div class = "w-1/2 text-custom_gray h-screen"> {/* listing part*/}
          <div class = "flex items-center h-12 p-2 mt-4"> {/* Logo + search bar*/}
              <img src= {logo} alt = "logo" class= "w-12 h-14 ml-4 mr-6"/>
              <input type="text" value={searchInput} onChange={setSearchInput} class = "flex flex-grow h-8 p-4 pl-2 mr-4 border-2 border-primary rounded-md bg-secondary "/>
          </div>
          <div class ="flex flex-grow flex-col mt-8 justify-start h-5/6" >
            <Listings listings={listings} handleClick={handleListingClick} idClicked={idClicked} currentPos={currentLoc}/>
          </div>
        </div>
        <div class = "sticky h-full w-1/2 bg-primary text-secondary place-items-center"> {/* map part*/}
          <Map center={currentLoc} zoom={zoom} markers={listings} markerClickFunc={handleMarkerClick}/>
        </div>
      </div>
  );
}

export default MainPage;