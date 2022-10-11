import React from "react";

export const AddtoCartBtn = (props) => {
  const { onAdd, product } = props;
  return (
    <div>
      <button onClick={() => onAdd(product)} className="AddtoCartBtn">
        Add to cart
      </button>
    </div>
  );
};
