import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./About.css";

const About = () => {
  const [abouts, setAbouts] = useState([]);

  useEffect(() => {
    const query = `*[_type == "abouts"]`;

    client.fetch(query).then((data) => setAbouts(data));
  }, []);

  return (
    <>
      <Helmet>
        <title>About</title>
        <meta name="description" content="About" />
      </Helmet>
      <h2 className="head-text">
        Creative Frontend Developer <span>skilled in Web development</span>
        <br />
        and <span>building user-friendly application</span>
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
            <img src={urlFor(about.imgUrl)} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text highlight-white" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(
  MotionWrap(About, "app__about"),
  "about",
  "app__neutralbg"
);
