import React from "react";
import { Link } from "react-router-dom";
import TotalItems from "./TotalItems";
import Card from "./Card";

function Basket() {
  return (
    <div>
      <h1>Basket</h1>
      <TotalItems />
      <Card />
      <Link to="/">Continue Shopping</Link>
    </div>
  );
}

export default Basket;
