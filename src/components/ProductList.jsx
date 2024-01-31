import React from "react";
import { Link } from "react-router-dom";
import Info from "./Info";
import Product from "./Product";
import products from "../data/products_sample.json";
import { useSelector } from "react-redux";

function ProductList() {
  const data = useSelector((state) => state);
  console.log();
  return (
    <div>
      <h1>Product List</h1>
      <Info message="Basket Items" count={data.basket.length} />
      <Info message="Total Price" count={0} />
      {products.map((product) => (
        <Product
          key={product.sku}
          id={product.sku}
          name={product.name}
          description={product.description}
          price={product.price}
          basketLimit={product.basketLimit}
        />
      ))}
      <Link to="/basket">Proceed to checkout</Link>
    </div>
  );
}

export default ProductList;
