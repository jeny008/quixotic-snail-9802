import { Box, Button, FormControl, Image, Input, Text } from '@chakra-ui/react'
import React from 'react'
import { useState } from 'react'
import { useAlert } from 'react-alert'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { NewUserRegistration } from '../../redux/actions/action'

const UserDetails = () => {
  const Auth=useSelector((state)=>state.Products.Auth)
  const [userData,setUserData]=useState({})
  const alert = useAlert();
  const [valid,Invalid]=useState(true)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleUserData=(e)=>{
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
      alert.success("Registration Success")
    }
    else{
      alert.error("Please Enter The Proper Details")
      Invalid(false)
    }
  }
  if(Auth.message==="user created" && Auth.status==="success"){
    navigate("/")
  }
  return (
    <Box>
        <FormControl action="" style={{"margin":"auto",paddingBottom:"5%", backgroundColor:"white", paddingTop:"2%", marginBottom:"5%",boxShadow:"rgba(0, 0, 0, 0.05) 0px 6px 24px 0px, rgba(0, 0, 0, 0.08) 0px 0px 0px 1px", marginTop:"3%" }} w={["100%","50%","50%","25%","24.5%"]}>
            <Text style={{"fontSize":20, "fontWeight":"bold", "color":"#a2d05a",paddingBottom:"10%",}}>Almost there</Text>
            <Text pb={2}>Help us to know you better?</Text>
            <Box style={{"display":"flex",gap:10, width:"90%",margin:"auto"}}>
                <Input placeholder='First Name' name="first_name" onChange={handleUserData} required/>
                <Input placeholder='Last Name' onChange={handleUserData} name="last_name" required />
            </Box>
            <br />
            <Input placeholder='Mobile' style={{ width:"90%",margin:"auto"}} type="number" onChange={handleUserData} name="mobile" required/>
            {
              !valid?(<Text style={{color:"red"}}>Enter Correct Mobile Number</Text>):("")
            }
            <Button className='Signup' style={{"width":"80%", margin:"auto",marginTop:"35%",backgroundColor:"rgb(162,208,90)",borderRadius:"10px", color:"white",fontWeight:"bold", height:"35px"}} onClick={handleRegister}>Start Shopping</Button>
        </FormControl>
    </Box>
  )
}
export default UserDetails