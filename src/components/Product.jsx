import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Button,
  Typography,
  TableRow,
  TableCell,
  TableBody,
} from "@mui/material";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function Product({ name, description, price, basketLimit, id }) {
  const dispatch = useDispatch();
  const customerInfo = useSelector((state) => state);

  const addBasket = (id) => {
    dispatch({ type: "ADD-TO-BASKET", payload: id });
  };
  function removeBasket(id) {
    dispatch({ type: "REMOVE-FROM-BASKET", payload: id });
  }

  const productState = (id) => {
    return customerInfo.basket.find((el) => el.sku === id);
  };

  return (
    <TableBody className="product">
      <TableRow hover>
        <TableCell component="th" scope="row">
          <Typography variant="h6">{name}</Typography>
        </TableCell>
        <TableCell>
          <Typography>{description}</Typography>
        </TableCell>
        <TableCell align="left">
          <Typography variant="h6">{price + "$"}</Typography>
        </TableCell>
        {productState(id) ? (
          <>
            <TableCell></TableCell>
            <TableCell align="center">
              <Button
                onClick={() => removeBasket(id)}
                variant="outlined"
                endIcon={<DeleteOutlineOutlinedIcon />}
                size="small"
              >
                Remove
              </Button>
            </TableCell>
          </>
        ) : (
          <>
            <TableCell align="center">
              <Button
                onClick={() => addBasket(id)}
                variant="contained"
                endIcon={<ShoppingCartOutlinedIcon />}
                size="small"
              >
                Add
              </Button>
            </TableCell>
            <TableCell></TableCell>
          </>
        )}
      </TableRow>
    </TableBody>
  );
}

export default Product;
