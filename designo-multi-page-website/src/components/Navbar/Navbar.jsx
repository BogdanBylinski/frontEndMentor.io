import React from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../../assets/shared/desktop/logo-dark.png";
import "./_Navbar.scss";
import menu from "../../assets/shared/mobile/icon-hamburger.svg";
import closed from "../../assets/shared/mobile/icon-close.svg";
function Navbar() {
  const [active, setActive] = useState("closed");

  const navToggle = () => {
    active === "closed" ? setActive("opened") : setActive("closed");
  };
  return (
    <div className="navBar">
      <nav>
        <div className="logo">
          <NavLink to={"/"}>
            <img src={logo} alt="logo" />
          </NavLink>
        </div>
        <div className="links">
          <NavLink to={"/about"} className="link">
            our company
          </NavLink>
          <NavLink to={"/locations"} className="link">
            locations
          </NavLink>
          <NavLink to={"/contact"} className="link">
            contact
          </NavLink>
        </div>
        <button className="menu" onClick={() => navToggle()}>
          <img src={active === "opened" ? closed : menu} alt="" />
        </button>
        <div className={`links mobileLinks ${active}`}>
          <NavLink to={"/about"} className="link">
            our company
          </NavLink>
          <NavLink to={"/locations"} className="link">
            locations
          </NavLink>
          <NavLink to={"/contact"} className="link">
            contact
          </NavLink>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
