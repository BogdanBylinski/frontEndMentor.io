import React from "react";
import "./_AboutHeader.scss";
import backgroundURL from "../../assets/about/desktop/circles.svg";
import aboutImage from "../../assets/about/desktop/image-about-hero.jpg";
function AboutHeader() {
  return (
    <div className="aboutHeaderContainer">
      <div
        className="aboutHeaderContainer_left"
        style={{ backgroundImage: `url(${backgroundURL})` }}
      >
        <h1>About Us</h1>
        <h4>
          Founded in 2010, we are a creative agency that produces lasting
          results for our clients. We’ve partnered with many startups,
          corporations, and nonprofits alike to craft designs that make real
          impact. We’re always looking forward to creating brands, products, and
          digital experiences that connect with our clients’ audiences.
        </h4>
      </div>
      <div className="aboutHeaderContainer_right">
        <img src={aboutImage} alt="about" />
      </div>
    </div>
  );
}

export default AboutHeader;
