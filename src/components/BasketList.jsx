import React from "react";
import { Link } from "react-router-dom";
import Info from "./Info";
import Card from "./Card";
import Checkout from "./Checkout";
import BasketProduct from "./Basket";
import { useSelector } from "react-redux";
import products from "../data/products_sample.json";

function Basket() {
  const data = useSelector((state) => state);
  let basketPrice = 0;
  data.basket.forEach((element) => {
    const positionPrice = products.find((el) => el.sku === element.sku);
    basketPrice += positionPrice.price * element.quantity;
  });
  return (
    <div>
      <h1>Basket</h1>
      <Info message="Total Price" count={basketPrice} />
      {data.basket.map((product) => (
        <BasketProduct
          id={product.sku}
          quantity={product.quantity}
          key={product.sku}
        />
      ))}
      <Card />
      <Link to="/">Continue Shopping</Link>
      <Checkout />
    </div>
  );
}

export default Basket;
