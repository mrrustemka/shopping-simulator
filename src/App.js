import { BrowserRouter, Routes, Route } from "react-router-dom";
import Basket from "./components/Basket";
import ProductList from "./components/ProductList";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route>
            <Route path="/" index element={<ProductList />} />
            <Route path="/basket" index element={<Basket />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
