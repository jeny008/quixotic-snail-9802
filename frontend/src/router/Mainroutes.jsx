import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home/Home";
import ProductPage from "../pages/Product page/ProductPage";


export const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<ProductPage />}></Route>
    </Routes>
  );
};
