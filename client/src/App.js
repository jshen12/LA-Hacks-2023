import "./App.css";
import Listings from "./components/Listings";
import CreateListing from "./pages/CreateListing";
import React, { useState } from "react";
import SignUpPage from "./pages/SignUpPage";

function App() {
  const [isPopUpForm, setIsPopUpForm] = useState(false);

  return (
    <div className="App">
      <SignUpPage />
    </div>
  );
}

export default App;
