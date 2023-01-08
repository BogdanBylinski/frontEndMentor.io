import React from "react";
import { NavLink } from "react-router-dom";
function DesktopMenu() {
  return (
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
  );
}

export default DesktopMenu;
