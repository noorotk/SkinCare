import React from "react";
import { AddtoCartBtn } from "./AddtoCartBtn";
import Cleanserdata from "./CleansersData";
import SerumData from "./MoistData";
import SunscreenData from "./SunscreenData";
import Moist from "./MoistData";
const products = (props) => {
  const { onAdd, tap } = props;

  let Type = Cleanserdata;
  if (tap === 1) {
    Type = Cleanserdata;
  }
  if (tap === 2) {
    Type = Moist;
  }
  if (tap === 3) {
    Type = SunscreenData;
  }
  if (tap === 4) {
    Type = SerumData;
  }

  return (
    <div className="Shop-container">
      {Type.map((obj, index) => {
        return (
          <div key={obj.key} className="products">
            <img alt={obj.title} src={obj.src} />
            <h1>{obj.title}</h1>
            <AddtoCartBtn product={Type[index]} onAdd={onAdd} />
          </div>
        );
      })}
    </div>
  );
};

export default products;
