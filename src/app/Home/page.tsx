import { Box, Image, Text } from '@chakra-ui/react'
// import { ImLocation } from "react-icons/im";
import React from 'react'


function Home() {
    return (
        <div>
            <Box position="relative">
                <Image src="/image 2 (1).png" alt="baby_image" objectFit="cover" width="100%" height="100%" />
                <Image src="/favicon.ico" alt="Favicon_Image" position="absolute" top="1%" left='1%' width="65px" />
                <Text fontSize='4xl' fontFamily='Jua' color='#286AA3' position="absolute" top='2%' left='7%' >Kangaroo Care AI</Text>
                <Text fontSize='xl' fontFamily='Jua' color='#286AA3' position="absolute" top='4%' right='30%' ><a href="http://#">Home</a></Text>
                <Text fontSize='xl' fontFamily='Jua' color='#286AA3' position="absolute" top='4%' right='24%' ><a href="http://">About</a></Text>
                <Text fontSize='xl' fontFamily='Jua' color='#286AA3' position="absolute" top='4%' right='16%' ><a href="http://">Products</a></Text>
                <Text fontSize='xl' fontFamily='Jua' color='#286AA3' position="absolute" top='4%' right='7%' ><a href="http://">Contact Us</a></Text>
                <Text fontSize='xl' fontFamily='Jua' color='#286AA3' position="absolute" top='4%' right='1%' ><a href="http://">Career</a></Text>
                <Box>
                    <Text fontSize='60px' fontFamily='Jua' color='#286AA3' position="absolute" top='20%' left='5%' right='35%'>Innovating Neonatal Care with AI-Powered Incubators</Text>
                    <Text fontSize='30px' fontFamily='Roboto' color='#444343' position="absolute" top='45%' left='5%' right='35%' >At Kangaroo Care AI, we blend advanced technology with compassionate design to ensure the best start for every newborn.</Text>
                </Box>
                <Box>
                    <Text bg="#286AA3" color="#FFFFFF" width="180px" padding="8px" textAlign="center" alignItems=" center" position="absolute" top='70%' left='6%'>
                        Explore Our Products
                    </Text>
                </Box>
            </Box>
            {/* <Box position='relative' bg='#F4F4F4'>
                <Text><Image src='/image 4.png' alt="Footer_Image" ml='20px' position="absolute" top='50%' left='1%' paddingTop='100px' width='396px' /></Text>
                <Box display="inline-block" textAlign="center" paddingLeft="30px" position='absolute' mt='250px'>
                    <ImLocation fontSize='30px' />
                </Box>
                <Text display='flex' mb='50px' paddingLeft='40px' top='655%'>4B, Block-2 PECHS, Karachi, Pakistan</Text>


            </Box> */}
        </div >
    )
}
export default Home;