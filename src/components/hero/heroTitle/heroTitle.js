import React from "react";
import "./heroTitle.css";
import SignUpBtn from "./signUpBtn";
const heroTitle = () => {
  return (
    <div className="container">
      <h1 className="num1">#1</h1>
      <h1>Dermatologist Recommended Products</h1>

      <br></br>
      <SignUpBtn />
    </div>
  );
};

export default heroTitle;
