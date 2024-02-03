import React, { useState } from "react";
import { Link } from "react-router-dom";
import Info from "./Info";
import BasketProduct from "./Basket";
import { useSelector } from "react-redux";
import products from "../data/products_sample.json";
import {
  Button,
  Typography,
  TableRow,
  TableHead,
  TableContainer,
  TableCell,
  Table,
} from "@mui/material";

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
      <Typography variant="h1" component="h1" textAlign="center">
        Basket
      </Typography>
      <TableContainer>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Product Name</TableCell>
              <TableCell align="center">Selected Quantity</TableCell>
              <TableCell align="center">Unit Price</TableCell>
              <TableCell align="center">Total Price</TableCell>
              <TableCell align="center">
                <Info
                  message="Basket Items"
                  count={customerInfo.basket.length}
                  unit=""
                />
              </TableCell>
            </TableRow>
          </TableHead>
          {customerInfo.basket.map((product) => (
            <BasketProduct id={product.sku} key={product.sku} />
          ))}
        </Table>
      </TableContainer>
      <form onSubmit={isValidCardNumber}>
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
