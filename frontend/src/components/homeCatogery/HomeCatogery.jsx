import React from "react";
import styles from "./HomeCatogery.module.css";
import {useNavigate} from 'react-router-dom'

export const HomeCatogery = ({images}) => {
  const navigation = useNavigate()
  return (
    <div className={styles.mainOuter}>
      <div onClick={()=>navigation("/products")}><img src={images[0]} alt="" /></div>
      <div id={styles.gridDiv}>
        <div onClick={()=>navigation("/products")} ><img src={images[1]} alt="" /></div>
        <div onClick={()=>navigation("/products")}><img src={images[2]} alt="" /></div>
        <div onClick={()=>navigation("/products")}><img src={images[3]} alt="" /></div>
        <div onClick={()=>navigation("/products")}><img src={images[4]} alt="" /></div>
      </div>
    </div>
  );
};
