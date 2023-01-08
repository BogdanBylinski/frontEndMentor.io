import "./_ContactUs.scss";
import React from "react";
import Input from "../Input/Input";
import Button from "../button/Button";
import { useState } from "react";

function ContactUs() {
  const [errorStatus, setErrorStatus] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (inputValue.length === 0) {
      setErrorStatus(true);
      setInputValue(`Can't be empty`);
    }
  };
  return (
    <div className="contactUs">
      <div className="contactUs_left">
        <div className="contactUs_left_top">
          <h1>Contact Us</h1>
        </div>
        <div className="contactUs_left_bottom">
          <h4>
            Ready to take it to the next level? Let’s talk about your project or
            idea and find out how we can help your business grow. If you are
            looking for unique digital experiences that’s relatable to your
            users, drop us a line.
          </h4>
        </div>
      </div>
      <div className="contactUs_right">
        <form onSubmit={(e) => submitHandler(e)}>
          <Input placeholder={"Name"} type={"text"}></Input>
          <Input
            placeholder={"Email Address"}
            type={"email"}
            inputValue={inputValue}
            setInputValue={setInputValue}
            error={errorStatus}
            setErrorStatus={setErrorStatus}

            // required={true}
          ></Input>
          <Input placeholder={"Phone"} type={"text"}></Input>
          <Input
            placeholder={"Your Message"}
            type={"textarea"}
            size={"big"}
          ></Input>
          <Button color={"light"} text={"submit"}></Button>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;
