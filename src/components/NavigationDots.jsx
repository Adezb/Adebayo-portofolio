import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
<<<<<<< HEAD
      {["home", "about", "contact", "work", "skills"].map((item, index) => (
        <a
          href={`#${item}`}
          key={item + index}
          className="app__navigation-dot"
          style={active === item ? { backgroundColor: "#313bac" } : {}}
        >
          {active === item && <span className="app__navigation-dot--active" />}
        </a>
      ))}
=======
      {["home", "about", "contact", "work", "skills", "testimonial"].map(
        (item, index) => (
          <a
            href={`#${item}`}
            key={item + index}
            className="app__navigation-dot"
            style={active === item ? { backgroundColor: "#313bac" } : {}}
          >
            {active === item && <span className="app__navigation-dot-active" />}
          </a>
        )
      )}
>>>>>>> 818082e1a0e3fab907f7eb0382d5706f6d7e4412
    </div>
  );
};

export default NavigationDots;
