import { Button, HStack, PinInput, PinInputField } from '@chakra-ui/react'
import React from 'react'

const Otp = () => {
  return (
    <div>
        <form action="" style={{width:"25%","margin":"auto",paddingBottom:"2%", "boxShadow":" 0 0 36px 0 rgb(141 135 135 / 58%)", }}>
            <div>
            <p style={{"fontSize":20, "fontWeight":"bold", "color":"#a2d05a",paddingBottom:"10%", paddingTop:"5%"}}>Verify Mobile Number</p>
            </div>
            <p style={{"width":"70%", margin:"auto",color:"#beb5b5", fontSize:"90%",paddingBottom:"2%" }}>Please check the OTP sent to your mobile number</p>
            <p style={{fontSize:"90%","fontWeight":"bold", color:"#999", paddingBottom:"2%"}}>9381374502</p>
            <p style={{color:"#999", paddingBottom:"2%"}}>Enter OTP</p>
            <HStack style={{width:"50%",margin:"auto",paddingBottom:"5%"}}>
                <PinInput>
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                </PinInput>
            </HStack>

            <Button colorScheme='teal' size='xl' variant='outline' style={{width:"25%",margin:"auto",marginBottom:"20%"}}>Resend</Button>
            <br />
            <Button className='Signup' style={{"width":"70%", margin:"auto",marginTop:"5%",backgroundColor:"rgb(162,208,90)"}}>Verify & Continue</Button>
        </form>
    </div>
  )
}

export default Otp