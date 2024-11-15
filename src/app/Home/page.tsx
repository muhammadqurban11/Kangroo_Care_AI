import { Box, Image, Text } from '@chakra-ui/react'
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
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
            <Box position="relative" width="100%" bg="#F4F4F4" padding="35px">
                <Box display="flex" justifyContent="space-between" alignItems="center" maxWidth="1200px" px="20px">
                    <Image src='/image 4.png' alt="Footer_Image" width="300px" height="auto" />
                    <Box display="flex" position='absolute' left='3%' top='95%'>
                        <ImLocation fontSize="25px" />
                        <Text display="flex" ml="10px" fontSize="16px" color="#555">
                            4B, Block-2 PECHS, Karachi, Pakistan
                        </Text>
                    </Box>
                    <Box display="flex" position='absolute' left='3%' top='130%'>
                        <BsFillTelephoneFill fontSize='20' />
                        <Text display="flex" ml="10px" fontSize="16px" color="#555">+923322842727</Text>
                    </Box>
                    <Box display="flex" position='absolute' left='3%' top='160%'>
                        <GrMail fontSize='20' />
                        <Text display="flex" ml="10px" fontSize="16px" color="#555">+mohammadlaeeq91@gmail.com</Text>
                    </Box>
                    <Box position="absolute" left="35%" top="20%">
                        <Text fontFamily="Jua" color="#286AA3" fontSize="25px">Quick Links</Text>
                    </Box>
                    <Box position="absolute" left="35%" top="50%" display="flex" flexDirection="column" gap="7px">
                        <Text fontSize="18px">Home</Text>
                        <Text fontSize="18px">About</Text>
                        <Text fontSize="18px">Products</Text>
                        <Text fontSize="18px">Contact Us</Text>
                        <Text fontSize="18px">Career</Text>
                    </Box>
                    <Box position="absolute" left="50%" top="20%">
                        <Text fontFamily="Jua" color="#286AA3" fontSize="25px">Our Mission</Text>
                    </Box>
                    <Box position='absolute' left='50%' right='20%' top='48%'>
                        <Text textAlign='justify'>At Kangaroo Care AI, our mission is to revolutionize neonatal care with AI-powered incubators that prioritize warmth, safety, and bonding. We combine advanced technology with compassionate design to support healthcare professionals and families, ensuring optimal outcomes for infants in their most critical early moments.</Text>
                    </Box>
                </Box>
            </Box>
        </div >
    )
}
export default Home;