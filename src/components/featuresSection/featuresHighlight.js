import React from "react";
import "./features.css";
import { useInView } from "react-intersection-observer";
const FeaturesHighlight = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className={inView ? "show" : "hide"}>
      <div className="featuresHighlight">
        <h1>Take care of your Skin!</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco
        </p>
      </div>
    </div>
  );
};

export default FeaturesHighlight;
