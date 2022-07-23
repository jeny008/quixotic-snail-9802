import React, { useState } from "react";
import { HomeCardSec } from "../../components/homeCardSec/HomeCardSec";
import { HomeCardSecII } from "../../components/homeCardSec2/homeCardSecII";
import { HomeCatogery } from "../../components/homeCatogery/HomeCatogery";
import { HomeSlider } from "../../components/homeTopSection/HomeSlider";
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
import { ProductSlider } from "../../components/productslider/ProductSlider";

export const Home = () => {
  const [Readmore, setReadmore] = useState(false);
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
      <ProductSlider size={10} />
      <p className={styles.secHead}>Bank Offers </p>
      <hr />
      <HomeCardSecII imgData2={bankOffer} />

      <div className={styles.sectionHeading}>
        <p>Best Sellers</p>
        <button>Show more</button>
      </div>
      <hr />
      <ProductSlider size={10} />

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
        <p>
          Did you ever imagine that the freshest of{" "}
          <span onClick={() => navigate("/products")}>
            fruits and vegetables
          </span>
          , top quality pulses and food grains, <span>dairy products</span> and
          hundreds of branded items could be handpicked and delivered to your
          home, all at the click of a button? India’s first comprehensive online
          megastore, bigbasket.com, brings a whopping 20000+ products with more
          than 1000 brands, to over 4 million happy customers. From household
          cleaning products to beauty and makeup, bigbasket has everything you
          need for your daily needs. bigbasket.com is convenience personified
          We’ve taken away all the stress associated with shopping for daily
          essentials, and you can now order all your household products and even
          buy groceries online without travelling long distances or standing in
          serpentine queues. Add to this the convenience of finding all your
          requirements at one single source, along with great savings, and you
          will realize that bigbasket- India’s largest online supermarket, has
          revolutionized the way India shops for groceries. Online grocery
          shopping has never been easier. Need things fresh? Whether it’s fruits
          and vegetables or dairy and meat, we have this covered as well! Get
          fresh eggs, meat, fish and more online at your convenience.
          Hassle-free Home Delivery options
        </p>
        <p>{bigbasket_onlineStore.para2}</p>
        <ul>
          <li>{bigbasket_onlineStore.li1}</li>
          <li>{bigbasket_onlineStore.li2}</li>
          <li>{bigbasket_onlineStore.li3}</li>
        </ul>
        {Readmore && (
          <div>
            {" "}
            <p id={styles.readmore}>India’s biggest Online Supermarket</p>
            <p>
              bigbasket.com believes in providing the highest level of customer
              service and is continuously innovating to meet customer
              expectations. Our On-time Guarantee is one such assurance where we
              refund 10% of the bill value if the delivery is delayed. For all
              your order values above Rs. 1000, we provide free delivery. A wide
              range of imported and gourmet products are available through our
              express delivery and slotted delivery service. If you ever find an
              item missing on delivery or want to return a product, you can
              report it to us within 48 hours for a ‘no-questions-asked’ refund.
            </p>
            <p>Best quality products for our quality-conscious customers.</p>
            <p>
              bigbasket.com is synonymous with superior quality and continues to
              strive for higher levels of customer trust and confidence, by
              taking feedback and giving our customers what they want. We have
              added the convenience of pre-cut fruits in our Fresho range. If
              it’s a product category you’re looking to shop from, we’ve made it
              convenient for you to access all products in a section easily. For
              instance, if you’re looking for beverages, you can order from a
              long list of beverages that include cool drinks, hot teas, fruit
              juices and more.
            </p>
            <p>
              We are proud to be associated closely with the farmers from whom
              we source our fresh products. Most of our farm-fresh products are
              sourced directly from farmers, which not only ensures the best
              prices and freshest products for our customers but also helps the
              farmers get better prices. With more than 80 Organic Fruits and
              Vegetables and a wide range of organic staples, bigbasket has the
              largest range in the organic products category.
            </p>
            <p>
              When it comes to payment, we have made it easy for our customers
              can pay through multiple payment channels like Credit and Debit
              cards, Internet Banking, e-wallets and Sodexo passes or simply pay
              Cash on Delivery (COD).The convenience of shopping for home and
              daily needs, while not compromising on quality, has made
              bigbasket.com the online supermarket of choice for thousands of
              happy customers across India.
            </p>
          </div>
        )}

        <button
          style={{ textDecoration: "underLine", color: "#84c225" }}
          onClick={() => setReadmore(!false)}
        >
          Read More...
        </button>
      </div>
    </div>
  );
};
