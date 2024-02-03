import React from "react";
import { useDispatch } from "react-redux";
import products from "../data/products_sample.json";
import { Button, TableRow, TableCell, TableBody } from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

function BasketProduct({ id, quantity }) {
  const dispatch = useDispatch();
  const product = getProductInfo(id);

  function removeBasket(id) {
    dispatch({ type: "REMOVE-FROM-BASKET", payload: id });
  }

  function getProductInfo(id) {
    return products.find((element) => element.sku === id);
  }

  return (
    <TableBody>
      <TableRow>
        <TableCell variant="h6">{product.name}</TableCell>
        <TableCell align="center">{quantity}</TableCell>
        <TableCell variant="h6" align="center">
          {product.price + "$"}
        </TableCell>
        <TableCell variant="h6" align="center">
          {product.price * quantity + "$"}
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
