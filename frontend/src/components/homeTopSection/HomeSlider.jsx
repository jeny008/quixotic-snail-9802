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
    
//     <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
//   <ol class="carousel-indicators">
//     <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
//   </ol>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img className="d-block w-100" src={image[0]} alt="First slide"/>
//     </div>
//     <div class="carousel-item">
//       <img className="d-block w-100" src={image[1]} alt="Second slide"/>
//     </div>
//     <div class="carousel-item">
//       <img className="d-block w-100" src={image[2]} alt="Third slide"/>
//     </div>
//     <div class="carousel-item">
//       <img className="d-block w-100" src={image[3]} alt="Third slide"/>
//     </div>
//     <div class="carousel-item">
//       <img className="d-block w-100" src={image[4]} alt="Third slide"/>
//     </div>
//     <div class="carousel-item">
//       <img className="d-block w-100" src={image[5]} alt="Third slide"/>
//     </div>
//   </div>
//   <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>
// </div>

  );
};
