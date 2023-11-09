import { Box, Heading, Image, Text, useDisclosure, Button } from '@chakra-ui/react'
import React from 'react'
import {girl} from '../../assets'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/react'

const About = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  return (
    <Box className='wrapper' mt={'120px'}>
        <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'}>
            <Box>
                <Image src={girl} />
            </Box>
            <Box display={'flex'} flexDirection={'column'} gap={'50px'}>
                <Box display={'flex'} flexDirection={'column'} gap={'25px'}>
                    <Text color={'#DC780B'} fontWeight={'bold'} >About us</Text>
                    <Heading color={'#150C01'}>Food Stalls with Persons but  to <br /> Product marketing plane <br />
                    catlogues etc to. </Heading>
                    <Text color={'#150C01'}>There are many things are needed to start the Fast Food Business. <br /> You need not only Just Food Stalls with Persons but also <br /> equipment  make your marketing plane Effective.</Text>
                </Box>
                <Box>
                    <Button bg={'#DC780B'}  _hover={{bg: '#A52A2A'}}  p={'23px'} onClick={onOpen}>
                        <Text color={'white'} >Read More</Text>
                    </Button>
                    <AlertDialog
                        isOpen={isOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={onClose}
                    >
                        <AlertDialogOverlay>
                        <AlertDialogContent bg={'#8A2BE2'} rounded={'20px'}>
                            <AlertDialogHeader fontSize='lg' fontWeight='bold' color={'#7FFF00'}>
                                Read More
                            </AlertDialogHeader>

                            <AlertDialogBody color={'white'}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, doloribus odio iste delectus at et natus quibusdam itaque, aliquam praesentium dignissimos sed earum, pariatur sequi? Praesentium, a provident nulla neque minima totam non. Officia obcaecati tenetur nesciunt soluta nam nihil?
                            </AlertDialogBody>

                            <AlertDialogFooter>
                                <Button colorScheme='red' bg={'#7FFF00'} onClick={onClose} ml={3}>
                                    Close
                                </Button>
                            </AlertDialogFooter>
                        </AlertDialogContent>
                        </AlertDialogOverlay>
                    </AlertDialog>
                </Box>
            </Box>
        </Box>
    </Box>
  )
}

export default About