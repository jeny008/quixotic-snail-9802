import React from "react";
import { HomeCardSec } from "../../components/homeCardSec/HomeCardSec";
import { HomeCardSecII } from "../../components/homeCardSec2/homeCardSecII";
import { HomeCatogery } from "../../components/homeCatogery/HomeCatogery";
import { HomeSlider } from "../../components/homeTopSection/HomeSlider";
import { Navbar } from "../../components/navbar/Navbar";
import styles from "./Home.module.css";
import {
  Slidertop,
  anonymus,
  bigbasket_onlineStore,
  Brand_store,
  Home_kitchen,
  Beauty_hygine,
  clean_Household,
  Snacks_Store,
  offerBtn,
  fruitAndvegetable,
  topOffers,
  Your_Daily_Staples,
  Beverages,
  bankOffer,
} from "../Home/ImageData";
import { Footer } from "../../components/footer/Footer";
import { useEffect } from "react";
import { FooterNew } from "../../components/footer/FooterNew";
import { useNavigate } from "react-router-dom";
import {MultipleItems1,MultipleItems, ProductSlider } from "../../components/productslider/ProductSlider";
// import  from "../../components/productslider/ProductSlider";

export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title =
      "Online Grocery Shopping and Online Supermarket in India - bigbasket";
  });
  return (
    <div className={styles.home}>
      <HomeSlider image={Slidertop} />
      <div className={styles.offerBtn}>
        <div>
          <img src={offerBtn[0]} alt="" />
        </div>
        <div>
          <img src={offerBtn[1]} alt="" />
        </div>
        <div>
          <img src={offerBtn[2]} alt="" />
        </div>
        <div>
          <img src={offerBtn[3]} alt="" />
        </div>
        <div>
          <img src={offerBtn[4]} alt="" />
        </div>
        <div>
          <img src={offerBtn[5]} alt="" />
        </div>
      </div>
      <div className={styles.sectionHeading}>
        <p>My Smart Basket</p>
        <button onClick={() => navigate("/products")}>Show more</button>
      </div>
      <hr />
      <MultipleItems1 size={10} />
      <p className={styles.secHead}>Bank Offers </p>
      <hr />
      <HomeCardSecII imgData2={bankOffer} />

      <div className={styles.sectionHeading}>
        <p>Best Sellers</p>
        <button>Show more</button>
      </div>
      <hr />
      <MultipleItems size={10} />

      <h2 className={styles.secHead}>Top Offers</h2>
      <hr />
      <HomeCardSecII imgData2={topOffers} />
      <p className={styles.secHead}>Fruits & Vegetables</p>
      <hr />
      <HomeCatogery images={fruitAndvegetable} />
      <h2 className={styles.secHead}>Your Daily Staples</h2>
      <hr />
      <HomeCardSec imgData={Your_Daily_Staples} />
      <h2 className={styles.secHead}>Beverages</h2>
      <hr />
      <HomeCatogery images={Beverages} />
      <h2 className={styles.secHead}>Snacks Store</h2>
      <hr />
      <HomeCardSecII imgData2={Snacks_Store} />
      <h2 className={styles.secHead}>Cleaning & Households</h2>
      <hr />
      <HomeCardSecII imgData2={clean_Household} />
      <h2 className={styles.secHead}>Beauty & Hygiene</h2>
      <hr />
      <HomeCatogery images={Beauty_hygine} />
      <h2 className={styles.secHead}>Home & Kitchen Essentials</h2>
      <hr />
      <HomeCardSec imgData={Home_kitchen} />
      <HomeSlider image={anonymus} />
      <h2 className={styles.secHead}>Brand Store</h2>
      <hr />
      <HomeCardSec imgData={Brand_store} />
      <div className={styles.bigbasketstory}>
        <p>bigbasket – online grocery store</p>
        <p>{bigbasket_onlineStore.para1}</p>
        <p>{bigbasket_onlineStore.para2}</p>
        <ul>
          <li>{bigbasket_onlineStore.li1}</li>
          <li>{bigbasket_onlineStore.li2}</li>
          <li>{bigbasket_onlineStore.li3}</li>
        </ul>
      </div>
    </div>
  );
};
