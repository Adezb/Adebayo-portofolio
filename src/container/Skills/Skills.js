import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { AppWrap, MotionWrap } from "../../wrapper";
import { urlFor, client } from "../../client";

import "./Skills.css";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  // const [experience, setExperience] = useState([]);

  useEffect(() => {
    const query = `*[_type == "skills"]`;
    // const querySkills = `*[_type == "experience"]`;

    client.fetch(query).then((data) => {
      setSkills(data);
    });

    // client.fetch(querySkills).then((data) => {
    //   setExperience(data);
    // });
  }, []);
  return (
    <>
      <Helmet>
        <title>Skills</title>
        <meta name="description" content="Skills" />
      </Helmet>
      <h2 className="head-text">Skills</h2>

      <div className="app__skills-container">
        <motion.div className="app__skills-list">
          {skills.map((skill) => (
            <motion.div
              whileInView={{ opacity: [0, 1] }}
              transition={{ duration: 0.5 }}
              className="app__skills-item app__flex"
              key={skill.title}
            >
              <div
                className="app__flex"
                style={{ backgroundColor: skill.bgColor }}
              >
                <img src={urlFor(skill.icon)} alt={skill.name} />
              </div>
              <p className="p-text">{skill.name}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(MotionWrap(Skills, "app__skills"), "skills");
