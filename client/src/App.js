import "./App.css";
import Listings from "./components/Listings";
import CreateListing from "./pages/CreateListing";
import React, { useState, useSelector } from "react";
import SignUpPage from "./pages/SignUpPage";
import LogInPage from "./pages/LogInPage";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"; 

function App() {
  const [isPopUpForm, setIsPopUpForm] = useState(false);
  const [isAuth, setIsAuth] = useState(false);

  return (
    <div className="App">
      <BrowserRouter>
          <Routes>
            <Route path="/" element={<></>} />
            <Route
              path="/login"
              element={<LogInPage />}
            />
            <Route
              path="/signup"
              element={<SignUpPage />}
            />
          </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
