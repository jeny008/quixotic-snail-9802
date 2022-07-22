import React from "react";
import { Route, Routes } from "react-router-dom";
import { FooterNew } from "../components/footer/FooterNew";
import { Navbar } from "../components/navbar/Navbar";
import { Home } from "../pages/Home/Home";
// import {Cart} from "../pages/Payment/Cart";
import { Cart } from "../pages/Payment/Cart";
import ProductPage from "../pages/Product page/ProductPage";

export const Mainroutes = () => {
  return (<>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      {/* <Route path="/products" element={<Checkout />}></Route> */}
      {/* <Route path="/payment" element={<Payment />}></Route> */}

    </Routes>
    {/* <Checkout/> */}
    <Cart/>

    <FooterNew/>
    </>
  );
};
