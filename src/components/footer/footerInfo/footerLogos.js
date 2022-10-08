import React from "react";
import "../footer.css";
import SocialMedia from "./SocialMedia ";
const footerLogos = () => {
  return (
    <div>
      <div className="footerLogos">
        <h1 className="footerLogo">SkinCare</h1>
        <p>Love your skin</p>
        <SocialMedia />
      </div>
    </div>
  );
};

export default footerLogos;
