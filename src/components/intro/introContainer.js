import React from "react";
import Slider from "../slider/slider";
import "./introContainer.css";

const IntroContainer = (props) => {
  const { onAdd } = props;
  return (
    <div className="introContainer">
      <Slider onAdd={onAdd} />
    </div>
  );
};

export default IntroContainer;
