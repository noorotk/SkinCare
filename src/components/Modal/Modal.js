import React, { Component, Fragment } from "react";
import Backdrop from "../backdrop/Backdrop";
import classes from "./Modal.module.css";

const Modal = (props) => {
  const { cartItems } = props;
  return (
    <Fragment>
      <Backdrop show={props.show} close={props.close} />
      <div
        className={classes.Modal}
        style={{
          transform: props.show ? "translateY(0)" : "translateY(-100vh)",
          opacity: props.show ? "1" : "0",
        }}
      >
        <button className={classes.closeBtn}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ionicon"
            viewBox="0 0 512 512"
          >
            <title>Close</title>
            <path
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="32"
              d="M368 368L144 144M368 144L144 368"
            />
          </svg>
        </button>
        {cartItems.length === 0 ? (
          <div className={classes.empty}>Cart is empty</div>
        ) : (
          <div>
            {cartItems.map((obj, index) => {
              return (
                <div className={classes.productContainer}>
                  <img alt={obj.title} src={obj.src} />
                  <h1>{obj.title}</h1>
                  <div>{obj.price}$</div>
                  <div className={classes.Qty}>
                    <div>Quantity:{obj.qty}</div>
                    <div>
                      <button>-</button>
                      <button>+</button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default Modal;
//  <button  className={classes.closeModal}>
//           close
//         </button>
