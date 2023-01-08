import React, { useEffect } from "react";
import "./_DesignCard.scss";
import app from "../../assets/home/desktop/image-app-design.jpg";
import graphic from "../../assets/home/desktop/image-graphic-design.jpg";
import web from "../../assets/home/desktop/image-web-design-large.jpg";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
function DesignCard({ text1, background, size }) {
  const [backgroundURL, setbackgroundURL] = useState(null);
  const [path, setPath] = useState("");
  useEffect(() => {
    if (background === "app") {
      setbackgroundURL(app);
      setPath("appdesign");
    }
    if (background === "graphic") {
      setbackgroundURL(graphic);
      setPath("graphicdesign");
    }
    if (background === "web") {
      setbackgroundURL(web);
      setPath("webdesign");
    }
  }, [background]);
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/${path}`)}
      className={`designCard ${size}`}
      //   style={{ backgroundImage: `url(${backgroundURL})` }}
    >
      <Link className="designCard_items">
        <img src={backgroundURL} alt="" />
        <div className="designCard_items_item">
          <h1>{text1}</h1>

          <h3>
            view projects
            <span className="arrow">&#62;</span>
          </h3>
        </div>
      </Link>
    </div>
  );
}

export default DesignCard;
