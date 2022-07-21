import axios from "axios"
export const GET_PRODUCTS_DATA="GET_PRODUCTS_DATA"
export const REGISTRATION_SIGNIN ="REGISTRATION"
export const INCREMENT_QTY="INCREMENT_QTY"
export const DECREMENT_QTY="DECREMENT_QTY"


// get Data req from Backend..
const getProducts=(data)=>({
    type:GET_PRODUCTS_DATA,
    payload:data
})

// const Register=(details)=>({
//     type:REGISTRATION_SIGNIN,
//     payload:details
// })

const Increment=(data)=>({
    type:INCREMENT_QTY,
    payload:data
})

const Decrement=(data)=>({
    type:DECREMENT_QTY,
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

// registration or login

// export const SignUp_Registration=(payload)=>(dispatch)=>{
//     axios({
//         url:'http://localhost:8080/BigBasket/Signin',
//         method:"POST",
//         payload
//     })
//     .then((res)=>{
//         console.log(res.data.data);
//         dispatch(getProducts(res.data.data))
//     }).catch((err)=>{
//         console.log(err);
//     })
// }


export const Increment_Products_Qty=(_id)=>(dispatch)=>{
    axios({
        url:`http://localhost:8080/products/${_id}/qty`,
        method:"GET",
    }).then((res)=>{
        dispatch(Increment(res.data))
    })
    .then(()=>{
        dispatch(getProducts())
    })
    .catch((err)=>{
        console.log(err)
    })
}
export const Decrement_Products_Qty=(_id)=>(dispatch)=>{
    axios({
        url:`http://localhost:8080/products/${_id}/qty`,
        method:"GET",
    }).then((res)=>{
        dispatch(Decrement(res.data))
    })
    .then(()=>{
        dispatch(getProducts())
    })
    .catch((err)=>{
        console.log(err)
    })
}