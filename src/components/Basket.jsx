import React from "react";
import { useDispatch, useSelector } from "react-redux";

function BasketProduct({ id, quantity }) {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);

  function removeBasket(id) {
    dispatch({ type: "REMOVE-FROM-BASKET", payload: id });
  }

  return (
    <div className="basket">
      <p>{id} | </p>
      <p>{quantity} | </p>
      <p>Unit Price</p>
      <p>Total Price</p>
      <button onClick={() => removeBasket(id)}>Remove All</button>
    </div>
  );
}

export default BasketProduct;
