import { DeleteIcon, EmailIcon, PhoneIcon, UnlockIcon } from '@chakra-ui/icons'
import { Box , Image, Text} from '@chakra-ui/react'
import React from 'react'
import { logo } from '../../assets'

const Footer = () => {
  return (
    <Box bg={'#252525'}>
        <Box className='wrapper' p={'100px'} display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Box display={'flex'} flexDirection={'column'} gap={'25px'}>
                <Box>
                    <Image src={logo} _hover={{width: '50px'}} />
                </Box>
                <Box color={'white'} display={'flex'} flexDirection={'column'} gap={'10px'}>
                    <Text>www.company name.com</Text>
                    <Text>companyname@gmail.com</Text>
                    <Text>Phone: +7 485-118-03-25</Text>
                </Box>
            </Box>

            <Box color={'white'} display={'flex'} flexDirection={'column'} gap={'15px'}>
                <Box>
                    <Text fontWeight={'bold'} >Home</Text>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                    <Text>Landingpage</Text>
                    <Text>Documentation</Text>
                    <Text>Referral Program</Text>
                    <Text>UI & UX Design</Text>
                    <Text>Web Design</Text>
                </Box>
            </Box>

            <Box color={'white'} display={'flex'} flexDirection={'column'} gap={'15px'}>
                <Box>
                    <Text fontWeight={'bold'} >Menu</Text>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                    <Text>Landingpage</Text>
                    <Text>Documentation</Text>
                    <Text>Referral Program</Text>
                    <Text>UI & UX Design</Text>
                    <Text>Web Design</Text>
                </Box>
            </Box>

            <Box color={'white'} display={'flex'} flexDirection={'column'} gap={'15px'}>
                <Box>
                    <Text fontWeight={'bold'}>Company</Text>
                </Box>
                <Box display={'flex'} flexDirection={'column'} gap={'5px'}>
                    <Text>Landingpage</Text>
                    <Text>Documentation</Text>
                    <Text>Referral Program</Text>
                </Box>
                <Box display={'flex'} gap={'15px'}>
                    <PhoneIcon />
                    <UnlockIcon />
                    <EmailIcon />
                    <DeleteIcon />
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default Footer