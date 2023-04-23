import React, { useState, useEffect, forwardRef } from "react";

// maybe add path to food image
const Listing = forwardRef(function Listing({
  id,
  food_name,
  food_quantity,
  rest_name,
  rest_dist,
  end_time,
  handleClick,
}, ref) {
  // event listener for clicking on listing
  const onListingClick = (e) => {handleClick(id)};

  end_time =
    (end_time.getMonth() + 1) +
    "/" +
    end_time.getDate() +
    "/" +
    end_time.getFullYear() +
    " @ " +
    end_time.getHours() +
    ":" +
    (end_time.getMinutes() < 10 ? "0" : "") +
    end_time.getMinutes();

  return (
    <div
      className="listing-container"
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        borderTop: "gray 1px solid",
        borderBottom: "gray 1px solid",
        marginTop: "-1px",
        marginLeft: "-1px",
      }}
      onClick={() => handleClick(id)}
      ref={ref}
    >
      <div className="food-name-container" style={{ flex: "1" }}>
        <p>{food_name}</p>
      </div>
      <div className="end-time-container" style={{ flex: "1" }}>
        <p>{end_time}</p>
      </div>
      <div
        className="rest-container"
        style={{
          flex: "1",
          display: "flex",
          justifyContent: "flex-start",
          gap: "0.5rem",
        }}
      >
        <p>{rest_name}</p>
        <p>{rest_dist} mi</p>
      </div>
      <div className="food-quantity-container" style={{ flex: "1" }}>
        <p>Quantity: {food_quantity}</p>
      </div>
    </div>
  );
  });

export default Listing;
