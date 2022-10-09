import React from "react";
import { AddtoCartBtn } from "./AddtoCartBtn";
import data from "./CleansersData";
const products = () => {
  return (
    <div className="Shop-container">
      {data.map((obj, index) => {
        return (
          <div className="products">
            <img alt="cerave moist" src={obj.src} />
            <h1>{obj.title}</h1>
            <AddtoCartBtn />
          </div>
        );
      })}
    </div>
  );
};

export default products;
