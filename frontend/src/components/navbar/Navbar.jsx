import { Box, Image } from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Logout } from "../../redux/actions/action";
import styles from "./navbar.module.css";

export const Navbar = () => {
  const [login,setLogin]=useState(false)
 let isLogin=localStorage.getItem("login")
 const Auth=useSelector((state)=>state.Products.Auth)
  console.log(Auth,"kkk");
 const dispatch=useDispatch()
 useEffect(()=>{
  if(isLogin==="true"){
    setLogin(true)
  }
 },[isLogin, dispatch])
  
 const handleLogout=()=>{
    dispatch(Logout())
 }
  const navigate  = useNavigate()

  return (
    <div>
      <div className={styles.navbar}>
        <div onClick={()=>navigate("/")} id={styles.logo}>
          <Image w={["70%","100%","100%"]} h={[50,]}
            src="https://64.media.tumblr.com/b0b0f04a44b92332a6c6343ac5bf1e96/3ff50a552f527619-c9/s400x600/d7effd42407109492412543fd1f3f1613c97483a.png"
            alt="bigbasket_logo"
          />
        </div>
        <div>
          <div className={styles.userLocation}>
            <span>
              <i className="fa-solid fa-phone num"></i> 656465415645456
            </span>
            <span>
              <i className="fa-solid fa-location-dot add"></i> 52125 Bengaluru
            </span>
            <span className={styles.login_main} >
              <i className="fa-regular fa-user"></i> {!login?(<i onClick={()=>navigate("/login")}>login/signup</i>):(<i onClick={handleLogout}>Logout</i>)}
            </span>{" "}
            <span className={styles.login}>
              <i>
              {!login?(<i onClick={()=>navigate("/login")}>login/signup</i>):(<i onClick={handleLogout}>Logout</i>)}
              </i>
            </span>
            <div></div>
          </div>
          <div className={styles.search_cart}>
            <div className={styles.search_cart_inp}>
              <input
                type="text"
                name=""
                id=""
                placeholder="Search for products.."
              />
              <button>
                <i className="fa-solid fa-magnifying-glass"></i>
              </button>
            </div>
            <div className={styles.cart} >
              <Box >
                <i className="fa-solid fa-basket-shopping" ></i>
              </Box>
              <div>
                <span >My Basket</span>
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
          <i className="fa-solid fa-diamond"></i> Offers
        </button>
        <button>
          <i className="fa-solid fa-shop"></i> BB Speciality
        </button>
      </div>
    </div>
  );
};
