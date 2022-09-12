import React from "react";

function Strength({ charactersCount }) {
  if (charactersCount < 5) {
    return (
      <>
        <div id="text" className="mainContainer_strength-rightText">
          Too weak!
        </div>
        <div className="mainContainer_strength-rightColumnsHolder"></div>
        <div
          className="mainContainer_strength-rightColumnsHolder-column"
          style={{ backgroundColor: "#F64A4A", border: "2px solid #F64A4A" }}
        ></div>
        <div
          className="mainContainer_strength-rightColumnsHolder-column"
          style={{
            backgroundColor: "transparent",
            border: "2px solid #E6E5EA",
          }}
        ></div>
        <div
          className="mainContainer_strength-rightColumnsHolder-column"
          style={{
            backgroundColor: "transparent",
            border: "2px solid #E6E5EA",
          }}
        ></div>
        <div
          className="mainContainer_strength-rightColumnsHolder-column"
          style={{
            backgroundColor: "transparent",
            border: "2px solid #E6E5EA",
          }}
        ></div>
      </>
    );
  }
  if (charactersCount >= 5 && charactersCount < 10) {
    return (
      <>
        <div id="text" className="mainContainer_strength-rightText">
          Weak
        </div>
        <div className="mainContainer_strength-rightColumnsHolder"></div>
        <div
          className="mainContainer_strength-rightColumnsHolder-column"
          style={{ backgroundColor: "#FB7C58", border: "2px solid #FB7C58" }}
        ></div>
        <div
          className="mainContainer_strength-rightColumnsHolder-column"
          style={{ backgroundColor: "#FB7C58", border: "2px solid #FB7C58" }}
        ></div>
        <div
          className="mainContainer_strength-rightColumnsHolder-column"
          style={{
            backgroundColor: "transparent",
            border: "2px solid #E6E5EA",
          }}
        ></div>
        <div
          className="mainContainer_strength-rightColumnsHolder-column"
          style={{
            backgroundColor: "transparent",
            border: "2px solid #E6E5EA",
          }}
        ></div>
      </>
    );
  }
  if (charactersCount >= 10 && charactersCount < 15) {
    return (
      <>
        <div id="text" className="mainContainer_strength-rightText">
          Medium
        </div>
        <div className="mainContainer_strength-rightColumnsHolder"></div>
        <div
          className="mainContainer_strength-rightColumnsHolder-column"
          style={{ backgroundColor: "#F8CD65", border: "2px solid #F8CD65" }}
        ></div>
        <div
          className="mainContainer_strength-rightColumnsHolder-column"
          style={{ backgroundColor: "#F8CD65", border: "2px solid #F8CD65" }}
        ></div>
        <div
          className="mainContainer_strength-rightColumnsHolder-column"
          style={{ backgroundColor: "#F8CD65", border: "2px solid #F8CD65" }}
        ></div>
        <div
          className="mainContainer_strength-rightColumnsHolder-column"
          style={{
            backgroundColor: "transparent",
            border: "2px solid #E6E5EA",
          }}
        ></div>
      </>
    );
  }
  if (charactersCount >= 15 && charactersCount <= 20) {
    return (
      <>
        <div id="text" className="mainContainer_strength-rightText">
          Strong
        </div>
        <div className="mainContainer_strength-rightColumnsHolder"></div>
        <div
          className="mainContainer_strength-rightColumnsHolder-column"
          style={{ backgroundColor: "#A4FFAF", border: "2px solid #A4FFAF" }}
        ></div>
        <div
          className="mainContainer_strength-rightColumnsHolder-column"
          style={{ backgroundColor: "#A4FFAF", border: "2px solid #A4FFAF" }}
        ></div>
        <div
          className="mainContainer_strength-rightColumnsHolder-column"
          style={{ backgroundColor: "#A4FFAF", border: "2px solid #A4FFAF" }}
        ></div>
        <div
          className="mainContainer_strength-rightColumnsHolder-column"
          style={{ backgroundColor: "#A4FFAF", border: "2px solid #A4FFAF" }}
        ></div>
      </>
    );
  }
}

export default Strength;
