import React from "react";
import "./_AboutCharacteristics.scss";
import { ReactComponent as Char1 } from "../../assets/shared/desktop/illustration-canada.svg";
import { ReactComponent as Char2 } from "../../assets/shared/desktop/illustration-australia.svg";
import { ReactComponent as Char3 } from "../../assets/shared/desktop/illustration-united-kingdom.svg";
import GreyBubble from "../GreyBubble/GreyBubble";
import Button from "../button/Button";

function AboutCharacteristics() {
  return (
    <div className="aboutCharacteristics_container">
      <GreyBubble deg={180}></GreyBubble>

      <div className="aboutCharacteristics_container_item">
        <div className="top">
          <div className="image">
            <div className="circle"></div>
            <Char1></Char1>
          </div>
        </div>
        <div className="bottom">
          <h3>canada</h3>
          <Button
            to={"/locations"}
            color={"dark"}
            text={"See location"}
          ></Button>
        </div>
      </div>
      <div className="aboutCharacteristics_container_item">
        <div className="top">
          <div className="image">
            <div className="circle"></div>
            <Char2></Char2>
          </div>
        </div>
        <div className="bottom">
          <h3>australia</h3>
          <Button
            to={"/locations"}
            color={"dark"}
            text={"See location"}
          ></Button>
        </div>
      </div>
      <div className="aboutCharacteristics_container_item">
        <div className="top">
          <div className="image">
            <div className="circle"></div>
            <Char3></Char3>
          </div>
        </div>
        <div className="bottom">
          <h3>united kingdom</h3>

          <Button
            to={"/locations"}
            color={"dark"}
            text={"See location"}
          ></Button>
        </div>
      </div>
    </div>
  );
}

export default AboutCharacteristics;
