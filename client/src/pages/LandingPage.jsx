import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "./logo.png";

const LandingPage = () => {
  return (

    <div class="flex flex-col justify-center h-screen items-center bg-secondary pb-40">
            <img src= {logo} alt = "logo" class= "self-center w-80 h-80 mb-4"/>
            <h1 class="text-primary text-5xl mb-4"> Welcome to Green Table</h1>
            <div class = "text-primary text-lg mb-4 "> Save Food From Waste</div>
            <div class="flex justify-center">
                <Link to="/app" style={{ color: "#04AA6D", textDecoration: "none" }}>
                <p class="text-2xl content-center p-4 pl-8 pr-8 mb-50 hover:bg-primary text-primary hover:text-secondary rounded-full ">Let's go!</p>
                </Link>
            </div>

            <div class="justify-self-end">
                <Link to="/login" class = "text-primary underline text-sm"> Resturant Login
                </Link>
            </div>

    </div>

  );
};
// primary: green
// secondary: beige
export default LandingPage;