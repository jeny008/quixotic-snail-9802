import { Button, Flex, FormControl, Box, Text } from '@chakra-ui/react'
import React from 'react'
import { OTPInput } from "chakra-otp-input";
import { useState } from 'react';
import Timer from 'otp-timer';
import { useDispatch, useSelector } from 'react-redux';
import { OtpVerification } from '../../redux/actions/action';

const Otp = () => {
  const [otp,setOtp]=useState({})
  const Auth=useSelector((state)=>state.Products.Auth)
  console.log(Auth,"hi");
  const dispatch=useDispatch()
  const handleVerify=()=>{
    dispatch(OtpVerification(otp))
  }
  const handleClick=()=>{
    //desired function to be performed on clicking resend button
  }
  return (
    <Box>
        <FormControl style={{width:"25%","margin":"auto",paddingTop:"1%", marginBottom:"5%",boxShadow:"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px", marginTop:"1%", paddingBottom:"3%" }} >
            <Box>
            <Text style={{"fontSize":20, "fontWeight":"bold", "color":"#a2d05a",paddingBottom:"10%", paddingTop:"5%"}}>Verify Mobile Number</Text>
            </Box>
            <Text style={{"width":"70%", margin:"auto",color:"#beb5b5", fontSize:"90%",paddingBottom:"2%" }}>Please check the OTP sent to your mobile number</Text>
            <Text style={{fontSize:"90%","fontWeight":"bold", color:"#999", paddingBottom:"2%"}}>9381374502</Text>
            <Text style={{color:"#999"}}>Enter OTP</Text>
            <Flex pt="28" justify="center" align="center" w="full">
              <FormControl w="60">
                <OTPInput noInputs={4} onChange={(value) => setOtp({otp:value})} />
              </FormControl>
            </Flex>
            <br />
            <Timer seconds= {60} minutes={0} resend={handleClick}/>
            <br/>
            
            <br />
            <Button className='Signup'  style={{"width":"70%", margin:"auto",marginTop:"5%",backgroundColor:"rgb(162,208,90)"}} onClick={handleVerify}>Verify & Continue</Button>
        </FormControl>
    </Box>
  )
}

export default Otp