import React from "react";
import { useDispatch } from "react-redux";
import products from "../data/products_sample.json";

function BasketProduct({ id, quantity }) {
  const dispatch = useDispatch();

  function removeBasket(id) {
    dispatch({ type: "REMOVE-FROM-BASKET", payload: id });
  }

  function getProductInfo(id) {
    return products.find((element) => element.sku === id);
  }

  return (
    <div className="basket">
      <p>{id} | </p>
      <p>{quantity} | </p>
      <p>{getProductInfo(id)?.price} | </p>
      <p>{getProductInfo(id)?.price * quantity} | </p>
      <button onClick={() => removeBasket(id)}>Remove All</button>
    </div>
  );
}

export default BasketProduct;
