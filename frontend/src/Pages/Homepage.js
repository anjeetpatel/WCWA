import React from "react";
import "../Pages/Homepage.css"
import Navbar from "../Components/Navbar";
import First from "../Components/First";
import Education from "../Components/Education";
import Membership from "../Components/Membership";

const Homepage = () => {
  return (
    <div className="home-container w-100 d-flex flex-column">
      <Navbar />
      <First />
      <Education />
      <Membership />
    </div>
  );
};

export default Homepage;
