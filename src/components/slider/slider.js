import React, { Fragment, useState } from "react";
import "./Slider.css";
import { v4 as uuidv4 } from "uuid";

import BtnSlider from "./BtnSlider";
import dataSlider from "./dataSlider";
import { AddtoCartBtn } from "./AddtoCartBtn";

export default function Slider(props) {
  const { onAdd } = props;
  const [slideIndex, setSlideIndex] = useState(1);

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === dataSlider.length) {
      setSlideIndex(1);
    }
  };

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length);
    }
  };

  const info = [];
  Object.values(dataSlider[slideIndex - 1].subTitle).forEach((val) =>
    info.push(val)
  );

  return (
    <Fragment>
      <div className="big-Container">
        <div className="container-slider">
          {dataSlider.map((obj, index) => {
            return (
              <div
                key={obj.key}
                className={
                  slideIndex === index + 1 ? "slide active-anim" : "slide"
                }
              >
                <img
                  alt="cerave moist"
                  src={`heroSliderPics/pic-${index + 1}.png`}
                />
              </div>
            );
          })}

          <BtnSlider moveSlide={nextSlide} direction={"next"} />
          <BtnSlider moveSlide={prevSlide} direction={"prev"} />
        </div>
        <div className="productName">{dataSlider[slideIndex - 1].title}</div>
        <div className="productInfo">
          {info.map((value) => {
            return <div key={uuidv4()}>{value}</div>;
          })}
        </div>
        <AddtoCartBtn onAdd={onAdd} product={dataSlider[slideIndex - 1]} />
      </div>
    </Fragment>
  );
}
