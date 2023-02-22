import { useState } from "react"
import styles from '../../../styles/components/form/Form.module.css'
import {Button} from '@chakra-ui/react'
import { HamburgerIcon,SearchIcon } from "@chakra-ui/icons"
import Link from "next/link"
import Image from "next/image"
import { Container,Box,Text,Center,Heading,Flex,Input } from "@chakra-ui/react"
const Form=()=>{
    let [selectedValue, setSelectedValue] = useState('hidden')
    let [html,setHtml]=useState(false)
   const showSome=()=>{
// alert('function called')
setHtml(true)
   }
    return(
        <div >

     <Container zIndex={1} maxWidth='xxl' backgroundColor='white'
                borderBottom='1px' borderColor='grey' position='fixed'>
                <Flex ml='20px' mr='20px  ' justifyContent='space-between' flexWrap='nowrap'>
                    <Box><Flex ml='10px'>
                        <HamburgerIcon _hover={{selectedValue}} cursor='pointer' mt='15px' mr='10px' className={styles.menu}
                        h='30px' w='30px' />
                        <Text mt='19px' fontWeight='thin'>Menu</Text>
                        {html?
            <div className={'selectedValue'}>
<h1>mlaik</h1>
<h1>rana</h1>
<h1>rajut</h1>
            </div>: ''}
                        </Flex></Box>
                    <Box>
                        <Link href='/' >
                            <Image src="/pics/Vector.png"  alt='new inmg' height={30} width={30} />
                        </Link>
                    </Box>
                    <Box><Flex gap='20px' p='19px'><SearchIcon 
                        h='20px' w='20px' mt='4px' />
                        <Box borderRight='1px'></Box>
                        <Box borderRadius='50%;'>
                            <Link href='/'>
                                <Image  src="/pics/Vector.png" alt='newimG' height={30} width={30} />
                            </Link>
                        </Box>
                    </Flex></Box>
                </Flex>
            </Container>

            {/* <div >
                <Container size='container.lg' bg='white' pt='40px' mt='20px' >
                    <Container maxW='container.md' >
        <Heading>Contact Us</Heading>
        <Flex justifyContent='space-between'>
        <Box>
            <label htmlFor='name'>Name</label> <br />
            <Input size='sm' id='name' w='100%' placeholder="enter your name here" borderStyle='none'  borderBottom='2px solid red' borderColor='red' borderRadius='0' />
        </Box>
        <Box>
            <label htmlFor='name'>Name</label> <br />
            <Input size='sm' id='name' w='100%' placeholder="enter your name here" borderStyle='none'  borderBottom='2px solid red' borderColor='red' borderRadius='0' />
        </Box>
        </Flex>
                    </Container>
                </Container>
            </div> */}
        </div>
    )
}
export default Form