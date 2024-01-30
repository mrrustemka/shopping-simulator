import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import defaultBasket from "./data/basket_sample.json";
import "./index.css";

const reducer = (state = defaultBasket, action) => {
  switch (action.type) {
    case "ADD-TO-BASKET":
      return {
        ...state,
        basket: addProduct(state.basket, { sku: action.payload, quantity: 1 }),
      };
    case "REMOVE-FROM-BASKET":
      return {
        ...state,
        basket: removeProduct(state.basket, action.payload),
      };
    default:
      return state;
  }
};
const store = createStore(reducer);

function addProduct(basket, product) {
  basket.push(product);
  return basket;
}

function removeProduct(basket, id) {
  const element = basket.find((el) => el.sku === id);
  const num = basket.indexOf(element);
  basket.splice(basket.indexOf(element), 1);
  return basket;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
