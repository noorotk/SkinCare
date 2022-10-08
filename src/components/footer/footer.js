import React from "react";
import FooterLogos from "./footerInfo/footerLogos";
import FooterBtns from "./footerInfo/footerBtns";
import "./footer.css";
import Endfooter from "./Endfooter";
const footer = () => {
  return (
    <div>
      <div className="footer">
        <FooterLogos />
        <FooterBtns />
      </div>
      <Endfooter />
    </div>
  );
};

export default footer;
