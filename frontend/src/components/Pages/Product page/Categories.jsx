import { Box, Checkbox, CheckboxGroup, Text, VStack } from '@chakra-ui/react'
import React from 'react'
import "./Categories.css"

const Categories = () => {
  return (
    <Box >
        <CheckboxGroup colorScheme='green'>
              <VStack alignItems={"baseline"} marginLeft={"18%"}>
               <Box className='categories'  ml={{ base: '-22%', md: '-22%', lg: '-22%',xl:"-20%", '2xl':'-20%' }}>
                    <Box>
                        <Checkbox Checkbox value={"Fruits vegetables"} className='categories-gap' >
                            <Text fontSize={{ base: '8px', md: '12px', lg: '18px' }}>Fruits vegetables</Text>
                        </Checkbox>
                    </Box>
                    <Box>
                        <Checkbox value={"Foodgrains oil masala"} className='categories-gap' >
                            <Text fontSize={{ base: '8px', md: '12px', lg: '18px' }}>Foodgrains oil masala</Text>
                        </Checkbox>
                    </Box>
                    <Box>
                        <Checkbox Checkbox value={"Bakery cakes dairy"}  className='categories-gap' >
                            <Text fontSize={{ base: '8px', md: '12px', lg: '18px' }}>Bakery cakes dairy</Text>
                        </Checkbox>
                    </Box>
                    <Box>
                        <Checkbox value={"Beverages"} className='categories-gap'>
                            <Text fontSize={{ base: '8px', md: '12px', lg: '18px' }}>Beverages</Text>
                        </Checkbox>
                    </Box>
                    <Box>
                        <Checkbox value={"Snacks branded foods"} className='categories-gap'>
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