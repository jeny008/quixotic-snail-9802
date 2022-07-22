import React, { useState } from "react";
import { getOne, GetProductsData } from "../../redux/actions/action";
// import {
//   List,
//   ListItem,
//   ListIcon,
//   OrderedList,
//   UnorderedList,
// } from '@chakra-ui/react'
// {
/* <UnorderedList>
  <ListItem>Lorem ipsum dolor sit amet</ListItem>
  <ListItem>Consectetur adipiscing elit</ListItem>
  <ListItem>Integer molestie lorem at massa</ListItem>
  <ListItem>Facilisis in pretium nisl aliquet</ListItem>
</UnorderedList> */
// }
// import Button from '@mui/material/Button';
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
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const { id } = useParams();
  console.log(id);
  
  const [count, setcount] = useState(1);
  const [productDetail, setproductDetail] = useState({});
  const dispatch = useDispatch();
  useEffect(() => {
    axios.get("http://localhost:8080/BigBasket/product")
    .then(({data})=>{
      console.log(data.data)
    let prodDet = data.data.filter((elem)=>elem._id==id)[0];
    setproductDetail(prodDet)


    }).catch(err=>console(err))
    

    // let prod = Productsdetailsdata.filter((elem) => elem._id === id);
    // setproductDetail(prod[0]);
    // console.log(productDetail);
  }, [dispatch]);

  const handlechange = () => {
    console.log("hello");
    setcount(count + 1);
  };
  return (
    // {isloading ? <h1>Loading...</h1> : 
    <div className={styled.cantainer}>
      <div className={styled.flexdiv}>
        <div className={styled.cantainerdiv}>
          <p style={{fontSize:"12px"}}>
            HOME&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FRUITS &
            VEGETABLES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FRESH
            VEGETABLES&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;POTATO, ONION &
            TOMATO&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;FRESHO ONION
          </p>
        </div>

        <div className={styled.icon}>
          <p
            style={{
              color: "color: #999",
              marginTop: "5px",
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
      <hr className={styled.hr} />
      <div className={styled.bothdiv}>
        <div className={styled.leftdiv}>
          <span>Category</span>
          <hr style={{ borderBottom: "1px solid gray" }} />
          <h3>Fruits and Vegetables</h3>
          <a href="">Beans Brinjals & okra</a>
          <a href="">Cabbage and Cauliflower</a>
          <a href="">Leafy Vegetables</a>
          <a href="">Root Vegetables</a>
          <a href="">Beans Brinjals & okra</a>
          <a href="">Cabbage and Cauliflower</a>
          <a href="">Cabbage and Cauliflower</a>
          <a href="">Leafy Vegetables</a>
          <h3>Brands</h3>
          <a href="">FRESHO</a>
          <a href="">Fresho Potato onion & tomato</a>
        </div>
        <div className={styled.v1}></div>
        <div className={styled.rightdiv}>
          {/* <--------------leftpart */}
          <div className={styled.imgdiv}>
            <img
              style={{ width: "350px", height: "350px" }}
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
              MRP:Rs {productDetail.Price*count}
            </p>
            <h3
              style={{
                marginTop: "10px",
                fontSize: "20px",
                fontFamily: "sans-serif",
              }}
            >
              Price:Rs {productDetail.Price*count}(Rs.7.8/100g)
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
            {count === 1 && <Text className={styled.count}>1</Text>}

            {count === 1 ? (
              <Button
                onClick={handlechange}
                className={styled.btn}
                colorScheme="green"
              >
                ADD TO BASKET
              </Button>
            ) : (
              <Box className="AddtoCart">
                <Button onClick={() => setcount(count - 1)}>-</Button>
                <Text className={styled.count}>{count}</Text>
                <Button onClick={() => setcount(count + 1)}>+</Button>
              </Box>
            )}
            {/* <Popover>
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
            </Popover> */}
            {/* <div>
              <p style={{marginTop: "10px" }}>
              <i style={{width:"30px",fontSize:"20px"}} class="fa-solid fa-truck"></i>{" "}
                Standard: Today 9:00AM - 11:00AM
              </p>
              <p>Pack Sizes</p>
              <div>
                <div
                  style={{
                    marginTop: "10px",
                    alignItems: "center",
                    height: "40px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                    border: "1px solid red",
                  }}
                >
                  <p style={{ fontSize: "20px" }}>weight</p>
                  <p style={{ fontSize: "20px" }}>price</p>
                  <p
                    style={{
                      background: "#84C244",
                      width: "8%",
                      height: "100%",
                      textAlign: "center",
                    }}
                  >
                    <i
                      style={{
                        marginLeft: "5px",
                        marginTop: "10px",
                        fontSize: "25px",
                      }}
                      class="fa-solid fa-check"
                    ></i>
                  </p>
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    alignItems: "center",
                    height: "40px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                    border: "1px solid red",
                  }}
                >
                  <p style={{ fontSize: "20px" }}>weight</p>
                  <p style={{ fontSize: "20px" }}>price</p>
                  <p
                    style={{
                      background: "#84C244",
                      width: "8%",
                      height: "100%",
                      textAlign: "center",
                    }}
                  >
                    <i
                      style={{
                        marginLeft: "5px",
                        marginTop: "10px",
                        fontSize: "25px",
                      }}
                      class="fa-solid fa-check"
                    ></i>
                  </p>
                </div>
                <div
                  style={{
                    marginTop: "10px",
                    alignItems: "center",
                    height: "40px",
                    display: "flex",
                    justifyContent: "space-between",
                    width: "80%",
                    border: "1px solid red",
                  }}
                >
                  <p style={{ fontSize: "20px" }}>weight</p>
                  <p style={{ fontSize: "20px" }}>price</p>
                  <p
                    style={{
                      background: "#84C244",
                      width: "8%",
                      height: "100%",
                      textAlign: "center",
                    }}
                  >
                    <i
                      style={{
                        marginLeft: "5px",
                        marginTop: "10px",
                        fontSize: "25px",
                      }}
                      class="fa-solid fa-check"
                    ></i>
                  </p>
                </div>
              </div>
            </div> */}
          </div>
        </div>
      </div>
      <div className={styled.secondcontainer}>
        <h4 style={{ fontSize: "30px" }}>About The Product</h4>
        <hr />
        <ul>
          <li style={{ fontSize: "20px" }}>{productDetail.Description}</li>
          <hr />
          <li style={{ fontSize: "20px" }}>{productDetail.Title}</li>
          <hr />
        </ul>
        <h4 style={{ fontSize: "20px" }}>Other Product Info</h4>
        <hr />
        <ul>
          <li style={{ fontSize: "20px" }}>EAN Code: 10000150</li>
          <hr />
          <li style={{ fontSize: "20px" }}>Country of origin: India</li>
        </ul>
        <hr />
      </div>
    </div>
// }
  );
};
