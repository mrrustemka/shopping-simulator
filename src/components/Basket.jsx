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
  Typography,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function BasketProduct({ id, getTotalBasketAmount }) {
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
    dispatch({ type: "UPDATE-PRODUCT", payload: id, count: count });
    getTotalBasketAmount();
  }

  return (
    <TableBody>
      <TableRow hover>
        <TableCell>
          <Typography variant="h6">{product.name}</Typography>
        </TableCell>
        <TableCell align="center">
          <FormControl sx={{ m: 1, minWidth: 75 }}>
            <InputLabel>Quantity</InputLabel>
            <Select
              id="select"
              label="Quantity"
              onChange={(e) => getQuantity(e.target.value)}
              defaultValue={1}
              size="small"
            >
              {getQuantityLimit(product.sku)}
            </Select>
          </FormControl>
        </TableCell>
        <TableCell align="center"><Typography variant="h6">{product.price + "$"}</Typography>
          
        </TableCell>
        <TableCell variant="h6" align="center"><Typography variant="h6">
          {(product.price * quantity).toFixed(2) + "$"} </Typography>
        </TableCell>
        <TableCell align="center">
          <Button
            onClick={() => removeBasket(id)}
            variant="outlined"
            endIcon={<DeleteOutlineOutlinedIcon />}
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
