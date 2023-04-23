import React, { useState, useEffect, useRef, forwardRef, createRef} from "react";
import Listing from "./Listing";



const Listings = ({ listings, handleClick, idClicked, currentPos }) => {

  const listingRefs = useRef([]);
  const [isFlashing, setIsFlashing] = useState(false);

  useEffect(() => {
    listingRefs.current = listingRefs.current.slice(0, listings.length);
  }, [listings]);

  useEffect(() => {
    
    if (idClicked !== -1) {

      listingRefs.current[idClicked].scrollIntoView({
        behavior: "smooth",
        block: "center"
      });

      const interval = setInterval(() => {  {/*setting up flashing */}
        setIsFlashing(false);
        listingRefs.current[idClicked].classList.remove('flashing');
      }, 2000);

      listingRefs.current[idClicked].classList.add('flashing');

      return () => clearInterval(interval);
    }
  }, [idClicked])

  const [count, setCount] = useState(0);

  return (
    <div className="listings-container">
      {listings.map((listing, i) => (
        <Listing
          key={listing.id}
          id={listing.id}
          _id={listing._id}
          food_name={listing.foodName}
          food_quantity={listing.foodQuantity}
          rest_name={listing.restName}
          end_time={listing.endTime}
          sourceCoord={currentPos.lat.toString()+","+currentPos.lng.toString()}
          destCoord={listing.lat.toString()+","+listing.lng.toString()}
          handleClick={handleClick}
          ref={el => listingRefs.current[i] = el}
        />
      ))}
    </div>
  );
};

export default Listings;
