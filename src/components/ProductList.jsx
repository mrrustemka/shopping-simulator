import React from "react";
import { Link } from "react-router-dom";
import Total from "./Total";
import Product from "./Product";
import products from "../data/products_sample.json";

function ProductList() {
  return (
    <div>
      <h1>Product List</h1>
      <Total />
      <Total />
      {products.map((product) => (
        <Product
          name={product.name}
          description={product.description}
          key={product.sku}
          price={product.price}
          basketLimit={product.basketLimit}
        />
      ))}
      <Link to="/basket">Proceed to checkout</Link>
    </div>
  );
}

export default ProductList;
