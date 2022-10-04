import React from "react";
import "./hero.css";
import IntroContainer from "../intro/introContainer";
import Herotitle from "./heroTitle/heroTitle";
const hero = () => {
  return (
    <div className="hero">
      <Herotitle />

      <IntroContainer />
    </div>
  );
};

export default hero;
