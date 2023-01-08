import React from "react";
import LocationsCard from "../components/LocationsCard/LocationsCard";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function Locations() {
  return (
    <div className="locations">
      <Navbar></Navbar>
      <LocationsCard location={"canada"}></LocationsCard>
      <LocationsCard location={"australia"} reverse={"reverse"}></LocationsCard>
      <LocationsCard location={"uk"}></LocationsCard>
      <Footer></Footer>
    </div>
  );
}

export default Locations;
