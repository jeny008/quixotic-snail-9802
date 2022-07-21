import React from 'react'
import "./Auth.css"
import { Box, Button, FormControl, Input, InputGroup, InputLeftAddon, Text } from '@chakra-ui/react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { LoginByMobile } from '../../redux/actions/action'
import {useNavigate} from "react-router-dom"

const Login = () => {
  const Auth=useSelector((state)=>state.Products.Auth)
  console.log(Auth,"ch");
  const [Number,setNumber]=useState({})
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const HandleSignUp=(e)=>{
    let value=e.target.value
    setNumber({mobile:value})
  }
  const handleSubmit=()=>{
    dispatch(LoginByMobile(Number))
  }
  if(Auth.message === "user does not exist" && Auth.status==="failed"){
    console.log("hiraa");
    navigate("/signup")
  }
  return (
    <Box>
        <FormControl action="" style={{width:"25%","margin":"auto",paddingBottom:"2%", "boxShadow":" 0 0 36px 0 rgb(141 135 135 / 58%)", }}>
            <Text style={{"fontSize":20, "fontWeight":"bold", "color":"#a2d05a",paddingBottom:"10%", paddingTop:"5%"}}>LOGIN/SIGN UP</Text>
            <InputGroup style={{"width":"70%", margin:"auto"}}>
                <InputLeftAddon children='+91' />
                <Input type='tel' placeholder='Enter Your Mobile Number (10 digit)' className='input' onChange={HandleSignUp}/>
            </InputGroup>
            <Button colorScheme='teal' variant='outline' style={{"width":"70%", margin:"auto",marginTop:"13%"}}>Login Using Email Address</Button>
            <br />
            <Button className='Signup' style={{"width":"70%", margin:"auto",marginTop:"5%",backgroundColor:"rgb(162,208,90)"}} onClick={handleSubmit}>Continue</Button>
            <Text style={{"width":"70%", margin:"auto",color:"gray", fontSize:"80%", }}>By continuing, I accept TCP-bigbasket’s <span style={{color:"blue"}}>Terms and Conditions</span> and <span style={{color:"blue"}}>Privacy Policy.</span></Text>
        </FormControl>
    </Box>
  )
}

export default Login