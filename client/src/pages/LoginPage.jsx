import React, { useState } from "react";
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase-config";


const LogInPage = ({}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async () => {
    let loggedInRestaurant = {}
    const restaurantsRef = collection(db, "restaurant");
    const restaurants = await getDocs(restaurantsRef);
    restaurants.forEach(restaurant => {
      if (restaurant.email == email && restaurant.password == password) {
        loggedInRestaurant = restaurant;
      }
    })

    if (loggedInRestaurant) {
      localStorage.setItem("rest_id", loggedInRestaurant._id);
    }
  };

  return (
    <div className="sign-up-page">
      <div className="sign-up-form-container">
        <form className="sign-up-form" onSubmit={() => handleSubmit()}>
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
