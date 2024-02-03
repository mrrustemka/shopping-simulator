import React, { useState } from "react";
import { useDispatch } from "react-redux";
import products from "../data/products_sample.json";
import {
  Button,
  TableRow,
  TableCell,
  TableBody,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function BasketProduct({ id, getBasketPrice }) {
  const dispatch = useDispatch();
  const product = getProductInfo(id);
  const [quantity, setQuantity] = useState(1);

  function removeBasket(id) {
    dispatch({ type: "REMOVE-FROM-BASKET", payload: id });
  }

  function getProductInfo(id) {
    return products.find((element) => element.sku === id);
  }

  function getQuantityLimit(id) {
    const quantityLimit = products.find(
      (element) => element.sku === id
    )?.basketLimit;
    let answer = [];
    for (let i = 0; i < quantityLimit; i++) {
      answer.push(
        <MenuItem value={i + 1} key={i}>
          {i + 1}
        </MenuItem>
      );
    }
    return answer;
  }

  function getQuantity(count) {
    setQuantity(count);
    getBasketPrice(product.price * count);
  }

  return (
    <TableBody>
      <TableRow>
        <TableCell variant="h6">{product.name}</TableCell>
        <TableCell align="center">
          <FormControl sx={{ m: 1, minWidth: 75 }}>
            <InputLabel>Quantity</InputLabel>
            <Select
              id="select"
              label="Quantity"
              onChange={(e) => getQuantity(e.target.value)}
            >
              {getQuantityLimit(product.sku)}
            </Select>
          </FormControl>
        </TableCell>
        <TableCell variant="h6" align="center">
          {product.price + "$"}
        </TableCell>
        <TableCell variant="h6" align="center">
          {(product.price * quantity).toFixed(2) + "$"}
        </TableCell>
        <TableCell align="center">
          <Button
            onClick={() => removeBasket(id)}
            variant="outlined"
            startIcon={<DeleteOutlineOutlinedIcon />}
            size="small"
          >
            Remove All
          </Button>
        </TableCell>
      </TableRow>
    </TableBody>
  );
}

export default BasketProduct;
