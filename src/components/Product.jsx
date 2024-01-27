import React from "react";

function Product({ name }) {
  return (
    <div className="product">
      <p>{name}</p>
      <p>Price</p>
      <button>Add to Basket</button>
      <button>Remove from Basket</button>
    </div>
  );
}

export default Product;
