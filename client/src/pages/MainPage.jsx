import Map from '../components/Map.js'
import Listings from "../components/Listings";
import CreateListing from "./CreateListing";
import React, {useState, useEffect, useRef} from 'react';
import { doc, getDocs, getDoc, collection, where, query} from "firebase/firestore";
import { db } from "../firebase-config";
import logo from '../assets/small_logo.png';



function MainPage() {
  const [idClicked, setIdClicked] = useState(-1);
  const [currentLoc, setCurrentLoc] = useState({lat: 34.0689, lng: -118.4452});
  const [isPopUpForm, setIsPopUpForm] = useState(false);  
  const [searchInput, setSearchInput] = useState('Enter Your Location');
  const [listings, setListings] = useState([]);
  const zoom = 15;

  const listingsRef = collection(db, "listings");

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
  }, []);

  useEffect(() => {
    const getListings = async () => {
      const newListings = [];
      const snapshot = await getDocs(listingsRef);
      let i = 0;
      snapshot.forEach((doc) => {     
        let newList = doc.data();
        newList["_id"] = i;
        newListings.push(newList);
        i += 1;
      })
      console.log(newListings);
      setListings(newListings);
    }

    getListings();
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
              <input type="text" value={searchInput} onChange={setSearchInput} class = "flex flex-grow h-8 p-4 pl-4 mr-4 border-2 border-primary rounded-full bg-secondary "/>
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