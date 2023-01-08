import React from "react";
import Button from "../button/Button";
import "./_HeroPhoneCard.scss";
import phone from "../../assets/home/desktop/image-hero-phone.png";

function HeroPhoneCard() {
  return (
    <div className="HeroPhoneCard">
      <div className="oval"></div>
      <div className="HeroPhoneCard__items">
        <div className="HeroPhoneCard__items_item text">
          <h1>Award-winning custom designs and digital branding solutions</h1>
          <h4>
            With over 10 years in the industry, we are experienced in creating
            fully responsive websites, app design, and engaging brand
            experiences. Find out more about our services.
          </h4>
          <Button to={"about"} text="learn more" color="light"></Button>
        </div>
        <div
          className="HeroPhoneCard__items_item phone"
          // style={{ backgroundImage: `url(${phone})` }}
        >
          <img src={phone} alt="phone" />
        </div>
      </div>
    </div>
  );
}

export default HeroPhoneCard;
