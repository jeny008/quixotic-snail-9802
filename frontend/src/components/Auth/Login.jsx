import React, { useEffect } from 'react'
import "./Auth.css"
import { Box, Button, FormControl, Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginByMobile } from '../../redux/actions/action'
import {useNavigate} from "react-router-dom"
import { useAlert } from 'react-alert'

const Login = () => {
  const Auth=useSelector((state)=>state.Products.Auth)
  const alert = useAlert();
  console.log(Auth,"ch");
  const [Number,setNumber]=useState({})
  const [message,setMessage]=useState(false)
  const [otp,setOtp]=useState(false)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const HandleSignUp=(e)=>{
    setMessage(false)
    let value=e.target.value
    setNumber({mobile:value})
  }
  const handleSubmit=()=>{
    if(Number.mobile.length===10){
      dispatch(LoginByMobile(Number))
    }
    else{
      setMessage(true)
      alert.error("Invalid Mobile Number")
    }
  }
  useEffect(()=>{
    if(Auth.message === "user does not exist" && Auth.status==="failed"){
      alert.show("Pls Register First")
      navigate("/signup")
    }
    else if(Auth.message==="otp sent" && Auth.status==="success"){
      setOtp(true)
      alert.success("OTP Sent Successfully")
      setTimeout(()=>{
        navigate("/otp")
      },5000)
    }
  },[Auth.message,Auth.status,navigate,alert])
  return (
    <Box>
        <FormControl action="" style={{width:"25%","margin":"auto",paddingBottom:"5%", backgroundColor:"white", paddingTop:"2%", marginBottom:"5%",boxShadow:"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px", marginTop:"3%" }}>
            <Text style={{"fontSize":20, "fontWeight":"bold", "color":"#a2d05a",paddingBottom:"10%", paddingTop:"5%"}}>LOGIN/SIGN UP</Text>
            <InputGroup style={{"width":"70%", margin:"auto"}}>
                <InputLeftAddon children='+91' />
                <Input type='tel' placeholder='Enter Your Mobile Number (10 digit)' className='input' onChange={HandleSignUp}/>
            </InputGroup>
            <br />
            {
              message?(<Text style={{color:"red", }}> - Invalid Mobile Number</Text>):("")
            }
            {
              otp?(<Text style={{color:"green",width:"70%",margin:"auto"}}>Please Note Your OTP For Future Reference --&gt;<Box style={{fontWeight:"bold"}}>{Auth.data}</Box></Text>):("")
            }
            <Button colorScheme='teal' variant='outline' style={{"width":"70%", margin:"auto",marginTop:"13%"}}>Login Using Email Address</Button>
            <br />
            <Button className='Signup' style={{"width":"70%", margin:"auto",marginTop:"5%",backgroundColor:"rgb(162,208,90)"}} onClick={handleSubmit}>Continue</Button>
            <Text style={{"width":"70%", margin:"auto",color:"gray", fontSize:"80%", }}>By continuing, I accept TCP-bigbasket’s <span style={{color:"blue"}}>Terms and Conditions</span> and <span style={{color:"blue"}}>Privacy Policy.</span></Text>
        </FormControl>
    </Box>
  )
}

export default Login