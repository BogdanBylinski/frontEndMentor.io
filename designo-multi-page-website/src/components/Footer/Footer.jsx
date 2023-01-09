import React from "react";
import { Link } from "react-router-dom";
import "./_Footer.scss";
import { useLocation } from "react-router-dom";

import logo from "../../assets/shared/desktop/logo-light.png";
import { ReactComponent as Youtube } from "../../assets/shared/desktop/icon-youtube.svg";
import { ReactComponent as Facebook } from "../../assets/shared/desktop/icon-facebook.svg";
import { ReactComponent as Pinterest } from "../../assets/shared/desktop/icon-pinterest.svg";
import { ReactComponent as Instagram } from "../../assets/shared/desktop/icon-instagram.svg";
import { ReactComponent as Twitter } from "../../assets/shared/desktop/icon-twitter.svg";
import Button from "../button/Button.jsx";
function Footer() {
  const { pathname } = useLocation();
  return (
    <footer className="footerContainer">
      <div className="footerContainer_main">
        <div className="footerContainer_main_top">
          <Link to={"/"} className="logo">
            <img src={logo} alt="logo" />
          </Link>
          <div className="links">
            <Link to={"about"}>
              <h3>our company</h3>
            </Link>
            <Link to={"locations"}>
              <h3>locations</h3>
            </Link>
            <Link to={"contact"}>
              <h3>contact</h3>
            </Link>
          </div>
        </div>
        <div className="footerContainer_main_bottom">
          <div className="footerContainer_main_bottom_address">
            <p>Designo Central Office</p>
            <p>3886 Wellington Street </p>
            <p>Toronto, Ontario M9C 3J5</p>
          </div>
          <div className="footerContainer_main_bottom_contact">
            <p>Contact Us (Central Office)</p>
            <p>P : +1 253-863-8967 M :</p>
            <p>contact@designo.co</p>
          </div>
          <div className="footerContainer_main_bottom_socials">
            <a href="." aria-label="social media link - facebook ">
              <Facebook></Facebook>
            </a>
            <a href="." aria-label="social media link - youtube ">
              <Youtube></Youtube>
            </a>
            <a href="." aria-label="social media link - twitter ">
              <Twitter></Twitter>
            </a>
            <a href="." aria-label="social media link - pinterest ">
              <Pinterest></Pinterest>
            </a>
            <a href="." aria-label="social media link - instagram ">
              <Instagram></Instagram>
            </a>
          </div>
        </div>
        <div
          className="letsTalkAboutContainer"
          style={{ display: pathname === "/contact" ? "none" : "flex" }}
        >
          <div className="letsTalkAboutContainer_left">
            <h2>Let’s talk about your project</h2>
            <h4>
              Ready to take it to the next level? Contact us today and find out
              how our expertise can help your business grow.
            </h4>
          </div>
          <div className="letsTalkAboutContainer_right">
            <Button
              to={"/contact"}
              text={"Get in touch"}
              color={"light"}
            ></Button>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
            <div className="circle"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
