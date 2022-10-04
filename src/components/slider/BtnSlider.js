import React from "react";
import "./Slider.css";
import leftArrow from "./SliderIcons/left-arrow.svg";
import rightArrow from "./SliderIcons/right-arrow.svg";

export default function BtnSlider({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button
      onClick={moveSlide}
      className={direction === "next" ? "btn-slide next" : "btn-slide prev"}
    >
      <img alt="" src={direction === "next" ? rightArrow : leftArrow} />
    </button>
  );
}
