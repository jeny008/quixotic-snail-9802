import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import ProductPage from "../pages/Product page/ProductPage";
import { ProductDetails } from "../pages/ProductDetails/ProductDetails";


export const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<ProductPage />}></Route>
      <Route path="/products/productdetails/:id" element={<ProductDetails />}></Route>
    </Routes>
  );
};
