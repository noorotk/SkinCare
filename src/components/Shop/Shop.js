import React from "react";
import "./shop.css";
import ShopSign from "./shopSign";
import ShopCategories from "./shop categories/shopCategories";
import Products from "./shopProducts/products";
import { useState } from "react";
import { useInView } from "react-intersection-observer";

const Shop = (props) => {
  const [tap, setTap] = useState(1);

  const ChangeIndex = (index) => {
    setTap(index);
  };

  const { ref, inView } = useInView({ triggerOnce: true });

  const { onAdd } = props;
  return (
    <div ref={ref} id="Products" className={inView ? "show" : "hide"}>
      <div className="shop">
        <ShopSign />

        <div className="shopContent">
          <ShopCategories tap={tap} ChangeIndex={ChangeIndex} />
          <Products tap={tap} onAdd={onAdd} />
        </div>
      </div>
    </div>
  );
};

export default Shop;
