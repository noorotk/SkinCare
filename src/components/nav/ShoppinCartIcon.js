import React from "react";
import classes from "./nav.module.css";
import { useState } from "react";
import "./nav.css";
import AuthContext from "../helper";
const ShoppinCartIcon = (props) => {
  const [fix, setFix] = useState(false);

  function setFixed() {
    if (window.scrollY >= 300) {
      setFix(true);
    } else {
      setFix(false);
    }
  }
  window.addEventListener("scroll", setFixed);
  let CART = classes.shoppingCart;
  if (fix) {
    CART = classes.shoppingCartfixed;
  } else {
    CART = classes.shoppingCart;
  }

  if (!props.active) {
    return (
      <AuthContext.Consumer>
        {(length) => {
          return (
            <div>
              {length.cartLength >= 1 && (
                <div className={fix ? "dotfixedwide" : "dot"}>
                  <p>{length.cartLength}</p>
                </div>
              )}
              <div className={CART} onClick={props.showModal}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 39 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_9_167)">
                    <path
                      d="M28.0312 27.3125H10.6336L6.3832 4.54219C6.33347 4.2695 6.18748 4.02232 5.97049 3.84342C5.7535 3.66452 5.47916 3.56515 5.19492 3.5625H2.4375"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.1875 33.25C13.8702 33.25 15.2344 31.9208 15.2344 30.2812C15.2344 28.6417 13.8702 27.3125 12.1875 27.3125C10.5048 27.3125 9.14062 28.6417 9.14062 30.2812C9.14062 31.9208 10.5048 33.25 12.1875 33.25Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28.0312 33.25C29.714 33.25 31.0781 31.9208 31.0781 30.2812C31.0781 28.6417 29.714 27.3125 28.0312 27.3125C26.3485 27.3125 24.9844 28.6417 24.9844 30.2812C24.9844 31.9208 26.3485 33.25 28.0312 33.25Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.52148 21.375H28.6559C29.2256 21.3767 29.7777 21.1827 30.2151 20.827C30.6525 20.4714 30.9473 19.9769 31.0477 19.4305L32.9062 9.5H7.3125"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs></defs>
                </svg>
              </div>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  } else {
    return (
      <AuthContext.Consumer>
        {(length) => {
          return (
            <div className={classes.showCart}>
              {length.cartLength >= 1 && (
                <div className={fix ? "dotfixed" : "dot"}>
                  <p>{length.cartLength}</p>
                </div>
              )}
              <div className={CART} onClick={props.showModal}>
                <svg
                  width="30"
                  height="30"
                  viewBox="0 0 39 38"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_9_167)">
                    <path
                      d="M28.0312 27.3125H10.6336L6.3832 4.54219C6.33347 4.2695 6.18748 4.02232 5.97049 3.84342C5.7535 3.66452 5.47916 3.56515 5.19492 3.5625H2.4375"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M12.1875 33.25C13.8702 33.25 15.2344 31.9208 15.2344 30.2812C15.2344 28.6417 13.8702 27.3125 12.1875 27.3125C10.5048 27.3125 9.14062 28.6417 9.14062 30.2812C9.14062 31.9208 10.5048 33.25 12.1875 33.25Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M28.0312 33.25C29.714 33.25 31.0781 31.9208 31.0781 30.2812C31.0781 28.6417 29.714 27.3125 28.0312 27.3125C26.3485 27.3125 24.9844 28.6417 24.9844 30.2812C24.9844 31.9208 26.3485 33.25 28.0312 33.25Z"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M9.52148 21.375H28.6559C29.2256 21.3767 29.7777 21.1827 30.2151 20.827C30.6525 20.4714 30.9473 19.9769 31.0477 19.4305L32.9062 9.5H7.3125"
                      stroke="black"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </g>
                  <defs></defs>
                </svg>
              </div>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  }
};

export default ShoppinCartIcon;
