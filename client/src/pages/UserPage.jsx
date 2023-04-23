import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { doc, getDocs, getDoc, collection } from "firebase/firestore";
import { db } from "../firebase-config";
import Listings from "../components/Listings";
import CreateListing from "./CreateListing";

const UserPage = ({ loggedInRestaurantId }) => {
  const navigate = useNavigate();

  const [isPopUpForm, setIsPopUpForm] = useState(false);
  const [loggedInRestaurant, setLoggedInRestaurant] = useState({});
  const [loggedInRestaurantListings, setLoggedInRestaurantListenings] =
    useState([]);

  const restaurantsRef = collection(db, "restaurants");
  const listingsRef = collection(db, "listings");

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    let obj = {};
    const restaurants = await getDocs(restaurantsRef);
    restaurants.forEach((restaurants) => {
      if (restaurants.id == loggedInRestaurantId) {
        obj = restaurants.data();
      }
    });
    setLoggedInRestaurant(obj);

    let arr = [];
    const listings = await getDocs(listingsRef);
    listings.forEach((listing) => {
      let listingData = listing.data();
      if (listingData.rest_id == loggedInRestaurantId) {
        arr = loggedInRestaurantListings;
        arr.push(listing);
      }
    });
    setLoggedInRestaurantListenings(arr);
  };

  return (
    <div className="user-page" style={{ display: "flex" }}>
      <div
        className="rest-info-container"
        style={{
          flex: "1",
          flexDirection: "column",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          backgroundColor: "orange",
          height: "100vh",
        }}
      >
        <div className="rest-name-container" style={{marginTop: "5rem"}}>
          <h2>{loggedInRestaurant.name}</h2>
        </div>
        <div className="rest-address-container">
          <h2>{loggedInRestaurant.address}</h2>
        </div>
      </div>
      <div className="rest-listings-container" style={{ flex: "5" }}>
        <Listings listings={loggedInRestaurantListings} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            padding: "2rem",
          }}
        >
          <button
            className="add-listing-button"
            onClick={() => setIsPopUpForm(true)}
          >
            Add Listing
          </button>
        </div>
        {isPopUpForm ? (
          <CreateListing
            setIsPopUpForm={setIsPopUpForm}
            loggedInRestaurantId={loggedInRestaurantId}
          />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default UserPage;
