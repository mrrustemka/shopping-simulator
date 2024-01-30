import React from "react";
import { Link } from "react-router-dom";
import Total from "./Total";
import Card from "./Card";
import Checkout from "./Checkout";
import BasketProduct from "./Basket";
import { useDispatch, useSelector } from "react-redux";

function Basket() {
  const dispatch = useDispatch();
  const data = useSelector((state) => state.basket);
  console.log(data);
  return (
    <div>
      <h1>Basket</h1>
      <Total />
      {data.map((product) => (
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
