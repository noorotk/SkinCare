import React from "react";
import classes from "./nav.module.css";
import SideDrawer from "./SideDrawer/SideDrawer";

const nav = (props) => {
  return (
    <div className={classes.nav}>
      <div className={classes.logo}>
        <img alt="logo" src="Logo.png" />
      </div>
      <SideDrawer open={props.open} show={props.show} />
      <ul className={classes.ulFlex}>
        <li className={classes.li}>About</li>
        <li className={classes.li}>Products</li>
        <li className={classes.li}>Contact</li>
      </ul>
      <div className={classes.rightButtons}>
        <div className={classes.shoppingCart} onClick={props.showModal}></div>
        <button className={classes.button}>Log in</button>
      </div>
    </div>
  );
};

export default nav;
