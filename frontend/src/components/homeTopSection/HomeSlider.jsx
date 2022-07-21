import React, { useEffect, useState } from "react";
import styles from "./Slider.module.css";
import { Slidertop } from "../../pages/Home/ImageData";

export const HomeSlider = ({image}) => {
  const [pic, setpic] = useState(0);
  
  useEffect(() => {
    setInterval(() => {
      setpic((prev) => (prev === Slidertop.length-1 ? (prev = 0) : prev + 1));
    }, 3000);
  }, []);
  
  return (
    <div className={styles.slider}>
      <img src={image[pic]} alt="" />
    </div>
  );
};
