import React from "react";
import "./hero.css";
import IntroContainer from "../intro/introContainer";
import Herotitle from "./heroTitle/heroTitle";

const hero = (props) => {
  const { onAdd } = props;

  return (
    <div className="hero">
      <Herotitle />

      <IntroContainer onAdd={onAdd} />
    </div>
  );
};

export default hero;
