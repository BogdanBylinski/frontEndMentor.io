import React from "react";
import "./_GreyBubble.scss";
function GreyBubble({ deg }) {
  return (
    <div
      style={{ transform: `rotate(${deg}deg)` }}
      className="greyBubble"
    ></div>
  );
}

export default GreyBubble;
