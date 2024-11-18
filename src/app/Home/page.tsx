import { Box, Heading, Image, Text } from '@chakra-ui/react';
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { RiFacebookFill } from "react-icons/ri";
import { IoLogoInstagram } from "react-icons/io";
import { FaLinkedinIn } from "react-icons/fa";
import React from 'react'
// import { div } from 'framer-motion/client';


function Home() {
    return (
        <Box>
            <Image src="/image 2 (1).png" alt="baby_image" objectFit="cover" width="100%" height="100%" />
            
            <Box>
                <Text fontSize='60px' fontFamily='jua' color='app.primary' position="absolute" top='18%' left='5%' right='35%'>Innovating Neonatal Care with AI-Powered Incubators</Text>
                <Text fontSize='30px' fontFamily='roboto' color='#444343' position="absolute" top='30%' left='5%' right='35%' >At Kangaroo Care AI, we blend advanced technology with compassionate design to ensure the best start for every newborn.</Text>
            </Box>
            <Box>
                <Text bg="app.primary" color="#FFFFFF" width="180px" padding="5px" justifyContent='center' position="absolute" top='35%' marginLeft='70px'>
                    Explore Our Products
                </Text>
            </Box>
            <Box bg='#FBEFDD' width='100%' padding="50px" fontSize='60px'>
                <Heading justifySelf='center' color="app.primary" fontFamily='righteous'>
                    Why Choose Us?
                </Heading>
            </Box>
            {/* <Box display='row' bg='#FBEFDD'>
                <Text display="col-6">
                    Choose Kangaroo Care AI for innovative, AI-powered infant care solutions designed with precision and compassion. Our advanced incubators prioritize infant safety, warmth, and health, integrating cutting-edge technology to support healthcare professionals and parents alike. With a commitment to excellence, reliability, and superior outcomes, we empower neonatal care teams to provide the best start for every newborn. Trust us for pioneering solutions that blend technology with heartfelt care.
                </Text>
                <Text display="col-6">
                    Choose Kangaroo Care AI for innovative, AI-powered infant care solutions designed with precision and compassion. Our advanced incubators prioritize infant safety, warmth, and health, integrating cutting-edge technology to support healthcare professionals and parents alike. With a commitment to excellence, reliability, and superior outcomes, we empower neonatal care teams to provide the best start for every newborn. Trust us for pioneering solutions that blend technology with heartfelt care.
                </Text>
            </Box> */}
            <Box bg="#FBEFDD" p="20px" display="flex">
                <Text width='565px' height='300px' top='-383px' left='-1298px'>
                    Choose Kangaroo Care AI for innovative, AI-powered infant care solutions designed with precision and compassion. Our advanced incubators prioritize infant safety, warmth, and health, integrating cutting-edge technology to support healthcare professionals and parents alike. With a commitment to excellence, reliability, and superior outcomes, we empower neonatal care teams to provide the best start for every newborn. Trust us for pioneering solutions that blend technology with heartfelt care.
                </Text>
                <Box ml='15%' mt='-40px'>
                    <Image src='/image 7.png' alt='image_with_ceo' left='80%' width='350px'></Image>
                </Box>
            </Box>
            <Box position="relative" width='100'>
                <Box opacity="0.5" boxShadow="0px 4px 6px rgba(0, 0, 0, 0.1)">
                    <Image src='/Rectangle 13.png' alt='shadow_image' width='100%' />
                </Box>
                <Box position="absolute" top="0" left="0" width="100%">
                    <Image src='/image 6.png' alt='employee_group' width="100%" />
                </Box>
            </Box>
            <Box position='absolute'>
                <Text fontSize='80px' color="app.white" fontFamily="app.roboto" textAlign='center' mt="-110%" right='10px'   >
                    100+
                </Text>
                <Text fontSize='25px' color="app.white" fontFamily="app.roboto" textAlign='center' m='10%' mt='-10%'   >
                    UNIT SOLD
                </Text>
            </Box>

           



        </Box>
    )
}
export default Home;