import React from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

import "./Skills.css";

const skills = [
  {
    title: "React",
    bgColor: "",
    icon: images.react,
  },
  {
    title: "Vue",
    bgColor: "",
    icon: images.vue,
  },
  {
    title: "JavaScript",
    bgColor: "",
    icon: images.javascript,
  },
  {
    title: "HTML",
    bgColor: "",
    icon: images.html,
  },
  {
    title: "CSS",
    bgColor: "",
    icon: images.css,
  },
  {
    title: "Git",
    bgColor: "",
    icon: images.git,
  },
];

const Skills = () => {
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
                <img src={skill.icon} alt={skill.title} />
              </div>
              <p className="p-text">{skill.title}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </>
  );
};

export default AppWrap(Skills, "skills");
