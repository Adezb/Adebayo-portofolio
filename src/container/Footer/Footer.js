import React, { useState, useRef } from "react";
import { Helmet } from "react-helmet-async";
import emailjs from "@emailjs/browser";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";

import "./Footer.css";

const Footer = () => {
  const form = useRef();

  const [isFormSubmitted, setIsFormSubmitted] = useState("");
  const [emailtext, setEmailtext] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

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
        <title>Portfolio</title>
        <meta name="description" content="contact" />
      </Helmet>
      <h2 className="head-text">contact me</h2>

      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.file} alt="file" />
          <a href="BayoCV.pdf" download="Pokanu BayoCV.pdf">
            <button className="download-btn">Download CV</button>
          </a>
        </div>
        <div className="app__footer-card">
          <img src={images.smartphone} alt="mobile" />
          <a href="tel: +234 8022485204" className="p-text">
            <div className="mobile-number">+234 8022485204</div>
          </a>
        </div>
      </div>

      <div
        className="p-text"
        style={{ fontSize: 22, color: "#000", fontWeight: 600 }}
      >
        Mail{" "}
        <img
          src={images.mail}
          alt="mail"
          style={{ width: 40, height: 40, marginBottom: -10 }}
        />{" "}
        Me
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
              placeholder="Name"
              name="user_name"
              required
            />
          </div>
          <div className="app__flex">
            <input
              className="p-text"
              type="email"
              placeholder="Email Address"
              name="user_email"
              required
            />
          </div>
          <div>
            <textarea
              className="p-text"
              placeholder="Message"
              name="message"
              value={emailtext}
              onChange={(e) => setEmailtext(e.target.value)}
              required
            />
          </div>

          <button
            disabled={!emailtext}
            type="submit"
            className="p-text"
            value="Send Message"
          >
            {loading ? "Sending...." : "Send Message"}
          </button>
        </form>
      ) : (
        <div>
          <h3 className="head-text">Thank you for reaching out</h3>
        </div>
      )}
      <div className="footer__social">
        <div>
          <a href="https://twitter.com/adezb_CEO">
            <BsTwitter />
          </a>
        </div>
        <div>
          <a href="https://facebook.com/adebayo.pokanu">
            <FaFacebookF />
          </a>
        </div>
        <div>
          <a href="https://linkedin.com/in/iamadebayopoks/">
            <BsLinkedin />
          </a>
        </div>
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
  "app__neutralbg"
);
