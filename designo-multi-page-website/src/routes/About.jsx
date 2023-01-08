import React from "react";
import AboutHeader from "../components/AboutHeader/AboutHeader";
import Navbar from "../components/Navbar/Navbar";
import StrategicCard from "../components/StrategicCard/StrategicCard";
import "../routesStyles/_About.scss";
import image2 from "../assets/about/desktop/image-real-deal.jpg";
import image1 from "../assets/about/desktop/image-world-class-talent.jpg";
import AboutCharacteristics from "../components/AboutCharacteristics/AboutCharacteristics";
import Footer from "../components/Footer/Footer";
function About() {
  return (
    <div className="about">
      <Navbar></Navbar>
      <AboutHeader></AboutHeader>
      <StrategicCard
        image={image1}
        text1={"World-class talent"}
        reverse={"reverse"}
        text2={`We are a crew of strategists, problem-solvers, and technologists. Every design is thoughtfully crafted from concept to launch, ensuring success in its given market. We are constantly updating our skills in a myriad of platforms.   `}
        text3={`Our team is multi-disciplinary and we are not merely interested in form — content and meaning are just as important. We give great importance to craftsmanship, service, and prompt delivery. Clients have always been impressed with our high-quality outcomes that encapsulates their brand’s story and mission.`}
      ></StrategicCard>
      <AboutCharacteristics></AboutCharacteristics>
      <StrategicCard
        image={image2}
        text1={"The real deal"}
        text2={`As strategic partners in our clients’ businesses, we are ready to take on any challenge as our own. Solving real problems require empathy and collaboration, and we strive to bring a fresh perspective to every opportunity. We make design and technology more accessible and give you tools to measure success.`}
        text3={`We are visual storytellers in appealing and captivating ways. By combining business and marketing strategies, we inspire audiences to take action and drive real results.`}
      ></StrategicCard>
      <Footer></Footer>
    </div>
  );
}

export default About;
