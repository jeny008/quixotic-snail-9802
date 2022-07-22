import React from "react";
import { Route, Routes } from "react-router-dom";
import { FooterNew } from "../components/footer/FooterNew";
import { Navbar } from "../components/navbar/Navbar";
import { Home } from "../pages/Home/Home";
// import {Cart} from "../pages/Payment/Cart";
import { Cart } from "../pages/Payment/Cart";
import ProductPage from "../pages/Product page/ProductPage";
import { ProductDetails } from "../pages/ProductDetails/ProductDetails";

export const Mainroutes = () => {
  return (<>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<ProductPage />}></Route>
      <Route path="/products/productdetails/:id" element={<ProductDetails />}></Route>
    </Routes>
    {/* <Checkout/> */}
    <Cart/>

    <FooterNew/>
    </>
  );
};
