import React, { useState, useEffect, useRef, forwardRef, createRef} from "react";
import Listing from "./Listing";



const Listings = ({ listings, handleClick, idClicked }) => {

  const listingRefs = useRef([]);

  useEffect(() => {
    listingRefs.current = listingRefs.current.slice(0, listings.length);

  }, [listings]);

  useEffect(() => {
    if (idClicked !== -1) {
      listingRefs.current[idClicked].scrollIntoView({
        behavior: "smooth",
        block: "center"
      });
    }
  }, [idClicked])

  return (
    <div className="listings-container">
      {listings.map((listing, i) => (
        <Listing
          key={listing._id}
          id={listing._id}
          food_name={listing.food_name}
          food_quantity={listing.food_quantity}
          rest_name={listing.rest_name}
          rest_dist={listing.rest_dist}
          end_time={listing.end_time}
          handleClick={handleClick}
          ref={el => listingRefs.current[i] = el}
        />
      ))}
    </div>
  );
};

export default Listings;