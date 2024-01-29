import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import defaultBasket from "./data/basket_sample.json";
import "./index.css";

const defaultState = defaultBasket;

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD-TO-BASKET":
      return {
        ...state,
        basket: state.basket.push({ sku: action.payload, quantity: 1 }),
      };
    case "REMOVE-FROM-BASKET":
      return {
        ...state,
      };
    default:
      return state;
  }
};
const store = createStore(reducer);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
