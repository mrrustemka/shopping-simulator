import React from "react";
import { Link } from "react-router-dom";

function ProductList() {
  return (
    <div>
      <h1>ProductList</h1>
      <Link to="/basket">Proceed to checkout</Link>
    </div>
  );
}

export default ProductList;
