import React from "react";
import MoviesList from "./MoviesList";
import Slider from "./Slider";
import "../styles/_mainContent.scss";

function MainContent() {
  return (
    <div className="mainContent">
      <Slider></Slider>
      <MoviesList header={"Recommended for you"}></MoviesList>
    </div>
  );
}

export default MainContent;
