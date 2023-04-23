import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { collection, doc, setDoc } from "firebase/firestore";
import { db } from "../firebase-config";

import axios from 'axios';

const placeURL = "https://getplace-yp3v6pqoaq-uw.a.run.app";

const SignUpPage = ({}) => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  const restaurantsRef = collection(db, "restaurants");

  const handleSubmit = async () => {
    try {
      const newDocRef = doc(restaurantsRef);
      let response = await axios.post(placeURL, {input: address});
      await setDoc(newDocRef, {
        email: email,
        password: password,
        name: name,
        address: address,
        currListings: [],
        prevListings: [],
        lat: response["data"]["candidates"][0]["geometry"]["location"]["lat"],
        lng: response["data"]["candidates"][0]["geometry"]["location"]["lng"],
        id: newDocRef.id,
      });
    } catch (err) {
      console.log(err);
    }
    navigate("/login");
  };

  return (
    <div className="sign-up-page">
      <div className="sign-up-form-container">
        <form
          className="sign-up-form"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
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
          <div className="name-input-container">
            <label className="name-label">Restaurant Name </label>
            <input
              className="name-input"
              type="string"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="address-input-container">
            <label className="address-label">Restaurant Address </label>
            <input
              className="address-input"
              type="string"
              required
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
          </div>
          <button className="sign-up-form-btn">Sign Up</button>
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
        <Link to="/login" style={{ color: "#04AA6D", textDecoration: "none" }}>
          <p id="already">Already have an account? Log in Here</p>
        </Link>
      </div>
    </div>
  );
};

export default SignUpPage;
