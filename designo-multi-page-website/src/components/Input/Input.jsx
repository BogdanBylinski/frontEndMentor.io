import React from "react";
import { useState } from "react";
import "./_Input.scss";
import { useEffect } from "react";
function Input({
  type,
  required,
  size,
  placeholder,
  error,
  setErrorStatus,
  inputValue,
  setInputValue,
}) {
  const [input, setInput] = useState("");
  const onFocusState = () => {
    if (error) {
      setInputValue("");
      setErrorStatus(false);
    }
  };
  useEffect(() => {
    if (error) {
      setInput(`Can't be empty`);
    }
  }, [error, input]);
  const inputHandler = (e) => {
    setInput(e.target.value);
  };

  if (type === "textarea") {
    return (
      <label htmlFor={placeholder.replace(/\s/g, "")}>
        <textarea
          id={placeholder.replace(/\s/g, "")}
          name={placeholder.replace(/\s/g, "")}
          className={`input ${size ? size : ""}`}
          value={input}
          type={type}
          //   required={required}
          onChange={(e) => inputHandler(e)}
          placeholder={placeholder}
        ></textarea>
      </label>
    );
  }
  return (
    <label htmlFor={placeholder.replace(/\s/g, "")}>
      <input
        className={`input ${error === true ? "error" : ""}`}
        value={type === "email" ? inputValue : input}
        type={type}
        // required={required}
        onFocus={type === "email" ? () => onFocusState() : null}
        onChange={
          type === "email"
            ? (e) => setInputValue(e.target.value)
            : (e) => setInput(e.target.value)
        }
        placeholder={placeholder}
        // style={{ backGroundImage: `url(${errorLogo})` }}
      />
    </label>
  );
}

export default Input;
