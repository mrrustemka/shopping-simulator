import React from "react";

function BasketProduct({ id, quantity }) {
  return (
    <div className="basket">
      <p>{id} | </p>
      <p>{quantity} | </p>
      <p>Unit Price</p>
      <p>Total Price</p>
      <button>Remove All</button>
    </div>
  );
}

export default BasketProduct;
