import React from "react";
import classes from "./nav.module.css";
import ShoppinCartIcon from "./ShoppinCartIcon";

const navItems = (props) => {
  if (props.sideDrawer) {
    return (
      <div className={classes.navSide}>
        <div className={classes.sideDrawerHeader}>
          <div className={classes.logo}></div>
          <button className={classes.button}>Log in</button>
        </div>
        <ul className={classes.ulFlex}>
          <li className={classes.li}>About</li>
          <li className={classes.li}>Products</li>
          <li className={classes.li}>Contact</li>
          <div className={classes.shoppingCart}></div>
        </ul>
        <div className={classes.rightButtons}></div>
      </div>
    );
  } else {
    return (
      <div className={classes.nav}>
        <div className={classes.logo}>
          <img alt="logo" src="Logo.png" />
        </div>
        <ul className={classes.ulFlex}>
          <li className={classes.li}>About</li>
          <li className={classes.li}>Products</li>
          <li className={classes.li}>Contact</li>
        </ul>

        <div className={classes.rightButtons}>
          <ShoppinCartIcon showModal={props.showModal} />
          <button className={classes.button}>Log in</button>
        </div>
      </div>
    );
  }
};

export default navItems;
