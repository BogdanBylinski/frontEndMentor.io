import React from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import "../routesStyles/_AppDesign.scss";
import image1 from "../assets/app-design/desktop/1.jpg";
import image2 from "../assets/app-design/desktop/2.jpg";
import image3 from "../assets/app-design/desktop/3.jpg";
import image4 from "../assets/app-design/desktop/4.jpg";
import image5 from "../assets/app-design/desktop/5.jpg";
import DesignCard from "../components/DesignCard/DesignCard";
import Footer from "../components/Footer/Footer";

function AppDesign() {
  return (
    <div className="appDesignContainer">
      <Navbar></Navbar>
      <Header
        title={"App Design"}
        description={`Our mobile designs bring intuitive digital solutions to your customers right at their fingertips.`}
      ></Header>
      <div className="appDesign_cards">
        <Card
          img={image1}
          text1={"AIRFILTER"}
          text2={
            "Solving the problem of poor indoor air quality by filtering the air"
          }
        ></Card>
        <Card
          img={image2}
          text1={"EYECAM"}
          text2={
            "Product that lets you edit your favorite photos and videos at any time"
          }
        ></Card>
        <Card
          img={image3}
          text1={"FACEIT"}
          text2={
            "Get to meet your favorite internet superstar with the faceit app"
          }
        ></Card>
        <Card
          img={image4}
          text1={"TODO"}
          text2={"A todo app that features cloud sync with light and dark mode"}
        ></Card>
        <Card
          img={image5}
          text1={"LOOPSTUDIOS"}
          text2={"A VR experience app made for Loopstudios"}
        ></Card>
      </div>
      <div className="appDesign_designCard">
        <div className="appDesign_designCards_right">
          <DesignCard text1={"web design"} background="web"></DesignCard>
          <DesignCard
            text1={"graphic design"}
            background="graphic"
          ></DesignCard>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default AppDesign;
