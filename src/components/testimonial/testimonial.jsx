import { ChevronLeftIcon, ChevronRightIcon, StarIcon } from '@chakra-ui/icons'
import { Box, Heading, Text, Image } from '@chakra-ui/react'
import React from 'react'
import {girl2} from '../../assets'

const Testimonial = () => {
  return (
    <Box className='wrapper' mt={'70px'}>
        <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'50px'}>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'30px'}>
                <Text color={'#DC780B'} fontWeight={'bold'}>Testimonial</Text>
                <Heading color={'#150C01'}>Making Food great again and again</Heading>
                <Text color={'#150C01'} textAlign={'center'}>You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage <br /> Customers, Effective Product catlogues etc to make your.</Text>
            </Box>
            <Box width={'80px'} _hover={{ bg: '#B0E0E6'}} p={'18px'} height={'80px'}>
                <Image src={girl2} _hover={{rounded :'50%'}}  />
            </Box>

            <Box display={'flex'} alignItems={'center'} gap={'150px'}>
                <Box>
                    <ChevronLeftIcon fontSize={'30px'} color={'#150C01'} />
                </Box>
                <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'20px'}>
                    <Text color={'#150C01'} textAlign={'center'}>
                        You need not only Just Food Stalls with Persons but also specialized <br /> equipment, Skills to manage Customers, Effective Product catlogues <br /> etc very successful to make your.
                    </Text>
                    <Box display={'flex'} gap={'10px'} >
                        <StarIcon color={'#DC780B'} />
                        <StarIcon color={'#DC780B'} />
                        <StarIcon color={'#DC780B'} />
                        <StarIcon color={'#DC780B'} />
                        <StarIcon color={'#C4C4C4'} />
                    </Box>
                    <Box display={'flex'} flexDirection={'column'} gap={'10px'} alignItems={'center'}>
                        <Text color={'#150C01'}>Augusta W. Reynoso</Text>
                        <Text fontSize={'12px'}>UI&UX DeSIGNER</Text>
                    </Box>
                </Box>
                <Box>
                    <ChevronRightIcon fontSize={'30px'} color={'#150C01'}  />
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Testimonial