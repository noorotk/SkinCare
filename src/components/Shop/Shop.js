import React from "react";
import "./shop.css";
import ShopSign from "./shopSign";
import ShopCategories from "./shop categories/shopCategories";
import Products from "./shopProducts/products";
const Shop = (props) => {
  const { onAdd } = props;
  return (
    <div className="shop">
      <ShopSign />

      <div className="shopContent">
        <ShopCategories />
        <Products onAdd={onAdd} />
      </div>
    </div>
  );
};

export default Shop;
