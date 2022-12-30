import React, { useState } from "react";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet-async";
import { HiChevronLeft, HiChevronRight } from "react-icons/hi";

import { AppWrap } from "../../wrapper";
import { images } from "../../constants";

import "./Testimonial.css";

const testimonials = [
  {
    name: "John Doe",
    company: "Microsoft",
    imgUrl: images.css,
    feedback:
      "I am very happy with the service. I am very happy with the service. I am very happy with the service.",
  },
  {
    name: "Temitope Ogunleye",
    company: "Flutterwave",
    imgUrl: images.flutter,
    feedback:
      "I am very happy with the service. I am very happy with the service. I am very happy with the service.",
  },
  {
    name: "Adebayo Temitope",
    company: "Google",
    imgUrl: "",
    feedback: "I am very happy with the service",
  },
  {
    name: "Temitope Adebayo",
    company: "Facebook",
    imgUrl: "",
    feedback: "I am very happy with the service",
  },
];

const brands = [
  {
    imgUrl: images.adidas,
    title: "Adidas",
  },
  {
    imgUrl: images.amazon,
    title: "Amazon",
  },
  {
    imgUrl: images.bolt,
    title: "Bolt",
  },
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handleClick = (index) => {
    setActiveIndex(index);
  };

  const test = testimonials[activeIndex];
  return (
    <>
      <Helmet>
        <title>Testimonials</title>
        <meta name="description" content="Testimonials" />
      </Helmet>
      {testimonials.length && (
        <>
          <div className="app__testimonial-item app__flex">
            <img src={test.imgUrl} alt="testimonial" />
            <div className="app__testimonial-content">
              <p className="p-text">{test.feedback}</p>
              <div>
                <h4 className="bold-text">{test.name}</h4>
                <h5 className="p-text">{test.company}</h5>
              </div>
            </div>
          </div>

          <div className="app__testimonial-btns app__flex">
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  activeIndex === 0 ? testimonials.length - 1 : activeIndex - 1
                )
              }
            >
              <HiChevronLeft />
            </div>
            <div
              className="app__flex"
              onClick={() =>
                handleClick(
                  activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1
                )
              }
            >
              <HiChevronRight />
            </div>
          </div>
        </>
      )}

      <div className="app__testimonial-brands app__flex">
        {brands.map((brand) => (
          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, type: "tween" }}
            key={brand._id}
          >
            <img src={brand.imgUrl} alt={brand.title} />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default AppWrap(Testimonials, "testimonial", "app__whitebg");
