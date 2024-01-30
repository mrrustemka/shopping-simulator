import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Product({ name, description, price, basketLimit, id }) {
  const dispatch = useDispatch();
  const basket = useSelector((state) => state.basket);
  const addBasket = (id) => {
    dispatch({ type: "ADD-TO-BASKET", payload: id });
  };
  function removeBasket(id) {
    dispatch({ type: "REMOVE-FROM-BASKET", payload: id });
  }

  return (
    <div className="product">
      <p>{name} | </p>
      <p>{description} | </p>
      <p>{price} | </p>
      <button onClick={() => addBasket(id)}>Add to Basket</button>
      <button onClick={() => removeBasket(id)}>Remove from Basket</button>
    </div>
  );
}

export default Product;
