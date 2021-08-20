import React from "react";

const Filter = () => {
  return (
    <div className="filter card z-depth-2">
      <h2 className="title">Projects</h2>
      <div className="techs">
        <button className="tech-button selected">All</button>
        <button className="tech-button">React</button>
        <button className="tech-button">Vue</button>
        <button className="tech-button">Responsive</button>
      </div>
    </div>
  );
};

export default Filter;
