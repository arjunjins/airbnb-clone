import React from "react";
import "./Hero.css";
import pics from "../../assets/Group 77-2.png";
const Hero = () => {
  return (
    <section className="hero">
      <img src={pics} alt="" />
      <div className="hero-text">
        <h1>Online Experiences</h1>
        <p>
          Join unique interactive activities led by one-of-a-kind hosts—all
          without leaving home.
        </p>
      </div>
    </section>
  );
};

export default Hero;
