import React from "react";
import "./_StrategicCard.scss";
function StrategicCard({ image, text1, text2, text3, reverse }) {
  return (
    <div
      className={`strategicCard ${reverse ? reverse : ""}`}
      // style={{
      //   backgroundImage: `url(${backgroundURL}) ,url(${backgroundURL1})`,
      // }}
    >
      <div className="strategicCard_left">
        <h1>{text1}</h1>
        <div className="strategicCard_left_texts">
          <h4>{text2}</h4>
          <h4>{text3}</h4>
        </div>
      </div>
      <div className="strategicCard_right">
        <img src={image} alt="strategic" />
      </div>
    </div>
  );
}

export default StrategicCard;
