import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Product({ name, description, price, basketLimit, id }) {
  const dispatch = useDispatch();
  const customerInfo = useSelector((state) => state);
  console.log(customerInfo);

  const addBasket = (id) => {
    dispatch({ type: "ADD-TO-BASKET", payload: id });
  };
  function removeBasket(id) {
    dispatch({ type: "REMOVE-FROM-BASKET", payload: id });
  }

  const productState = (id) => {
    console.log(customerInfo.basket.find((el) => el.sku === id));
    return customerInfo.basket.find((el) => el.sku === id);
  };

  return (
    <div className="product">
      <p>{name} | </p>
      <p>{description} | </p>
      <p>{price} | </p>
      {productState(id) ? (
        <button onClick={() => removeBasket(id)}>Remove from Basket</button>
      ) : (
        <button onClick={() => addBasket(id)}>Add to Basket</button>
      )}
    </div>
  );
}

export default Product;
