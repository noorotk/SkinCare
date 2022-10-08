import React from "react";
import "./shop.css";
import ShopSign from "./shopSign";
import ShopCategories from "./shop categories/shopCategories";
import Products from "./shopProducts/products";
const Shop = () => {
  return (
    <div className="shop">
      <ShopSign />

      <div className="shopContent">
        <ShopCategories />
        <Products />
      </div>
    </div>
  );
};

export default Shop;
