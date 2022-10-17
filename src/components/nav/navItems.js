import React from "react";
import classes from "./nav.module.css";
import ShoppinCartIcon from "./ShoppinCartIcon";
import { Link } from "react-scroll";
import AuthContext from "../helper";

const NavItems = (props) => {
  if (props.sideDrawer) {
    return (
      <AuthContext.Consumer>
        {(data) => {
          return (
            <div className={classes.navSide}>
              <div className={classes.sideDrawerHeader}>
                <button onClick={data.showLoginForm} className={classes.button}>
                  Log in
                </button>
              </div>
              <ul className={classes.ulFlex}>
                <li className={classes.li}>
                  <Link
                    onClick={data.closeDrawer}
                    smooth={true}
                    to="About"
                    spy={true}
                    offset={0}
                    duration={500}
                  >
                    About
                  </Link>
                </li>
                <li className={classes.li}>
                  {" "}
                  <Link
                    onClick={data.closeDrawer}
                    smooth={true}
                    to="Products"
                    spy={true}
                    offset={0}
                    duration={500}
                  >
                    Products
                  </Link>
                </li>
                <li className={classes.li}>
                  {" "}
                  <Link
                    onClick={data.closeDrawer}
                    smooth={true}
                    to="Contact"
                    spy={true}
                    offset={0}
                    duration={500}
                  >
                    Contact
                  </Link>
                </li>
              </ul>
              <div className={classes.rightButtons}></div>
            </div>
          );
        }}
      </AuthContext.Consumer>
    );
  } else {
    return (
      <div className={classes.nav}>
        <div className={classes.logo}>
          <img alt="logo" src="Logo.png" />
        </div>
        <ul className={classes.ulFlex}>
          <li className={classes.li}>
            <Link to="About" smooth={true} spy={true} offset={0} duration={500}>
              About
            </Link>
          </li>
          <li className={classes.li}>
            <Link
              to="Products"
              smooth={true}
              spy={true}
              offset={0}
              duration={500}
            >
              Products
            </Link>
          </li>
          <li className={classes.li}>
            {" "}
            <Link
              to="Contact"
              smooth={true}
              spy={true}
              offset={0}
              duration={500}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className={classes.rightButtons}>
          <ShoppinCartIcon showModal={props.showModal} />
          <button className={classes.button}>Log in</button>
        </div>
      </div>
    );
  }
};

export default NavItems;
