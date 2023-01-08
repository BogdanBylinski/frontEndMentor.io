import React from "react";
import AboutCharacteristics from "../components/AboutCharacteristics/AboutCharacteristics";
import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../routesStyles/_Contact.scss";

function Contact() {
  return (
    <div className="contact">
      <Navbar></Navbar>
      <ContactUs></ContactUs>
      <AboutCharacteristics></AboutCharacteristics>
      <Footer></Footer>
    </div>
  );
}

export default Contact;
