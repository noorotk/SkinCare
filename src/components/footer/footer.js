import React from "react";
import FooterLogos from "./footerInfo/footerLogos";
import FooterBtns from "./footerInfo/footerBtns";
import "./footer.css";
import { useInView } from "react-intersection-observer";

import Endfooter from "./Endfooter";
const Footer = () => {
  const { ref, inView } = useInView({ triggerOnce: true });

  return (
    <div ref={ref} className={inView ? "show" : "hide"}>
      <div className="footer">
        <FooterLogos />
        <FooterBtns />
      </div>
      <Endfooter />
    </div>
  );
};

export default Footer;
