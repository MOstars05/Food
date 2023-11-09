import { Box, Button,Text, useDisclosure,} from '@chakra-ui/react'
import React from 'react'

import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/react'

const FoodDetails = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  return (
    <Box>
        <Button bg={'white'}  borderWidth={'1px'} _hover={{bg: 'orange'}} borderColor={'#DC780B'} p={'25px'} onClick={onOpen}>
            <Text color={'#DC780B'} _hover={{color: 'white'}}>Food Details</Text>
        </Button>
        <AlertDialog
            isOpen={isOpen}
            leastDestructiveRef={cancelRef}
             onClose={onClose}
        >
            <AlertDialogOverlay>
            <AlertDialogContent bg={'#FFEBCD'} rounded={'20px'}>
                <AlertDialogHeader fontSize='lg' color={'#DC143C'} fontWeight='bold'>
                    Food Details
                </AlertDialogHeader>

                <AlertDialogBody color={'#DC143C'}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis ipsum veniam ad aperiam, animi obcaecati alias voluptas repellendus ipsam?
                </AlertDialogBody>

                <AlertDialogFooter>
                    <Button colorScheme='red' bg={'#DC143C'} onClick={onClose} ml={3}>
                        Close
                    </Button>
                </AlertDialogFooter>
            </AlertDialogContent>
            </AlertDialogOverlay>
        </AlertDialog>
    </Box>
  )
}

export default FoodDetails