import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import defaultBasket from "./data/basket_sample.json";
import "./index.css";

const reducer = (state = defaultBasket, action) => {
  console.log(state);
  switch (action.type) {
    case "ADD-TO-BASKET":
      return {
        ...state,
        basket: addProduct(state.basket, { sku: action.payload, quantity: 1 }),
      };
    case "REMOVE-FROM-BASKET":
      return {
        ...state,
        basket: state.basket.splice(
          state.basket.indexOf(
            state.basket.filter((el) => el.sku === action.payload)
          ),
          1
        ),
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

function removerProduct(basket, product) {
  basket.push(product);
  return basket;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
