import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home2";
import Products from "./pages/Products";
import SingleProduct from "./pages/SingleProduct";
import "../../App.css";

function FirstApp() {
  return (
   
      <Routes>
        <Route path="/second" element={<Home/>} />
        <Route path="/second/products" element={<Products/>} />
        <Route path="/second/products/:productId" element={<SingleProduct/>} />
      </Routes>
    
  );
}

export default FirstApp;
