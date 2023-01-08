import React from "react";
import Card from "../components/Card/Card";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import "../routesStyles/_GraphicDesign.scss";
import image1 from "../assets/graphic-design/desktop/1.jpg";
import image2 from "../assets/graphic-design/desktop/2.jpg";
import image3 from "../assets/graphic-design/desktop/3.jpg";
import DesignCard from "../components/DesignCard/DesignCard";
import Footer from "../components/Footer/Footer";

function GraphicDesign() {
  return (
    <div className="graphicDesign">
      <Navbar></Navbar>
      <Header
        title={"Graphic Design"}
        description={`We deliver eye-catching branding materials that are 
tailored to meet your business objectives.
`}
      ></Header>
      <div className="graphicDesign_cards">
        <Card
          img={image1}
          text1={"TIM BROWN"}
          text2={"A book cover designed for Tim Brown’s new release, ‘Change’"}
        ></Card>
        <Card
          img={image2}
          text1={"BOXED WATER"}
          text2={"A simple packaging concept made for Boxed Water"}
        ></Card>
        <Card
          img={image3}
          text1={"SCIENCE!"}
          text2={"A poster made in collaboration with the Federal Art Project"}
        >
          {" "}
        </Card>
      </div>
      <div className="graphicDesign_designCard">
        <div className="appDesign_designCards_right">
          <DesignCard text1={"web design"} background="web"></DesignCard>
          <DesignCard text1={"app design"} background="app"></DesignCard>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}

export default GraphicDesign;
