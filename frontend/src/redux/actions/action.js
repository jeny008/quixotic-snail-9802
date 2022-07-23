import axios from "axios"
export const GET_PRODUCTS_DATA="GET_PRODUCTS_DATA"
export const LOGIN ="LOGIN"
export const REGISTRATION="REGISTRATION"
export const OTPAUTH='OTPAUTH'
export const INCREMENT_QTY="INCREMENT_QTY"
export const DECREMENT_QTY="DECREMENT_QTY"
export const ADD_PRODUCT="ADD_PRODUCT"
export const LOGOUT="LOGOUT"



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


const Increment=(data)=>({
    type:INCREMENT_QTY,
    payload:data
})

const Decrement=(data)=>({
    type:DECREMENT_QTY,
    payload:data
})
const LogoutUser=(data)=>({
    type:LOGOUT,
    payload:data
})

const AddProductToCart=(data)=>({
    type:ADD_PRODUCT,
    payload:data
})


//get the products data
export const GetProductsData=(payload,alert)=>(dispatch)=>{
    axios({
        url:'http://localhost:8080/BigBasket/product',
        method:"GET",
        params:{...payload},
        withCredentials:true
    })
    .then((res)=>{
        console.log(res.data.data);
        if(payload && res.data.data.length===0){
            alert.show("No Data Found Pls Search For Another Category")
        }
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

export const OtpVerification=(payload,alert,navigate)=>(dispatch)=>{
    console.log(payload);
    axios.post('http://localhost:8080/BigBasket/login/otp',payload,{withCredentials:true})
    .then((res)=>{
        console.log(res.data);
        if("login success"===res.data.message){
            localStorage.setItem("login",true)
            alert.success("Login Success")
            navigate("/")
        }
        if("wrong otp"===res.data.message){
            alert.error("Invalid OTP")
        }
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

export const Add_To_Cart=(_id,navigate,alert)=>(dispatch)=>{
    axios({
        url:`http://localhost:8080/BigBasket/product/${_id}/addtocart`,
        method:"GET",
        withCredentials:true
    }).then((res)=>{
        if("item added to cart"===res.data.message){
            alert.success("Product Added To cart")
        }
        dispatch(AddProductToCart(res.data))
    })
    .catch((err)=>{
        if("unauthorised user"===err.response.data.message){
            alert.error("Please Login First")
           setTimeout(()=>{
            navigate("/login")
           },1000)
        }
    })
}

export const Logout=()=>(dispatch)=>{
    axios({
        url:`http://localhost:8080/BigBasket/logout`,
        method:"POST",
    }).then((res)=>{
        if(res.data.message==="user loggedout successfully"){
            localStorage.removeItem("login")
            window.location.reload()
        }
        dispatch(LogoutUser(res.data))
    })
    .then(()=>{
        dispatch(getProducts())
    })
    .catch((err)=>{
        console.log(err)
    })
}