import { Link } from "@chakra-ui/react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./navbar.module.css";

export const Navbar = () => {
  const [SearchText, setSearchText] = useState("")
  
  const navigate  = useNavigate()
  const handleSearch =()=>{
    console.log(SearchText);
  }
  const handleSelect =(e)=>{
      // console.log(e.target.value)
      navigate("/products")
  }
  const Scrool =()=>{
    window.scroll({
      top: 0,
      behavior: 'smooth'
    });
  }

  return (
    <div>
      <div className={styles.navbar}>
        <div onClick={()=>navigate("/")} id={styles.logo}>
          <img
            src="https://64.media.tumblr.com/b0b0f04a44b92332a6c6343ac5bf1e96/3ff50a552f527619-c9/s400x600/d7effd42407109492412543fd1f3f1613c97483a.png"
            alt="bigbasket_logo"
          />
        </div>
        <div>
          <div className={styles.userLocation}>
            <span>
              <i className="fa-solid fa-phone"></i>  1860 123 1000
            </span>
            <span>
              <i className="fa-solid fa-location-dot"></i> 560004 Bangaluru
            </span>
            <span onClick={()=>navigate("/login")}>
              <i className="fa-regular fa-user"></i> login/signup
            </span>
            <div></div>
          </div>
          <div className={styles.search_cart}>
            <div>
              <input
              style={{outline:"solid 1px #84c225"}}
                type="text"
                value={SearchText}
                onChange={(e)=>setSearchText(e.target.value)}
                placeholder="Search for products.."
              />
              <button onClick={handleSearch}>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className={styles.cart}>
              <div>
                <i className="fa-solid fa-basket-shopping"></i>
              </div>
              <div>
                <span>My Basket</span>
                <br />
                <span>{"0 item"}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.catAndoffer}>
        <select onChange={handleSelect}>
          <option value="#">SHOP BY CATOGERY</option>
          <option value="products">Fruit and vegetable</option>
          <option value="products">Bakery and Dairy</option>
          <option value="products">Foodgrain, oil and masala</option>
          <option value="products">Baverage</option>
          <option value="products">Snakes and branded foods</option>
          <option value="products">Clean and Households</option>
        </select>
        <button>
          <i className="fa-solid fa-diamond" ></i> Offers
        </button>
        <button>
          <i className="fa-solid fa-shop" ></i> BB Speciality
        </button>
      </div>
      <button onClick={Scrool} className={styles.scroll} ><i className="fa-solid fa-angle-up"></i></button>
    </div>
  );
};
