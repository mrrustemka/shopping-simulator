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
    case "UPDATE-PRODUCT":
      return {
        ...state,
        basket: updateProduct(state.basket, action.payload, action.count),
      };
    case "UPDATE-TOTAL-AMOUNT":
      return {
        ...state,
        totalPrice: updateTotalCost(state.basket, action.payload),
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
  if (element) {
    basket.splice(basket.indexOf(element), 1);
  }
  return basket;
}

function updateProduct(basket, id, count) {
  const element = basket.find((el) => el.sku === id);
  element.quantity = count;
  return basket;
}

function updateTotalCost(totalPrice, total) {
  totalPrice = total;
  return totalPrice;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
