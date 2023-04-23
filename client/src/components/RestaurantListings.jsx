import React from "react";

const RestaurantListing = ({
  id,
  food_name,
  food_quantity,
  end_time,
}) => {

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
        borderTop: "#369026 1px solid",
        borderBottom: "#369026 1px solid",
        marginTop: "-1px",
        marginLeft: "-1px",
      }}
    >
      <div className="food-name-container" style={{ flex: "1" }}>
        <p>{food_name}</p>
      </div>
      <div className="end-time-container" style={{ flex: "1" }}>
        <p>{end_time}</p>
      </div>
      <div className="food-quantity-container" style={{ flex: "1" }}>
        <p>Quantity: {food_quantity}</p>
      </div>
    </div>
  );
}


const RestaurantListings = ({ listings}) => {

  return (
    <div className="listings-container">
      {listings.map((listing, i) => (
        <RestaurantListing
          key={listing.id}
          id={listing.id}
          food_name={listing.foodName}
          food_quantity={listing.foodQuantity}
          end_time={listing.endTime}
        />
      ))}
    </div>
  );
};

export default RestaurantListings;
