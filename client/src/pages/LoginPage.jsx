import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";

const LogInPage = ({}) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    let loggedInRestaurantId = null;
    const restaurantsRef = collection(db, "restaurants");
    try {
      const restaurants = await getDocs(restaurantsRef);
      restaurants.forEach((restaurant) => {
        let restaurantData = restaurant.data();
        if (restaurantData.email == email && restaurantData.password == password) {
          loggedInRestaurantId = restaurant.id;
        }
      });
      if (loggedInRestaurantId) {
        localStorage.setItem("rest_id", loggedInRestaurantId);
        navigate("/restaurant/"+loggedInRestaurantId.toString());
      }

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="sign-up-page">
      <div className="sign-up-form-container">
        <form className="sign-up-form" onSubmit={(e) => {
          e.preventDefault();
          handleSubmit();
        }}>
          <div className="email-input-container">
            <label className="email-label">Email </label>
            <input
              className="email-input"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="password-input-container">
            <label className="password-label">Password </label>
            <input
              className="password-input"
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button className="sign-up-form-btn">Log In</button>
        </form>
      </div>
      <div
        style={{
          marginTop: "1rem",
          textAlign: "left",
          color: "#04AA6D",
          cursor: "pointer",
        }}
      >
        <Link to="/signup" style={{ color: "#04AA6D", textDecoration: "none" }}>
          <p id="already">Don't have an account? Sign Up Here</p>
        </Link>
      </div>
    </div>
  );
};

export default LogInPage;
