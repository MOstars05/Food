
import { Box, Button, Heading, Text, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import { burger, delmonico, egg, peach, salads, vegie } from '../../assets'
import MenuProp from './menuProp'
import {
    AlertDialog,
    AlertDialogBody,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogContent,
    AlertDialogOverlay,
  } from '@chakra-ui/react'

const Menu = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const cancelRef = React.useRef()
  return (
    <Box className='wrapper' mt={'70px'}>
        <Box>
             <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap={'20px'}>
                <Text color={'#DC780B'} fontWeight={'bold'}>Menu</Text>
                <Heading color={'#150C01'}>Food Full of treaty Love</Heading>
                <Text color={'#150C01'} width={'740px'} textAlign={'center'}>There are many things are needed to start the Fast Food Business. You need not only Just Food Stalls with Persons but also specialized equipment, Skills to manage Customers, </Text>
             </Box>

             <Box>
                <Box display={'flex'} gap={'20px'} mt={'50px'}>
                    <MenuProp img={vegie} title={'Vegie Muffen'} price={'16$'} />
                    <MenuProp img={salads} title={'Salads'} price={'12$'} />
                    <MenuProp img={burger} title={'Burger'} price={'10$'} />
                </Box>
                <Box display={'flex'} gap={'20px'} mt={'50px'}>
                    <MenuProp img={delmonico} title={'Delmonico Steak dish'} price={'14$'} />
                    <MenuProp img={egg} title={'Egg Masala'} price={'9$'} />
                    <MenuProp img={peach} title={'Peach Melba dish'} price={'15$'} />
            </Box>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} mt={'30px'} >
                <Button onClick={onOpen} bg={'white'} p={'20px'} borderWidth={'1px'} borderColor={'#DC780B'} _hover={{bg: '#CD5C5C', borderWidth: '0px'}}>
                    <Text color={'#DC780B'} _hover={{color: 'white'}}>Learn More</Text>
                </Button>
                <AlertDialog
                        isOpen={isOpen}
                        leastDestructiveRef={cancelRef}
                        onClose={onClose}
                    >
                        <AlertDialogOverlay>
                        <AlertDialogContent bg={'#E9967A'} rounded={'20px'}>
                            <AlertDialogHeader fontSize='lg' fontWeight='bold' color={'aqua'}>
                                Read More
                            </AlertDialogHeader>

                            <AlertDialogBody color={'white'}>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut, doloribus odio iste delectus at et natus quibusdam itaque, aliquam praesentium dignissimos sed earum, pariatur sequi? Praesentium, a provident nulla neque minima totam non. Officia obcaecati tenetur nesciunt soluta nam nihil?
                            </AlertDialogBody>

                            <AlertDialogFooter>
                                <Button colorScheme='red' bg={'aqua'} onClick={onClose} ml={3}>
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

export default Menu