import React from "react";

const ShopCategories = (props) => {
  const { ChangeIndex, tap } = props;

  return (
    <div className="shopCategories">
      <h1>Categories</h1>
      <button
        className={tap === 1 ? "active" : ""}
        onClick={() => ChangeIndex(1)}
      >
        Cleansers
      </button>
      <button
        className={tap === 2 ? "active" : ""}
        onClick={() => ChangeIndex(2)}
      >
        Moisturizers
      </button>
      <button
        className={tap === 3 ? "active" : ""}
        onClick={() => ChangeIndex(3)}
      >
        Sunscreens
      </button>
      <button
        className={tap === 4 ? "active" : ""}
        onClick={() => ChangeIndex(4)}
      >
        Serums
      </button>
    </div>
  );
};

export default ShopCategories;
