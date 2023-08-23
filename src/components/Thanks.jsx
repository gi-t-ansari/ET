import React from "react";
import NavBar from "./Navbar";
import { Alert } from "antd";
import "./Thanks.css";
import { Link } from "react-router-dom";

const Thanks = () => {
  return (
    <div>
      <NavBar display={false} />
      <div className="thanksBodyContainer">
        <Alert
          message="Thank You For Consulting With Us."
          description="We will get back to you soon."
          type="success"
          showIcon
        />
        <div className="tanksFooter">
          <Link to="/">
            <button className="button">Home</button>
          </Link>
          <Link to="/form">
            <button className="button">Fill Form Again</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Thanks;
