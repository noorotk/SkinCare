import React from "react";
import classes from "./SideDrawer.module.css";
const SideDrawer = () => {
  return (
    <div className={classes.sideBar}>
      <svg
        width="35"
        height="35"
        viewBox="0 0 35 35"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 10C0 4.47715 4.47715 0 10 0H25C30.5228 0 35 4.47715 35 10V25C35 30.5228 30.5228 35 25 35H10C4.47715 35 0 30.5228 0 25V10Z"
          fill="#C6DCE4"
        />
        <path
          d="M5 9C5 8.44772 5.44772 8 6 8H29C29.5523 8 30 8.44772 30 9C30 9.55228 29.5523 10 29 10H6C5.44772 10 5 9.55228 5 9Z"
          fill="black"
        />
        <path
          d="M5 17C5 16.4477 5.44772 16 6 16H29C29.5523 16 30 16.4477 30 17C30 17.5523 29.5523 18 29 18H6C5.44772 18 5 17.5523 5 17Z"
          fill="black"
        />
        <path
          d="M5 25C5 24.4477 5.44772 24 6 24H29C29.5523 24 30 24.4477 30 25C30 25.5523 29.5523 26 29 26H6C5.44772 26 5 25.5523 5 25Z"
          fill="black"
        />
      </svg>
    </div>
  );
};

export default SideDrawer;
