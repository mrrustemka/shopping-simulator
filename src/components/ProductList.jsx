import React from "react";
import { Link } from "react-router-dom";
import Total from "./Total";
import Product from "./Product";

function ProductList() {
  return (
    <div>
      <h1>Product List</h1>
      <Total />
      <Total />
      <Product />
      <Link to="/basket">Proceed to checkout</Link>
    </div>
  );
}

export default ProductList;
