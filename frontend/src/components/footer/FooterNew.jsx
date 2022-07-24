import React from "react";
import { Box, SimpleGrid,Link,Container,Stack,Text,Flex, Image, Grid } from "@chakra-ui/react";
import {
  TiSocialFacebook,
  TiSocialPinterest,
  TiSocialTwitter,

} from "react-icons/ti";
import {
  BsInstagram,
} from "react-icons/bs";
import footer from "./paymentopt.jpeg"


export const FooterNew = () => {

  const iswidth = ["60%", "75%", "86%",]
  const FontRes = ["10px","13px","16px"]

  return (
    <Box w={iswidth} margin="2% auto">
      <Flex
        columns={{ base: 1, sm: 2, md: 4 }}
        spacing={0}
        width={"100%"}
        fontSize={"14px"}
        fontWeight={"350"}
        mt={"3rem"}
        padding={"1rem"}
      >
        <Stack align={"flex-start"} w={"25%"}>
          <Text color={"#84c225"} size={FontRes}>
            bigbasket
          </Text >
          <Link href={"#"} size={FontRes} >About Us</Link>
          <Link href={"#"} size={FontRes}>In News</Link>
          <Link href={"#"} size={FontRes}>Green bigbasket</Link>
          <Link href={"#"} size={FontRes}>Privacy Policy</Link>
          <Link href={"#"} size={FontRes}>Affiliate</Link>
          <Link href={"#"} size={FontRes}>Terms and Conditions</Link>
          <Link href={"#"} size={FontRes}>Careers At bigbasket</Link>
          <Link href={"#"} size={FontRes}>bb Instant</Link>
          <Link href={"#"} size={FontRes}>bb Daily</Link>
          <Link href={"#"} size={FontRes}>bb Blog</Link>
          <Link href={"#"} size={FontRes}>bbnow</Link>
        </Stack>
        <Stack align={"flex-start"} w={"25%"}>
          <Text color={"#84c225"} size={FontRes}>
            Help
          </Text>
          <Link href={"#"} size={FontRes}>FAQ's</Link>
          <Link href={"#"} size={FontRes}>Contact Us</Link>
          <Link href={"#"} size={FontRes}>bb Wallet FAQ's</Link>
          <Link href={"#"} size={FontRes} >bb wallet T&Cs</Link>
          <Link href={"#"} size={FontRes}>Vendor Connect</Link>
        </Stack>
        <Stack align={"flex-start"} w={"25%"}>
          <Text color={"#84c225"} size={FontRes}>
            Download Our App
          </Text>
          <Box w={iswidth}>
            <Image
            
              src="https://www.bbassets.com/static/v2557/custPage/build/content/img/Google-App-store-icon.png"
              alt=""
            />
          </Box > 
          <Box w={iswidth}>
            <Image
              src="	https://www.bbassets.com/static/v2557/custPage/build/content/img/Apple-App-store-icon.png"
              alt=""
            />
          </Box>
        </Stack>

        <Stack align={"flex-start"} w={"25%"}>
          <Text color={"#84c225"} size={FontRes}>
            Get Social With Us
          </Text>
          <Grid gap={"5px"}>
            <Box
              w={iswidth}
              bg={"#3b5998"}
              boxSize={["15px","25px","40px"]}
              borderRadius={"50%"}
              mr={"1rem"}
            >
              <TiSocialFacebook color="white"  size={  ["15px","25px","40px"] }/>
            </Box>
            <Box bg={"red"} boxSize={["15px","25px","40px"]} borderRadius={"50%"} mr={"1rem"}>
              <TiSocialPinterest color="white" size={  ["15px","25px","40px"] } />
            </Box>
            <Box bg={"blue"} boxSize={["15px","25px","40px"]} borderRadius={"50%"} mr={"1rem"}>
              <TiSocialTwitter color="white" size={  ["15px","25px","40px"] } />
            </Box>
            <Box bg={"blue"} boxSize={["15px","25px","40px"]} borderRadius={"50%"} mr={"1rem"}>
              <BsInstagram color="white" size={  ["15px","25px","40px"] } />
            </Box>
          </Grid>
        </Stack>
      </Flex>
      <Flex alignItems={"center"}>
        <Text color={"#84c225"} size={FontRes} mr={"1rem"}>
          Payment Otions
        </Text>
        <Box w={iswidth}>
          <Image w={["30%","65%","80%"]} src={footer} alt="" />
        </Box>
      </Flex>
    </Box>
  );
};