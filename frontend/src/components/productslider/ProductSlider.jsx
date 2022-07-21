import React from 'react'

export const ProductSlider = ({size}) => {
  return (
    <div style={{height:"350px", border:"solid",display:"flex", alignItems:"center"}} >
        {new Array(size).fill(0).map((elem,index)=> <div key={index} style={{border: "solid", height:"300px", width:"600px",margin:"5px"}}>{index}</div> )}
    </div>
  )
}
