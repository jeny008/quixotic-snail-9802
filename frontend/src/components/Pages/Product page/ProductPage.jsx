import React from 'react'
import "./ProductPage.css"
import Categories from './Categories'
import { Box, Button, Center, Grid, Image, Img, Text } from '@chakra-ui/react'
import { useSelector, useDispatch } from 'react-redux'
import { useEffect } from 'react'
import { GetProductsData } from '../../../redux/actions/action'


const Logo="https://www.bbassets.com/static/v2514/custPage/build/content/img/vegicon.svg"
const ProductPage = () => {
  const ProductsData=useSelector((state)=>state.Products.ProductsData)
  console.log(ProductsData.data);
  const dispatch=useDispatch()
  useEffect(()=>{
    dispatch(GetProductsData())
  },[dispatch])

  return (
    <Box>
      <Box>
        <Img className='TopImg' src="https://www.bigbasket.com/media/uploads/banner_images/YXTT1695_DT_1130x400_22ndjune22.jpg" alt="" />
      </Box>
      <Box className='body-Section' w={["100%","100%","100%","74.5%","74.5"]}>
        <Box className='cat'w={["30%","25%","20%","20%","20%"]} >
          <Text fontSize={{ base: '8px', md: '12px', lg: '18px' }}>Categories</Text>
          <hr />
          <Box>
            <Categories  ml={{ base: '-22%', md: '-22%', lg: '-22%',xl:"-20%", '2xl':'-20%' }}/>
          </Box>
        </Box>
        <Box className='prod'>
          <Box className='product-head-section'>
            <img className='vehicle-img' src="https://www.bbassets.com/static/v2566/custPage/build/content/img/standard-del.svg" alt="" />
            <Text fontSize={{ base: '8px', md: '12px', lg: '18px' }}>ALL PRODUCTS</Text>
          </Box>
          <Box className='prod-heading'>
            <Center>
              <Text style={{color:"#6e6e71"}} fontSize={{ base: '12px', md: '15px', lg: '18px' }}>Our Recommendations For You</Text>
            </Center>
            <Text fontSize={{ base: '10px', md: '12px', lg: '14px' }}>Based on what customers like you have bought</Text>
          </Box>
          <Box >
            <Grid  display="grid" gridTemplateColumns={{base:"repeat(1,1fr)", md:"repeat(2,1fr)",lg:"repeat(4,1fr)"}}  >
                {ProductsData.map((item)=>( 
                  <ProdData  Id={item._id} image={item.Image_url} name={item.Title}  kg={item.kg} sprice={item.Price} mrp={item.Price} Brand={item.Brand} Logo={Logo}/>
                ))}
            </Grid>
          </Box>
        </Box>  
      </Box>
    </Box>
  )
}
export default ProductPage

const ProdData=({Id,image,name,kg,sprice,mrp,Brand,Logo})=>{
  return(
    <>
      <Box key={Id} className="component">
        <Image src={image} className="Image1"/>
        <Image src={Logo} className="Logo"/>
        <Box className="Recommended" fontSize={{ base: '10px', md: '12px', lg: '15px' }}>Recommended</Box>
        <Text className='Brand' fontSize={{ base: '10px', md: '12px', lg: '15px' }}>{Brand}</Text>
        <Text className='Name' fontSize={{ base: '10px', md: '12px', lg: '15px' }}>{name}-{kg}</Text>
        <Box className='Cost'>
          <Text className='MRP' fontSize={{ base: '10px', md: '12px', lg: '15px' }}>MRP</Text>
          <Box className='Strike' fontSize={{ base: '10px', md: '12px', lg: '15px' }}>{sprice}</Box>
          <Box fontSize={{ base: '10px', md: '12px', lg: '15px' }}>Rs {mrp}</Box>
        </Box>
        <Box className='AddtoCart'>
          <Button>+</Button>
          <Text className='count'>1</Text>
          <Button>-</Button>
        </Box>
        <Button className='cart'>Add To Cart</Button>
      </Box>
    </>
  )
}