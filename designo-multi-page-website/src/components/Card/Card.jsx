import React from "react";
import { Link } from "react-router-dom";
import "./_Card.scss";
function Card({ img, text1, text2 }) {
  return (
    <Link className="cardContainer">
      <div className="cardContainer_top">
        <img src={img} alt="webImage" />
      </div>
      <div className="cardContainer_bottom">
        <h3>{text1}</h3>
        <h4>{text2}</h4>
      </div>
    </Link>
  );
}

export default Card;
