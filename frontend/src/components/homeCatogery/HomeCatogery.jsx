import React from "react";
import styles from "./HomeCatogery.module.css";

export const HomeCatogery = ({images}) => {
  return (
    <div className={styles.mainOuter}>
      <div><img src={images[0]} alt="" /></div>
      <div id={styles.gridDiv}>
        <div><img src={images[1]} alt="" /></div>
        <div><img src={images[2]} alt="" /></div>
        <div><img src={images[3]} alt="" /></div>
        <div><img src={images[4]} alt="" /></div>
      </div>
    </div>
  );
};
