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
        {cartItems.length === 0 ? (
          <div>Cart is empty</div>
        ) : (
          <div>
            {cartItems.map((obj, index) => {
              return (
                <div className={classes.productContainer}>
                  <img alt={obj.title} src={obj.src} />
                  <h1>{obj.title}</h1>
                  <div>{obj.price}$</div>
                  <div>Quantity:{obj.qty}</div>
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
