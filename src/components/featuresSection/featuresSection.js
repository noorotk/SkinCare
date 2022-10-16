import React from "react";
import FeaturesHighlight from "./featuresHighlight";
import FeaturesIcons from "./features Icons/featuresIcons";

const FeaturesSection = (props) => {
  return (
    <div id="About">
      <FeaturesIcons />
      <FeaturesHighlight />
    </div>
  );
};

export default FeaturesSection;
