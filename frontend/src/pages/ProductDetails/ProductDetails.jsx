import React, { useState } from "react";
import {
  Add_To_Cart,
  getOne,
  GetProductsData,
} from "../../redux/actions/action";
import { useAlert } from "react-alert";
import {
  Box,
  Button,
  Popover,
  PopoverArrow,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Radio,
  Text,
} from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import styled from "../ProductDetails/productDetails.module.css";
import { useEffect } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { ProductSlider } from "../../components/productslider/ProductSlider";
export const ProductDetails = () => {
  const { id } = useParams();
  // console.log(id);
  const isLogin = localStorage.getItem("login");
  const [count, setcount] = useState(1);
  const [productDetail, setproductDetail] = useState({});
  // console.log("productDetail", productDetail);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const alert = useAlert();
  useEffect(() => {
    axios
      .get("https://bigbasketclon.herokuapp.com/BigBasket/product")
      .then(({ data }) => {
        // console.log("data", data.data);
        let prodDet = data.data.filter((elem) => elem._id === id)[0];
        // console.log("prodDet", prodDet);
        setproductDetail(prodDet);
      })
      .catch((err) => console(err));
  }, [dispatch]);

  const handleclick = () => {
    dispatch(Add_To_Cart(id, navigate, alert, isLogin));
  };
  return (
    <div className={styled.cantainer}>
      <div className={styled.flexdiv}>
        <p style={{ fontSize: "12px", marginTop: "25px" }}>
          HOME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FRUITS &
          VEGETABLES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FRESH
          VEGETABLES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;POTATO, ONION &
          TOMATO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FRESHO ONION
        </p>
        <div className={styled.icon}>
          <p
            style={{
              color: "color: #999",
              textAlign: "center",
            }}
          >
            Share On
          </p>
          <i style={{ color: "blue" }} class="fa-brands fa-facebook"></i>
          <i style={{ color: "drakblue" }} class="fa-brands fa-twitter"></i>
          <i style={{ color: "red " }} class="fa-solid fa-envelope"></i>
        </div>
      </div>
      {/* <hr className={styled.hr} /> */}

      <div className={styled.bothdiv}>
        <div className={styled.leftdiv}>
          <span>Category</span>
          <hr style={{ borderBottom: "1px solid gray" }} />
          <h3 style={{ marginLeft: "10px" }}>Fruits and Vegetables</h3>
          <hr style={{ borderBottom: "1px solid" }} />
          <div style={{ marginLeft: "15px" }}>
            <a href="">Beans Brinjals & okra</a>
            <br />
            <a href="">Cabbage and Cauliflower</a>
            <br />
            <a href="">Leafy Vegetables</a>
            <br />
            <a href="">Root Vegetables</a>
            <br />
            <a href="">Beans Brinjals & okra</a>
            <br />
            <a href="">Cabbage and Cauliflower</a>
            <br />
            <a href="">Cabbage and Cauliflower</a>
            <br />
            <a href="">Leafy Vegetables</a>
          </div>
          <h3>Brands</h3>
          <hr style={{ borderBottom: "1px solid" }} />
          <div style={{ marginLeft: "15px" }}>
            <a href="">FRESHO</a>
            <br />
            <a href="">Fresho Potato onion & tomato</a>
          </div>
        </div>
        <div className={styled.v1}></div>
        <div className={styled.rightdiv}>
          {/* <--------------leftpart */}
          <div className={styled.imgdiv}>
            <img
              style={{
                width: "400px",
                height: "300px",
                marginTop: "25px",
                // marginLeft: "25px"
              }}
              src={productDetail.Image_url}
              alt=""
            />
            <div className={styled.vegetarian_logo}>
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSS3nD04ySN7l5VLvdulJS9dai4oigic3vLn9xK69kGNF4SSchdTnuBdpiJprl7WJEr37M&usqp=CAU"
                alt=""
              />
            </div>
            <div className={styled.grodiv}>
              {/* <Radio colorScheme='green' value='2'></Radio> */}
            </div>
          </div>
          {/* <--------------leftpart end -----------*/}
          <div className={styled.fresho}>
            <a
              style={{
                marginTop: "10px",
                fontSize: "20px",
                fontFamily: "sans-serif",
              }}
              className={styled.atag}
              href=""
            >
              Fresho
            </a>
            <hr style={{ borderBottom: "1px solid gray" }} />
            <h1
              style={{
                marginTop: "10px",
                fontSize: "20px",
                fontFamily: "sans-serif",
              }}
            >
              {productDetail.Brand}
            </h1>
            <p
              style={{
                marginTop: "10px",
                fontSize: "20px",
                fontFamily: "sans-serif",
              }}
            >
              MRP:Rs {productDetail.Price * count}
            </p>
            <h3
              style={{
                marginTop: "10px",
                fontSize: "20px",
                fontFamily: "sans-serif",
              }}
            >
              Price:Rs {productDetail.Price * count}(Rs.7.8/100g)
            </h3>
            <p
              style={{
                marginTop: "10px",
                fontSize: "20px",
                fontFamily: "sans-serif",
              }}
              className={styled.ptag}
            >
              You Save:20%
            </p>
            <p
              style={{
                marginTop: "10px",
                fontSize: "20px",
                fontFamily: "sans-serif",
              }}
            >
              (Inclusive of all taxes)
            </p>
            {count === 1 && (
              <Text
                style={{ border: "1px solid black" }}
                className={styled.count}
              >
                1
              </Text>
            )}
            {count === 1 ? (
              <>
                <Button
                  onClick={handleclick}
                  className={styled.btn}
                  colorScheme="green"
                >
                  ADD TO BASKET
                </Button>
                <Popover>
                  <PopoverTrigger>
                    <Button className={styled.btn1}>SAVE</Button>
                  </PopoverTrigger>
                  <PopoverContent>
                    <PopoverArrow />
                    <PopoverCloseButton />
                    <PopoverHeader>Save to a list!</PopoverHeader>
                    <Button style={{ background: "#666666", color: "white" }}>
                      +CREATE LIST
                    </Button>
                  </PopoverContent>
                </Popover>
                <h4 style={{ color: "darkgray" }}>
                  <i
                    style={{ fontSize: "25px", color: "darkgray" }}
                    class="fa-solid fa-truck"
                  ></i>{" "}
                  Standard: Today 9:00AM - 11:00AM
                </h4>
              </>
            ) : (
              <>
                <Box className="AddtoCart">
                  <Button
                    style={{ fontSize: "30px", fontFamily: "sans-serif" }}
                    onClick={() => setcount(count - 1)}
                  >
                    -
                  </Button>
                  <Text
                    style={{ marginTop: "-1px", border: "1px solid black" }}
                    className={styled.count}
                  >
                    {count}
                  </Text>
                  <Button
                    style={{ fontSize: "30px", fontFamily: "sans-serif" }}
                    onClick={() => setcount(count + 1)}
                  >
                    +
                  </Button>
                </Box>
                <h4 style={{ color: "darkgray" }}>
                  <i
                    style={{
                      fontSize: "25px",
                      marginTop: "18px",
                      color: "darkgray",
                    }}
                    class="fa-solid fa-truck"
                  ></i>{" "}
                  Standard: Today 9:00AM - 11:00AM
                </h4>
              </>
            )}
          </div>
        </div>
      </div>
      <div className={styled.secondcontainer}>
        <h4 style={{ fontSize: "30px" }}>About The Product</h4>
        <hr />
        <ul>
          <li style={{ fontSize: "15px" }}>{productDetail.Description}</li>
          <hr />
          <li style={{ fontSize: "15px" }}>{productDetail.Title}</li>
          <hr />
        </ul>
        <h4 style={{ fontSize: "15px" }}>Other Product Info</h4>
        <hr />
        <ul>
          <li style={{ fontSize: "15px" }}>EAN Code: 10000150</li>
          <hr />
          <li style={{ fontSize: "15px" }}>Country of origin: India</li>
        </ul>
        <hr />
      </div>
      <h1 style={{ fontSize: "25px",textAlign:"left" }}>Rating and Reviews</h1>
      <div className={styled.ratingdiv}>
        {/* <p className={styled.comment}></p> */}
      </div>
      {/* <ProductSlider ProductsData={ProductsData} /> */}
    </div>
    // }
  );
};
