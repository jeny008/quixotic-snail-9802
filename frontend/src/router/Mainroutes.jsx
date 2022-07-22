import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "../components/Auth/Login";
import Otp from "../components/Auth/Otp";
import UserDetails from "../components/Auth/Sigup";
import { FooterNew } from "../components/footer/FooterNew";
import { Navbar } from "../components/navbar/Navbar";
import { Home } from "../pages/Home/Home";
import ProductPage from "../pages/Product page/ProductPage";


export const Mainroutes = () => {
  return (<>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/products" element={<ProductPage />}></Route>
      <Route path="/login" element={<Login/>}></Route>
      <Route path="/signup" element={<UserDetails/>}></Route>
      <Route path="/otp" element={<Otp/>}></Route>
    </Routes>
    <FooterNew/>
    </>
  );
};
