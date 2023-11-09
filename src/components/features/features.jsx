import { Box, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { deliver, home, smile } from '../../assets'
import FeaturesProp from './featuresProp'

const Features = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={'80px'} mt={'70px'}>

        <Box display={'flex'} flexDirection={'column'} alignItems={'center'}>
            <Text color={'#DC780B'} fontWeight={'bold'} >Features</Text>
            <Heading color={'#150C01'}>Food with a New Passion</Heading>
        </Box>
        <Box display={'flex'}>
            <FeaturesProp img={home} title={'Quality Food'} text={'It can be a very secure path to earn good money and make you very successful creative entrepreneur.'} />
            <FeaturesProp img={deliver} title={'Food Delivery'} text={'It can be a very secure path to earn good money and make you very successful creative entrepreneur.'} />
            <FeaturesProp img={smile} title={'Super Taste '} text={'It can be a very secure path to earn good money and make you very successful creative entrepreneur.'} />
        </Box>
    </Box>
  )
}

export default Features