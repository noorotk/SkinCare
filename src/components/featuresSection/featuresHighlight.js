import React from "react";
import "./features.css";
import useElementOnScreen from "../hooks/useElementOnScreen";
const FeaturesHighlight = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,

    threshold: 0.15,
  });

  const observeClass = [];
  isVisible ? observeClass.push("show") : observeClass.push("hide");
  console.log("feature ", isVisible);
  return (
    <div className={observeClass}>
      <div ref={containerRef} className="featuresHighlight">
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
