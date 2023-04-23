import "./App.css";
import Listings from "./components/Listings";
import CreateListing from "./pages/CreateListing";
import React, { useState, useEffect } from "react";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import UserPage from "./pages/UserPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
  const [isPopUpForm, setIsPopUpForm] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  let loggedInRestaurantId = localStorage.getItem("rest_id");
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/login" element={<LogInPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route
            path="/restaurant/:id"
            element={<UserPage loggedInRestaurantId={loggedInRestaurantId} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
