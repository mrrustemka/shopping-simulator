import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { legacy_createStore as createStore } from "redux";
import { Provider } from "react-redux";
import defaultBasket from "./data/basket_sample.json";
import "./index.css";

const defaultState = defaultBasket;

const reducer = (state = defaultState, action) => {
  console.log(state.basket);
  // console.log(state.basket.filter((el) => Object.values(el)[0] === action.payload));
  // console.log(state.basket.indexOf())
  // console.log(state.basket.splice(0, 1));
  let a = new Object({sku: 1, quantity: 1});
  // a.sku = action.payload;
  // a.quantity = 1;
  console.log(a);
  switch (action.type) {
    case "ADD-TO-BASKET":  
    return { 
        ...state,   
        // basket: state.basket.push({
        //   2: {
        //     sku: action.payload,
        //     quantity: 1,
        //   },
        // }),
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
