import React from "react";
import star from "../../assets/Star 1.png";

import "./Card.css";
const Card = (props) => {
  let { img, rating, reviewCount, country, title, price } = props;
  return (
    <div className="card">
      <img src={img} alt="" className="dp" />
      <div className="review">
        <img src={star} alt="" className="star" />
        <p className="text" id="rating">
          {rating}
        </p>
        <p className="silver-text">
          ({reviewCount}) • {country}
        </p>
      </div>
      <p className="text">{title}</p>
      <p className="text">
        <span className="bold-text">From ${price}</span> / person
      </p>
    </div>
  );
};

export default Card;
