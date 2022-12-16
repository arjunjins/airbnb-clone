import React from "react";
import logo from "../../assets/airbnb 1.png";
import "./Navbar.css";
const Navbar = () => {
  return (
    <nav className="navbar">
      <img src={logo} alt="" className="airbnb-logo" />
    </nav>
  );
};

export default Navbar;
