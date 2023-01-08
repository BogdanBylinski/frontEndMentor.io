import React from "react";
import Characteristics from "../components/Characteristics/Characteristics";
import DesignCard from "../components/DesignCard/DesignCard";
import Footer from "../components/Footer/Footer";
import GreyBubble from "../components/GreyBubble/GreyBubble";
import HeroPhoneCard from "../components/HeroPhoneCard/HeroPhoneCard";
import Navbar from "../components/Navbar/Navbar";
import "../routesStyles/_Home.scss";

function Home() {
  return (
    <div className="home">
      <Navbar></Navbar>
      <HeroPhoneCard></HeroPhoneCard>
      <div className="home_designCards">
        <GreyBubble deg={"180"}></GreyBubble>
        <div className="home_designCards_left ">
          <DesignCard
            text1="web design"
            size={"large"}
            background="web"
          ></DesignCard>
        </div>
        <div className="home_designCards_right">
          <DesignCard text1="app design" background="app"></DesignCard>
          <DesignCard text1="graphic design" background="graphic"></DesignCard>
        </div>
      </div>
      <Characteristics></Characteristics>
      <Footer></Footer>
    </div>
  );
}

export default Home;
