import { Box, Checkbox, CheckboxGroup, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { useEffect } from 'react'
import "./Categories.css"
import { useSearchParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { GetProductsData } from '../../redux/actions/action'
import { useAlert } from 'react-alert'

const Categories = () => {
    const [SearchParams,setSearchParams]=useSearchParams()
    const [categoriesData,setcategoriesData]=useState(SearchParams.getAll("Category")||[])
    const dispatch=useDispatch()
    const alert = useAlert();
    const handlecategoriesData=(value)=>{
        setcategoriesData(value)
    }

    console.log(categoriesData);
    useEffect(()=>{
        setSearchParams({Category:categoriesData})
        dispatch(GetProductsData({Category:categoriesData},alert))
    },[categoriesData,SearchParams,dispatch,setSearchParams,alert])
  return (
    <Box >
        <CheckboxGroup colorScheme='green' defaultValue={categoriesData} onChange={handlecategoriesData}>
              <VStack alignItems={"baseline"} marginLeft={"18%"}>
               <Box className='categories'  ml={{ base: '-22%', md: '-22%', lg: '-22%',xl:"-20%", '2xl':'-20%' }}>
                    <Box>
                        <Checkbox Checkbox value={"Fruits_vegetables"} className='categories-gap' >
                            <Text fontSize={{ base: '8px', md: '12px', lg: '18px' }}>Fruits vegetables</Text>
                        </Checkbox>
                    </Box>
                    <Box>
                        <Checkbox value={"Foodgrains_oil_masala"} className='categories-gap' >
                            <Text fontSize={{ base: '8px', md: '12px', lg: '18px' }}>Foodgrains oil masala</Text>
                        </Checkbox>
                    </Box>
                    <Box>
                        <Checkbox Checkbox value={"Bakery_cakes_dairy"}  className='categories-gap' >
                            <Text fontSize={{ base: '8px', md: '12px', lg: '18px' }}>Bakery cakes dairy</Text>
                        </Checkbox>
                    </Box>
                    <Box>
                        <Checkbox value={"Beverages"} className='categories-gap'>
                            <Text fontSize={{ base: '8px', md: '12px', lg: '18px' }}>Beverages</Text>
                        </Checkbox>
                    </Box>
                    <Box>
                        <Checkbox value={"Snacks_branded_foods"} className='categories-gap'>
                        <Text fontSize={{ base: '8px', md: '12px', lg: '18px' }}>Snacks branded foods</Text>
                        </Checkbox>
                    </Box>
                    <Box>
                        <Checkbox value={"Beauty hygiene"} className='categories-gap'>
                            <Text fontSize={{ base: '8px', md: '12px', lg: '18px' }}>Beauty hygiene</Text>
                        </Checkbox>
                    </Box>
                    <Box>
                        <Checkbox value={"Cleaning household"} className='categories-gap'>
                            <Text fontSize={{ base: '8px', md: '12px', lg: '18px' }}>Cleaning household</Text>
                        </Checkbox>
                    </Box>
                    <Box>
                        <Checkbox value={"Kitchen garden pets"} className='categories-gap'>
                            <Text fontSize={{ base: '8px', md: '12px', lg: '18px' }}>Kitchen garden pets</Text>
                        </Checkbox>
                    </Box>
                    <Box>
                        <Checkbox value={"Eggs meat fish"} className='categories-gap'>
                            <Text fontSize={{ base: '8px', md: '12px', lg: '18px' }}>Eggs meat fish</Text>
                        </Checkbox>
                    </Box>
                    <Box>
                    <Checkbox value={"Gourmet world food"} className='categories-gap'>
                        <Text fontSize={{ base: '8px', md: '12px', lg: '18px' }}>Gourmet world food</Text>
                    </Checkbox>
                    </Box>
                    <Box>
                        <Checkbox value={"Baby care"} className='categories-gap' >
                            <Text fontSize={{ base: '8px', md: '12px', lg: '18px' }}>Baby care</Text>
                        </Checkbox>
                    </Box>
               </Box>
              </VStack>
            </CheckboxGroup>
    </Box>
  )
}

export default Categories