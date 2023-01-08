import React from "react";
import { useNavigate } from "react-router-dom";
import "./_Button.scss";
function Button({ text, color, to, submit }) {
  const navigate = useNavigate();
  const clickHandler = () => {
    navigate(`${to}`);
  };

  return (
    <button
      onClick={to ? () => clickHandler() : null}
      className={`button ${color}`}
    >
      {text}
    </button>
  );
}

export default Button;
