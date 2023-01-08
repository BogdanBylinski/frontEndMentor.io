import React from "react";
import DesignCard from "../components/DesignCard/DesignCard";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../routesStyles/_WebDesign.scss";
import image1 from "../assets/web-design/desktop/1.jpg";
import image2 from "../assets/web-design/desktop/2.jpg";
import image3 from "../assets/web-design/desktop/3.jpg";
import image4 from "../assets/web-design/desktop/4.jpg";
import image5 from "../assets/web-design/desktop/5.jpg";
import image6 from "../assets/web-design/desktop/6.jpg";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";

function WebDesign() {
  return (
    <div className="webDesign">
      <Navbar></Navbar>
      <Header
        title={"Web Design"}
        description={`We build websites that serve as powerful marketing tools 
and bring memorable brand experiences.`}
      ></Header>
      <div className="webDesign_cards">
        <Card
          img={image1}
          text1={"EXPRESS"}
          text2={"A multi-carrier shipping website for ecommerce businesses"}
        ></Card>
        <Card
          img={image2}
          text1={"TRANSFER"}
          text2={
            "Site for low-cost money transfers and sending money within seconds"
          }
        ></Card>
        <Card
          img={image3}
          text1={"PHOTON"}
          text2={
            "A state-of-the-art music player with high-resolution audio and DSP effects"
          }
        ></Card>
        <Card
          img={image4}
          text1={"BUILDER"}
          text2={
            "Connects users with local contractors based on their location"
          }
        ></Card>
        <Card
          img={image5}
          text1={"BLOGR"}
          text2={
            "Blogr is a platform for creating an online blog or publication"
          }
        ></Card>
        <Card
          img={image6}
          text1={"CAMP"}
          text2={
            "Get expert training in coding, data, design, and digital marketing"
          }
        ></Card>
      </div>
      <div className="webDesign_designCard">
        <div className="webDesign_designCards_right">
          <DesignCard text1={"app design"} background="app"></DesignCard>
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

export default WebDesign;
