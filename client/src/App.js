import './App.css';
import Map from './components/Map.js'
import Listings from "./components/Listings";
import CreateListing from "./pages/CreateListing";
import React, { useState, useEffect } from "react";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import UserPage from "./pages/UserPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import MainPage from './pages/MainPage';

function App() {
  const [idClicked, setIdClicked] = useState(-1);
  const [currentLoc, setCurrentLoc] = useState({lat: 34.0689, lng: -118.4452});
  const [isPopUpForm, setIsPopUpForm] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  let loggedInRestaurantId = localStorage.getItem("rest_id");
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<></>} />
          <Route path="/app" element={<MainPage />} />
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
