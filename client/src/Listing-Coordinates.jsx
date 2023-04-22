import { set } from "express/lib/application";
import "./App.css";
import Listing from "./components/Listings";
import React, { useState } from "react";

function App() {
  const [listingInfo, setListingInfo] = useState(null);
  const [coordinatesInfo, setCoordinatesInfo] = useState(null)

  const handleClickOnListing = (restName, restLocation) => {
    setListingInfo({restName, restLocation})

  }

  const handleClickOnCoordinates = (x, y) => {
    setCoordinatesInfo({x, y})

  }

  return (
    <div className="Listing-Coordinates">
      <Listings handleClickOnListing={handleClickOnListing}/>
    </div>
  );
}

export default App;