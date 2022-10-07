import React from "react";
import FooterLogos from "./footerInfo/footerLogos";
import FooterBtns from "./footerInfo/footerBtns";
import "./footer.css";
const footer = () => {
  return (
    <div className="footer">
      <FooterLogos />
      <FooterBtns />
    </div>
  );
};

export default footer;
