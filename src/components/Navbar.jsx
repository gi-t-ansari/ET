import React from "react";
import "./Navbar.css";
import logo1 from "../Assets/logo1.svg";
import logo from "../Assets/logo.jpg";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbarContainer">
      <div className="logoContainer">
        <Link to="/">
          <img className="logo" src={logo} alt="logo" />
        </Link>
      </div>
      <div>
        <div className="navBarLogo1">
          <img className="navBarLogo1Img" src={logo1} alt="logo1" />
        </div>
      </div>
    </div>
  );
};

export default NavBar;
