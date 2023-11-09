import { Box, Button, Heading, Input, InputGroup, InputRightElement, Text } from '@chakra-ui/react'
import axios from 'axios'
import React, { useState } from 'react'

const Contact = () => {
    const [mes, setMes] = useState('')
    const TOKEN = '6216727547:AAGq1hPqF8dQRRx96xORTiVV-H3Iy0IaUjI'
    const handleSubmit = () =>{
        let mess = `Habar keldi:\n`
        mess += `habar: ${mes}\n`

        axios.post('https://api.telegram.org/bot' + TOKEN + '/sendMessage' , {
            chat_id: '-1001823345277',
            parse_mode: 'html',
            text: mess
        })
        setMes('')
    }
    
    
  return (
    <Box bg={'#FBF1E7'} mt={'80px'} p={'100px'}>
        <Box className={'wrapper'} display={'flex'} flexDirection={'column'} gap={'50px'}>
            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} gap='20px'>
                <Text color={'#DC780B'} fontWeight={'bold'}>Contact </Text>
                <Heading color={'#150C01'} textAlign={'center'}>Food Stalls with Persons but also specialized <br /> equipment, Skills to manage.</Heading>
            </Box>

            <Box pr={'140px'} pl={'140px'}>
                <InputGroup size='lg' >
                    <Input p={'25px'} value={mes} onChange={(e) => setMes(e.target.value)}
                        pr='4.5rem'
                        placeholder='Enter your message'
                        bg='white'
                    />
                    <InputRightElement width='5rem' >
                        <Button h='1.8rem' size='md' color={'white'} bg={'#DC780B'} p={'28px'} _hover={{bg: '#6A5ACD'}} onClick={handleSubmit}>
                            Send
                        </Button>
                    </InputRightElement>
                </InputGroup>
            </Box>

        </Box>
    </Box>
  )
}

export default Contact