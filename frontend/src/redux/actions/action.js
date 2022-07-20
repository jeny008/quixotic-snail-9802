import axios from "axios"
export const GET_PRODUCTS_DATA="GET_PRODUCTS_DATA"


// get Data req from Backend..
const getProducts=(data)=>({
    type:GET_PRODUCTS_DATA,
    payload:data
})



//get the products data
export const GetProductsData=(payload)=>(dispatch)=>{
    axios({
        url:'http://localhost:8080/BigBasket/product',
        method:"GET",
        params:{...payload}
    })
    .then((res)=>{
        console.log(res.data.data);
        dispatch(getProducts(res.data.data))
    }).catch((err)=>{
        console.log(err);
    })
}