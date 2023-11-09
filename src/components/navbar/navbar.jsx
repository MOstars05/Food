import { Box, Button, Image, Text, useDisclosure, useToast} from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'
import {logo} from '../../assets'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/react'
  

const Navbar = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const toast = useToast()
    const handleClik = () => {
            toast({
              title: 'Booking canceled.',
              description: "We've canceled your booking for you.",
              status: 'success',
              duration: 1000,
              isClosable: true,
            })
            onClose()
    }
    const handleDelete = () => {
        toast({
          title: 'Booking deleted.',
          description: "We've deleted your booking for you.",
          status: 'error',
          duration: 1000,
          isClosable: true,
        })
        onClose()
}
  return (
    <Box className='wrapper' mt={'25px'}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} >
            <Box display={'flex'} alignItems={'center'} gap={'40px'} >
                <Box>
                    <Link><Image src={logo} _hover={{width: '50px'}} /></Link>
                </Box>
                <Box display={'flex'} gap={'20px'} fontWeight={'bold'} >
                    <Link to={'/'}><Text color={'#DC780B'} _hover={{color: '#150C01'}}>Home</Text></Link>
                    <Link to={'/about'}><Text color={'#150C01'} _hover={{color: '#DC780B'}}>About</Text></Link>
                    <Link to={'/menu'}><Text color={'#150C01'} _hover={{color: '#DC780B'}}>Menu</Text></Link>
                    <Link to={'/features'}><Text color={'#150C01'} _hover={{color: '#DC780B'}}>Features</Text></Link>
                    <Link to={'/contact'}><Text color={'#150C01'} _hover={{color: '#DC780B'}}>Contact us</Text></Link>
                </Box>
            </Box>

            <Box >
                <Button bg={'#DC780B'} p={'15px'} _hover={{bg: 'aqua'}} onClick={onOpen}>
                    <Text color={'white'}>Booking Now</Text>
                </Button>

                <AlertDialog
                    isOpen={isOpen}
                    leastDestructiveRef={cancelRef}
                    onClose={onClose}
                >
                    <AlertDialogOverlay>
                    <AlertDialogContent bg={'#FFB6C1'} rounded={'20px'}>
                        <AlertDialogHeader fontSize='lg' fontWeight='bold' color={'#778899'}>
                            Booking Now
                        </AlertDialogHeader>

                        <AlertDialogBody color={'#778899'} >
                        Are you sure? You can't undo this action afterwards.
                        </AlertDialogBody>

                        <AlertDialogFooter>
                        <Button ref={cancelRef} colorScheme='pink' onClick={() => handleClik()}>
                            Cancel
                        </Button>
                        <Button colorScheme='twitter' onClick={() => handleDelete ()} ml={3}>
                            Delete
                        </Button>
                        </AlertDialogFooter>
                    </AlertDialogContent>
                    </AlertDialogOverlay>
                </AlertDialog>
            </Box>
        </Box>
    </Box>
  )
}

export default Navbar