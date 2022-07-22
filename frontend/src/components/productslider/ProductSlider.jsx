// import React from 'react'

// export const ProductSlider = ({size}) => {
//   return (
//     <div style={{height:"350px", border:"solid",display:"flex", alignItems:"center"}} >
//         {new Array(size).fill(0).map((elem,index)=> <div key={index} style={{border: "solid", height:"300px", width:"600px",margin:"5px"}}>{index}</div> )}
//     </div>
    
//   )
// }



import React, { Component } from "react";
import Slider from "react-slick";

export class MultipleItems1 extends Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 2000,
      slidesToShow: 5,
      slidesToScroll: 5
    };

    let arr = new Array(15).fill(0);
    return (
      <div>
        <Slider {...settings}>
          {arr.map((elem,index)=><div  key={index}>
            {/* <h3>{index}</h3> */}
            <img src="https://www.bigbasket.com/media/customPage/77880b23-0233-4fad-b54a-a93c998e0d20/86fb097c-05bf-4d6d-abab-5afc563b9c0e/88138063-d5d8-466b-84d9-60297de90f85/t1_hp_fnv_fresh-fruits_fnvStorefront_m_250622_275x184_02.jpg" alt="" />
          </div> )}
        </Slider>
      </div>
    );
  }
}

export  class MultipleItems extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 5
    };

    let arr = new Array(15).fill(0);
    return (
      <div>
        <h2> Multiple items </h2>
        <Slider {...settings}>
          {arr.map((elem,index)=><div key={index}>
            <h3>{index}</h3>
          </div> )}
        </Slider>
      </div>
    );
  }
}
