import React from "react";
import { Link } from "react-router-dom";
import TotalItems from "./TotalItems";

function Basket() {
  return (
    <div>
      <h1>Basket</h1>
      <TotalItems />
      <Link to="/">Continue Shopping</Link>
    </div>
  );
}

export default Basket;
