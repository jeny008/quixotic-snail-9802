import React from "react";
import styles from "./navbar.module.css";

export const Navbar = () => {
  return (
    <div>
      <div className={styles.navbar}>
        <div id={styles.logo}>
          <img
            src="https://64.media.tumblr.com/b0b0f04a44b92332a6c6343ac5bf1e96/3ff50a552f527619-c9/s400x600/d7effd42407109492412543fd1f3f1613c97483a.png"
            alt="bigbasket_logo"
          />
        </div>
        <div>
          <div className={styles.userLocation}>
            <span>
              <i class="fa-solid fa-phone"></i> 656465415645456
            </span>
            <span>
              <i class="fa-solid fa-location-dot"></i> 52125 Bengaluru
            </span>
            <span>
              <i class="fa-regular fa-user"></i> login/signup
            </span>{" "}
            <div></div>
          </div>
          <div className={styles.search_cart}>
            <div>
              <input
                type="text"
                name=""
                id=""
                placeholder="Search for products.."
              />
              <button>
                <i class="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className={styles.cart}>
              <div>
                <i class="fa-solid fa-basket-shopping"></i>
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
        <select name="" id="">
          <option value="">SHOP BY CATOGERY</option>
        </select>
        <button>
          {" "}
          <i class="fa-solid fa-diamond"></i> Offers
        </button>
        <button>
          <i class="fa-solid fa-shop"></i> BB Speciality
        </button>
      </div>
    </div>
  );
};
