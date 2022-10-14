import React from "react";
import FooterLogos from "./footerInfo/footerLogos";
import FooterBtns from "./footerInfo/footerBtns";
import "./footer.css";
import useElementOnScreen from "../hooks/useElementOnScreen";
import Endfooter from "./Endfooter";
const Footer = () => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,

    threshold: 0.2,
  });

  const observeClass = [];
  isVisible ? observeClass.push("show") : observeClass.push("hide");

  return (
    <div ref={containerRef} className={observeClass}>
      <div className="footer">
        <FooterLogos />
        <FooterBtns />
      </div>
      <Endfooter />
    </div>
  );
};

export default Footer;
