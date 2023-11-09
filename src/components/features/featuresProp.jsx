import { Box, Text, Image } from '@chakra-ui/react'
import React from 'react'


const FeaturesProp = ({title, text, img}) => {
  return (
    <Box className='wrapper'>

        <Box display={'flex'} alignItems={'center'} flexDirection={'column'} gap={'25px'}>
            <Box bg={'#8FA632'} width={'80px'} _hover={{ rounded: '0%', bg: '#DC780B'}} p={'18px'} height={'80px'}  rounded={'50%'}>
                <Image src={img}/>
            </Box>
            <Text color={'#150C01'} fontWeight={'bold'}>{title}</Text>
            <Text color={'#150C01'} width={'300px'} textAlign={'center'}>{text}</Text>
        </Box>

    </Box>
  )
}

export default FeaturesProp