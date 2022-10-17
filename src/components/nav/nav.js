import React from "react";
import classes from "./nav.module.css";
import SideDrawer from "./SideDrawer/SideDrawer";
import NavItems from "./navItems";
import ShoppinCartIcon from "./ShoppinCartIcon";

import "react-js-stickynav/dist/index.css";

const Nav = (props) => {
  return (
    <div className={classes.navContainer}>
      <NavItems showModal={props.showModal} />
      <div className={classes.logoRES}>
        <img alt="logo" src="Logo.png" />
      </div>
      <ShoppinCartIcon active showModal={props.showModal} />
      <SideDrawer open={props.open} show={props.show} />
    </div>
  );
};

export default Nav;
