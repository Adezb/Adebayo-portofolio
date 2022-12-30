import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";

import { images } from "../../constants";
import { AppWrap } from "../../wrapper";

import "./Footer.css";

const Footer = () => {
  const form = useRef();

  const [isFormSubmitted, setIsFormSubmitted] = useState("");

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_x5u1m7w",
        "template_bixs2tq",
        form.current,
        "l9eft18Vm-J5qX0QU"
      )
      .then(
        (result) => {
          setIsFormSubmitted(result.text);
        },
        (error) => {
          setIsFormSubmitted(error.text);
        }
      );
  };

  return (
    <>
      <Helmet>
        <title>Footer</title>
        <meta name="description" content="Footer" />
      </Helmet>
      <h2 className="head-text">You can contact me here</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.mail} alt="email" />
          <a href="mailto:temitopeceo@gmail.com" className="p-text">
            temitopeceo@gmail.com
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.smartphone} alt="mobile" />
          <a href="tel: +234 8022485204" className="p-text">
            +234 8022485204
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <form
          ref={form}
          onSubmit={sendEmail}
          className="app__footer-form app__flex"
        >
          <div className="app__flex">
            <input
              className="p-text"
              type="text"
              placeholder="Your Name"
              name="user_name"
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Your Email"
              name="user_email"
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Your Message"
              name="message"
            />
          </div>
          <input type="submit" className="p-text" value="Send Message" />
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for reaching out</h3>
        </div>
      )}
    </>
  );
};

export default AppWrap(Footer, "contact", "app__neutralbg");
