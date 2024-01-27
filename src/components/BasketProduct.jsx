import React from "react";

function BasketProduct({ name, quantity }) {
  return (
    <div className="basket">
      <p>{name} | </p>
      <p>{quantity} | </p>
      <p>Unit Price</p>
      <p>Total Price</p>
      <button>Remove All</button>
    </div>
  );
}

export default BasketProduct;
