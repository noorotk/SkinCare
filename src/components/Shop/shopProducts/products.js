import React from "react";

const products = () => {
  return (
    <div className="Shop-container">
      <div className="products">
        <img alt="cerave moist" src={`heroSliderPics/pic-${1}.png`} />
      </div>
      <div className="products">
        <img alt="cerave moist" src={`heroSliderPics/pic-${2}.png`} />
      </div>
      <div className="products">
        <img alt="cerave moist" src={`heroSliderPics/pic-${3}.png`} />
      </div>
      <div className="products">
        <img alt="cerave moist" src={`heroSliderPics/pic-${4}.png`} />
      </div>
    </div>
  );
};

export default products;
