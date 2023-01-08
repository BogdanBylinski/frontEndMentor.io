import React from "react";
import "./_Characteristics.scss";
import { ReactComponent as Char1 } from "../../assets/home/desktop/illustration-friendly.svg";
import { ReactComponent as Char2 } from "../../assets/home/desktop/illustration-passionate.svg";
import { ReactComponent as Char3 } from "../../assets/home/desktop/illustration-resourceful.svg";
import GreyBubble from "../GreyBubble/GreyBubble";

function Characteristics() {
  return (
    <div className="characteristics_container">
      <GreyBubble></GreyBubble>

      <div className="characteristics_container_item">
        <div className="top">
          <div className="image">
            <div className="circle"></div>
            <Char2></Char2>
          </div>
        </div>
        <div className="bottom">
          <h3>PASSIONATE</h3>
          <h4>
            Each project starts with an in-depth brand research to ensure we
            only create products that serve a purpose. We merge art, design, and
            technology into exciting new solutions.
          </h4>
        </div>
      </div>
      <div className="characteristics_container_item">
        <div className="top">
          <div className="image">
            <div className="circle"></div>
            <Char3></Char3>
          </div>
        </div>
        <div className="bottom">
          <h3>RESOURCEFUL</h3>
          <h4>
            Everything that we do has a strategic purpose. We use an agile
            approach in all of our projects and value customer collaboration. It
            guarantees superior results that fulfill our clients’ needs.
          </h4>
        </div>
      </div>
      <div className="characteristics_container_item">
        <div className="top">
          <div className="image">
            <div className="circle"></div>
            <Char1></Char1>
          </div>
        </div>
        <div className="bottom">
          <h3>FRIENDLY</h3>

          <h4>
            We are a group of enthusiastic folks who know how to put people
            first. Our success depends on our customers, and we strive to give
            them the best experience a company can provide.
          </h4>
        </div>
      </div>
    </div>
  );
}

export default Characteristics;
