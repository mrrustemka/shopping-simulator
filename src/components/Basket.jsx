import React from "react";
import { useDispatch } from "react-redux";
import products from "../data/products_sample.json";

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
    <div className="basket">
      <p>{product.price} | </p>
      <p>{quantity} | </p>
      <p>{product.price + "$"} | </p>
      <p>{product.price * quantity + "$"} | </p>
      <button onClick={() => removeBasket(id)}>Remove All</button>
    </div>
  );
}

export default BasketProduct;
