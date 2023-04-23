import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { doc, getDocs, getDoc, collection, where, query} from "firebase/firestore";
import { db } from "../firebase-config";
import RestaurantListings from "../components/RestaurantListings";
import CreateListing from "./CreateListing";


const UserPage = ({ loggedInRestaurantId }) => {
  const navigate = useNavigate();

  const [isPopUpForm, setIsPopUpForm] = useState(false);
  const [loggedInRestaurant, setLoggedInRestaurant] = useState({});
  const [loggedInRestaurantListings, setLoggedInRestaurantListings] =
    useState([]);

  const restaurantsRef = collection(db, "restaurants");
  const listingsRef = collection(db, "listings");
  

  useEffect(() => {
    const getData = async () => {
      const q = query(restaurantsRef, where("id", '==', loggedInRestaurantId));
      const qSnapshot = await getDocs(q);
      qSnapshot.forEach((doc) => {
        setLoggedInRestaurant(doc.data());
      })
    }
    getData();
  }, [loggedInRestaurantId]);

  useEffect(() => {
    const getListings = async () => {
      if (loggedInRestaurant["currListings"]) {
        let newListings = [];
        for (const listingID of loggedInRestaurant["currListings"]) {
          const q2 = query(restaurantsRef, where("id", '==', listingID));
          const q2Snapshot = await getDocs(q2);
          console.log(q2Snapshot);
          q2Snapshot.forEach((doc) => {
            newListings.push(doc.data());
          })
        }
        console.log(newListings);
        setLoggedInRestaurantListings(newListings);
      }
    }
    getListings();
  }, [loggedInRestaurant])


  return (
    <div className="user-page" style={{ display: "flex" }}>
      <div
        className="rest-info-container"
        style={{
          flex: "1",
          flexDirection: "column",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "flex-start",
          backgroundColor: "#369026",
          height: "100vh",
        }}
      >
        <div className="rest-name-container" class = "m-2 mt-8 mb-5 text-2xl text-secondary">
          <h2>{loggedInRestaurant.name}</h2>
        </div>
        <div className="rest-address-container" class = "m-2 text-secondary">
          <h2>{loggedInRestaurant.address}</h2>
        </div>
      </div>
      <div className="rest-listings-container" style={{ flex: "5" }}>
        <RestaurantListings listings={loggedInRestaurantListings} />
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            padding: "2rem",
          }}
        >
          <button
            className="add-listing-btn"
            class = "text-2xl content-center p-4 pl-8 pr-8 border-2 border-primary hover:bg-primary text-primary hover:text-secondary rounded-full"
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
