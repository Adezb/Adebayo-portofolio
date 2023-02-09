import React from "react";

const NavigationDots = ({ active }) => {
  return (
    <div className="app__navigation">
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
    </div>
  );
};

export default NavigationDots;
