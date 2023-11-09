import { StarIcon } from '@chakra-ui/icons'
import { Box, Button,  Image, Text } from '@chakra-ui/react'
import styled from '@emotion/styled'
import React, { useState } from 'react'
import { vegie } from '../../assets'

const MenuProp = ({img, title, price}) => {
  return (
    <Box borderWidth={'1px'} rounded={'25px'}>
        <Box >
            <Box>
                <Image src={img} />
            </Box>

            <Box p={'15px'} display={'flex'} flexDirection={'column'} gap={'20px'}>
                <Box display={'flex'} fontSize={'20px'} fontWeight={'bold'} gap={'110px'} color={'#150C01'}>
                    <Text>{title}</Text>
                    <Text>{price}</Text>
                </Box>
                <Box>
                    <Text>There are many things are needed to start <br /> the Fast Food Business.</Text>
                </Box>
                <Box display={'flex'} alignItems={'center'} gap={'130px'}>
                    <Button bg={'#DC780B'} p={'10px'} _hover={{bgColor: '#9400D3'}} >
                        <Text color={'white'} fontSize={'20px'}>+</Text>
                    </Button>
                    <Box display={'flex'} gap={'7px'}>
                        <StarIcon color={'#DC780B'} />
                        <StarIcon color={'#DC780B'} />
                        <StarIcon color={'#DC780B'} />
                        <StarIcon color={'#DC780B'} />
                        <StarIcon color={'#C4C4C4'} />
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default MenuProp