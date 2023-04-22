import React, { useState, useEffect } from "react";
import Listing from "./Listing";

let listings = [
  {
    _id: 1,
    food_name: "Eggs",
    food_quantity: 12,
    rest_name: "Ralph's",
    rest_dist: 0.3,
    end_time: new Date(2023, 4, 23, 18, 30),
  },
  {
    _id: 2,
    food_name: "Milk",
    food_quantity: 3,
    rest_name: "Ralph's",
    rest_dist: 0.3,
    end_time: new Date("2023-04-25"),
  },
  {
    _id: 3,
    food_name: "BLT Sandwich",
    food_quantity: 1,
    rest_name: "Target",
    rest_dist: 0.8,
    end_time: new Date("2023-04-23"),
  },
];

const Listings = ({ locationId }) => {
  return (
    <div className="listings-container">
      {listings.map((listing) => (
        <Listing
          key={listing._id}
          food_name={listing.food_name}
          food_quantity={listing.food_quantity}
          rest_name={listing.rest_name}
          rest_dist={listing.rest_dist}
          end_time={listing.end_time}
        />
      ))}
    </div>
  );
};

export default Listings;
