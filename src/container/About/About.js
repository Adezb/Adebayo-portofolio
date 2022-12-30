import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";
import "./About.css";

const abouts = [
  {
    title: "Frontend Developer",
    description:
      "I am a frontend developer with passion for building beautiful and functional websites and applications.",
    imgUrl: images.frontend,
  },
  {
    title: "Web Designer",
    description: "I am passionate about designing the web interface.",
    imgUrl: images.webdesign,
  },
  {
    title: "Graphic Designer",
    description: "I design good graphics.",
    imgUrl: images.graphicdsgn,
  },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="About" />
      </Helmet>
      <h2 className="head-text">
        I know that a <span>Good App</span>
        <br /> is key to <span>Good Business</span>
      </h2>
      <div className="app__profiles">
        {abouts.map((about, index) => (
          <motion.div
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profile-item"
            key={about.title + index}
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(About, "about");
