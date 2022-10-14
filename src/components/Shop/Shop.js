import React from "react";
import "./shop.css";
import ShopSign from "./shopSign";
import ShopCategories from "./shop categories/shopCategories";
import Products from "./shopProducts/products";
import useElementOnScreen from "../hooks/useElementOnScreen";

const Shop = (props) => {
  const [containerRef, isVisible] = useElementOnScreen({
    root: null,

    threshold: 0.2,
  });

  const observeClass = [];
  isVisible ? observeClass.push("show") : observeClass.push("hide");
  const { onAdd } = props;
  return (
    <div ref={containerRef} className={observeClass}>
      <div className="shop">
        <ShopSign />

        <div className="shopContent">
          <ShopCategories />
          <Products onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
