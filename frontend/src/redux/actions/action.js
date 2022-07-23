import axios from "axios"
export const GET_PRODUCTS_DATA="GET_PRODUCTS_DATA"
export const LOGIN ="LOGIN"
export const REGISTRATION="REGISTRATION"
export const OTPAUTH='OTPAUTH'
export const INCREMENT_QTY="INCREMENT_QTY"
export const DECREMENT_QTY="DECREMENT_QTY"


// get Data req from Backend..
const getProducts=(data)=>({
    type:GET_PRODUCTS_DATA,
    payload:data
})

const Login=(details)=>({
    type:LOGIN,
    payload:details
})

const Register=(details)=>({
    type:REGISTRATION,
    payload:details
})

const OtpAuth=(details)=>({
    type:OTPAUTH,
    payload:details
})

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
        params:{...payload},
        withCredentials:true
    })
    .then((res)=>{
        console.log(res.data.data);
        dispatch(getProducts(res.data.data))
    }).catch((err)=>{
        console.log(err);
    })
}

//  login

export const LoginByMobile=(payload)=>(dispatch)=>{
    console.log(payload);
    axios.post('http://localhost:8080/BigBasket/login',payload,{withCredentials:true})
    .then((res)=>{
        console.log(res.data);
        dispatch(Login(res.data))
    }).catch((err)=>{
        console.log(err);
    })
}

// Register
export const NewUserRegistration=(payload)=>(dispatch)=>{
    console.log(payload);
    axios.post('http://localhost:8080/BigBasket/signup',payload,{withCredentials:true})
    .then((res)=>{
        console.log(res.data);
        dispatch(Register(res.data))
    }).catch((err)=>{
        console.log(err);
    })
}

export const OtpVerification=(payload)=>(dispatch)=>{
    console.log(payload);
    axios.post('http://localhost:8080/BigBasket/login/otp',payload,{withCredentials:true})
    .then((res)=>{
        console.log(res.data);
        dispatch(OtpAuth(res.data))
    }).catch((err)=>{
        console.log(err);
    })
}

export const Increment_Products_Qty=(_id)=>(dispatch)=>{
    axios({
        url:`http://localhost:8080/products/${_id}/qty`,
        method:"GET",
        withCredentials:true
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