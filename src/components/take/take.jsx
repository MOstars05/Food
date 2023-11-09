import { AtSignIcon, WarningIcon } from '@chakra-ui/icons'
import { Box, Heading, Image, Text, Button } from '@chakra-ui/react'
import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import {phone} from '../../assets'


const Take = () => {
  return (
    <Box  mt={'120px'} bg={'#FBF1E7'}>
        <Box className='wrapper' display={'flex'} justifyContent={'space-around'} alignItems={'center'}>
            <Box display={'flex'} flexDirection={'column'} gap={'50px'}>
                <Box display={'flex'} flexDirection={'column'} gap={'25px'}>
                    <Text color={'#DC780B'} fontWeight={'bold'} >Take away</Text>
                    <Heading color={'#150C01'}>Food Stalls with Persons but  to <br /> Product marketing plane <br />
                    catlogues etc to. </Heading>
                    <Text color={'#150C01'}>There are many things are needed to start the Fast Food Business. <br /> You need not only Just Food Stalls with Persons but also <br /> equipment  make your marketing plane Effective.</Text>
                </Box>
                <Box display={'flex'} gap={'30px'}>
                    <Box>
                        <Button bg={'black'}  _hover={{bg: '#191970'}}  p={'23px'} >
                            <Link to={'https://www.youtube.com/@MOdevco'}>
                                <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                                    <AtSignIcon color={'white'} />
                                    <Text color={'white'}>App Store</Text>
                                </Box>
                            </Link>
                        </Button>
                    </Box>

                    <Box>
                        <Button bg={'white'} borderWidth={'1px'}  borderColor={'gray'} _hover={{bg: '#98FB98'}}  p={'23px'} >
                            <Link to={'https://t.me/MOdevco'}>
                                <Box display={'flex'} gap={'10px'} alignItems={'center'}>
                                    <WarningIcon color={'#150C01'} />
                                    <Text color={'#150C01'}>App Store</Text>
                                </Box>
                            </Link>
                        </Button>
                    </Box>
                </Box>
            </Box>

            <Box>
                <Image src={phone} />
            </Box>
        </Box>
    </Box>
  )
}

export default Take