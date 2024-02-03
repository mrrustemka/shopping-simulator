import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "@mui/material/Button";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";

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
    <div className="product">
      <p>{name} | </p>
      <p>{description} | </p>
      <p>{price + "$"} | </p>
      {productState(id) ? (
        <Button
          onClick={() => removeBasket(id)}
          variant="outlined"
          startIcon={<DeleteOutlineOutlinedIcon />}
        >
          Remove from Basket
        </Button>
      ) : (
        <Button
          onClick={() => addBasket(id)}
          variant="contained"
          endIcon={<ShoppingCartOutlinedIcon />}
        >
          Add to Basket
        </Button>
      )}
    </div>
  );
}

export default Product;
