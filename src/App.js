import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basket from "./components/BasketList";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/shopping-simulator" index element={<ProductList />} />
            <Route path="/shopping-simulator/basket" index element={<Basket />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
