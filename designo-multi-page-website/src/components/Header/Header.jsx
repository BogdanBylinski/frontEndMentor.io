import React from "react";
import "./_Header.scss";
function Header({ title, description }) {
  return (
    <div id="header" className="headerContainer">
      <h1>{title}</h1>
      <h4>{description}</h4>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
      <div className="circle"></div>
    </div>
  );
}

export default Header;
