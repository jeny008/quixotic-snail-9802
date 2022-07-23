import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login";
import Otp from "../components/Auth/Otp";
import UserDetails from "../components/Auth/Sigup";
import { FooterNew } from "../components/footer/FooterNew";
import { Navbar } from "../components/navbar/Navbar";
import { Home } from "../pages/Home/Home";
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

      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<UserDetails/>}></Route>
      <Route path="/otp" element={<Otp/>}></Route>
      {/* <Route path="/products" element={<Checkout />}></Route> */}
      {/* <Route path="/payment" element={<Payment />}></Route> */}

    </Routes>
    <FooterNew/>
    </>
    )
};
