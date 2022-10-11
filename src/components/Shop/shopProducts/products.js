import React from "react";
import { AddtoCartBtn } from "./AddtoCartBtn";
import data from "./CleansersData";
const products = (props) => {
  const { onAdd } = props;

  return (
    <div className="Shop-container">
      {data.map((obj, index) => {
        return (
          <div key={obj.key} className="products">
            <img alt={obj.title} src={obj.src} />
            <h1>{obj.title}</h1>
            <AddtoCartBtn product={data[index]} onAdd={onAdd} />
          </div>
        );
      })}
    </div>
  );
};

export default products;
