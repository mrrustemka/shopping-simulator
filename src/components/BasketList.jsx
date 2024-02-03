import React, { useState } from "react";
import { Link } from "react-router-dom";
import Info from "./Info";
import BasketProduct from "./Basket";
import { useSelector } from "react-redux";
import products from "../data/products_sample.json";

function Basket() {
  const customerInfo = useSelector((state) => state);
  let basketPrice = 0;
  const [cardNumber, setCardNumber] = useState("");

  customerInfo.basket.forEach((element) => {
    const positionPrice = products.find((el) => el.sku === element.sku);
    basketPrice += positionPrice.price * element.quantity;
  });

  function isValidCardNumber(e) {
    if (cardNumber.length !== 16) {
      alert("Incorrect Card Number");
      e.preventDefault();
    }
    return;
  }

  return (
    <div>
      <form onSubmit={isValidCardNumber}>
        <h1>Basket</h1>
        <Info message="Basket Items" count={customerInfo.basket.length} unit="" />
        {customerInfo.basket.map((product) => (
          <BasketProduct
            id={product.sku}
            quantity={product.quantity}
            key={product.sku}
          />
        ))}
        Bank Card:
        <input
          id="card"
          placeholder="Enter your credit/debit card..."
          type="text"
          onChange={(e) => setCardNumber(e.target.value)}
        />
        <button type="submit">Checkout</button>
      </form>
      <Info message="Total Price" count={basketPrice} unit="$" />
      <Link to="/">Continue Shopping</Link>
    </div>
  );
}

export default Basket;
