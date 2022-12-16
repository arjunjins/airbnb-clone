import React from "react";
import katie from "../../assets/image 12.png";
import star from "../../assets/Star 1.png";
import "./Card.css";
const Card = () => {
  return (
    <div className="card">
      <img src={katie} alt="" className="dp" />
      <div className="review">
        <img src={star} alt="" className="star" />
        <p className="text" id="rating">5.0</p>
        <p className="silver-text">(6) • USA</p>
      </div>
      <p className="text">Lessons with Katie Zaferes</p>
      <p className="text">
        <span className="bold-text">From $136</span> / person
      </p>
    </div>
  );
};

export default Card;
