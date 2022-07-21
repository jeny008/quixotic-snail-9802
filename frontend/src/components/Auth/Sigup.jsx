import { Box, Button, FormControl, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { NewUserRegistration } from '../../redux/actions/action'

const UserDetails = () => {
  const Auth=useSelector((state)=>state.Products.Auth)
  const [userData,setUserData]=useState({})
  const [valid,Invalid]=useState(true)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleUserData=(e)=>{
    // console.log(e.target.name);
    const{name,value}=e.target
    setUserData({
      ...userData,
      [name]:value
    })
    Invalid(true)
  }
  const handleRegister=()=>{
    if(userData.mobile.length===10){
      dispatch(NewUserRegistration(userData))
    }
    else{
      Invalid(false)
    }
  }
  if(Auth.message==="user created" && Auth.status==="success"){
    navigate("/")
  }
  console.log();
  return (
    <Box>
        <FormControl action="" style={{width:"25%","margin":"auto",paddingBottom:"2%", "boxShadow":" 0 0 36px 0 rgb(141 135 135 / 58%)", }}>
            <Text style={{"fontSize":20, "fontWeight":"bold", "color":"#a2d05a",paddingBottom:"10%", paddingTop:"5%"}}>Almost there</Text>
            <Text>Help us to know you better?</Text>
            <Box style={{"display":"flex",gap:10, width:"90%",margin:"auto"}}>
                <Input placeholder='First Name' name="first_name" onChange={handleUserData} />
                <Input placeholder='Last Name' onChange={handleUserData} name="last_name"/>
            </Box>
            <br />
            <Input placeholder='Mobile' style={{ width:"90%",margin:"auto"}} type="number" onChange={handleUserData} name="mobile" />
            {
              !valid?(<Text style={{color:"red"}}>Enter Correct Mobile Number</Text>):("")
            }
            <Button className='Signup' style={{"width":"80%", margin:"auto",marginTop:"35%",backgroundColor:"rgb(162,208,90)",borderRadius:"10px", color:"white",fontWeight:"bold", height:"35px"}} onClick={handleRegister}>Start Shopping</Button>
        </FormControl>
    </Box>
  )
}
export default UserDetails