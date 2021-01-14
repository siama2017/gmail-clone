import React from "react";
import "./Section.css";

const Section = ({ Icon, title, color, selected }) => {
  return (
    //   if selected is true than activate section--selected class
    <div
      className={`section ${selected && "section--selected"}  `}
      style={{
        borderBottom: `3px solid ${color}`,
        color: `${selected && color}`,
      }}
    >
      <Icon />
      <h4>{title}</h4>
    </div>
  );
};

export default Section;
