import React from "react";
import "./Hero.css";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="heroContainer">
      <h1 className="heroText">
        <span className="heroSubtext">No. 1</span> Choice for{" "}
        <span className="heroSubtext">US Tax</span> filing!
      </h1>
      <Link to="/form">
        <button className="createFormButton button">Create Form</button>
      </Link>
    </div>
  );
};

export default Hero;
