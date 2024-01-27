import React from "react";
import { Link } from "react-router-dom";
import TotalItems from "./Total";

function ProductList() {
  return (
    <div>
      <h1>Product List</h1>
      <TotalItems />
      <Link to="/basket">Proceed to checkout</Link>
    </div>
  );
}

export default ProductList;
