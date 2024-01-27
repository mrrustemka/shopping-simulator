import React from "react";
import { Link } from "react-router-dom";
import Total from "./Total";
import Card from "./Card";
import Checkout from "./Checkout";
import BasketProduct from "./BasketProduct";
import defaultBasket from "../data/basket_sample.json";

function Basket() {
  return (
    <div>
      <h1>Basket</h1>
      <Total />
      {defaultBasket.basket.map((product) => (
        <BasketProduct name={product.sku} quantity={product.quantity} />
      ))}
      <Card />
      <Link to="/">Continue Shopping</Link>
      <Checkout />
    </div>
  );
}

export default Basket;
