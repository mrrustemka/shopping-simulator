import React from "react";
import { Link } from "react-router-dom";
import Total from "./Total";
import Card from "./Card";
import Checkout from "./Checkout";

function Basket() {
  return (
    <div>
      <h1>Basket</h1>
      <Total />
      <Card />
      <Link to="/">Continue Shopping</Link>
      <Checkout />
    </div>
  );
}

export default Basket;
