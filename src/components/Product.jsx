import React from "react";
import { useDispatch, useSelector } from "react-redux";

function Product({ name, description, price, basketLimit }) {
  const dispatch = useDispatch();
  const product = useSelector((state) => state.product);

  const addProduct = (product) => {
    dispatch({ type: "ADD-TO-BASKET", payload: product });
  };
  function removeProduct(product) {
    dispatch({ type: "REMOVE-FROM-BASKET", payload: product });
  }
  return (
    <div className="product">
      <p>{name} | </p>
      <p>{description} | </p>
      <p>{price} | </p>
      <button onClick={() => addProduct()}>Add to Basket</button>
      <button onClick={() => removeProduct()}>Remove from Basket</button>
    </div>
  );
}

export default Product;
