import React from "react";
import "./Hero.css";
import pics from "../../assets/Group 77-2.png";
const Hero = () => {
  return (
    <div className="hero">
      <img src={pics} alt="" />
      <div className="hero-text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </div>
  );
};

export default Hero;
