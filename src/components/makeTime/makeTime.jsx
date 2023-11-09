import { Box, Button, Heading, Text, Image, useDisclosure, useToast  } from '@chakra-ui/react'
import React from 'react'
import { katlet } from '../../assets'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/react'
import FoodDetails from './foodDetails'

const MakeTime = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
    const toast = useToast()
    const handleClik = () => {
            toast({
              title: 'Order canceled.',
              description: "We've canceled your order for you.",
              status: 'error',
              duration: 1000,
              isClosable: true,
            })
            onClose()
    }
    const handleOrder = () => {
        toast({
          title: 'Food ordered.',
          description: "We've ordered your food for you.",
          status: 'success',
          duration: 1000,
          isClosable: true,
        })
        onClose()
}
  return (
    <Box className='wrapper' mt={'30px'}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}> 

            <Box display={'flex'} flexDirection={'column'} gap={'50px'}>
                <Heading color={'#150C01'}>Making time a good time <br /> by making food the good <br /> food.</Heading>
                <Text color={'#150C01'}>There are many things are needed to start the Fast Food Business. You need <br /> not only Just Food Stalls with Persons but also specialized equipment,</Text>
                <Box display={'flex'} gap={'30px'}>
                    <Box>
                        <Button bg={'#DC780B'} _hover={{bg: 'pink'}} p={'25px'} onClick={onOpen}>
                            <Text color={'white'}>Order Now</Text>
                        </Button>
                        <AlertDialog
                            isOpen={isOpen}
                            leastDestructiveRef={cancelRef}
                            onClose={onClose}
                        >
                            <AlertDialogOverlay>
                            <AlertDialogContent bg={'#BDB76B'} rounded={'20px'}>
                                <AlertDialogHeader fontSize='lg' fontWeight='bold' color={'white'}>
                                Order Now
                                </AlertDialogHeader>

                                <AlertDialogBody color={'white'}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum veniam ad aperiam, animi obcaecati alias voluptas repellendus ipsam?
                                </AlertDialogBody>

                                <AlertDialogFooter>
                                <Button ref={cancelRef} colorScheme='teal'  onClick={() => handleClik()}>
                                    Cancel
                                </Button>
                                <Button colorScheme='cyan' onClick={() => handleOrder ()} ml={3}>
                                    Order
                                </Button>
                                </AlertDialogFooter>
                            </AlertDialogContent>
                            </AlertDialogOverlay>
                        </AlertDialog>
                    </Box>
                    <Box>
                        <FoodDetails />
                    </Box>

                    
                </Box>
            </Box>

            <Box>
                <Image src={katlet} width={'600px'} />
            </Box>
        </Box>
    </Box>
  )
}

export default MakeTime