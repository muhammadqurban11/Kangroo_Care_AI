import { Box, Heading, Image, Text } from '@chakra-ui/react'
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
        <div>
            <Box>
                <Image src="/image 2 (1).png" alt="baby_image" objectFit="cover" width="100%" height="100%" />
                <Box>
                    <Image src="/favicon.ico" alt="Favicon_Image" position="absolute" top="4%" left='1%' width="65px" />
                    <Text fontSize='4xl' fontFamily='Jua' color='app.primary' position="absolute" top='5%' left='7%' >Kangaroo Care AI</Text>
                    <Text fontSize='xl' fontFamily='Jua' color='app.primary' position="absolute" top='5%' right='30%' ><a href="#home">Home</a></Text>
                    <Text fontSize='xl' fontFamily='Jua' color='app.primary' position="absolute" top='5%' right='24%' ><a href="#about">About</a></Text>
                    <Text fontSize='xl' fontFamily='Jua' color='app.primary' position="absolute" top='5%' right='16%' ><a href="#products">Products</a></Text>
                    <Text fontSize='xl' fontFamily='Jua' color='app.primary' position="absolute" top='5%' right='7%' ><a href="#contact_us">Contact Us</a></Text>
                    <Text fontSize='xl' fontFamily='Jua' color='app.primary' position="absolute" top='5%' right='1%' ><a href="#career">Career</a></Text>
                </Box>
                <Box>
                    <Text fontSize='60px' fontFamily='jua' color='app.primary' position="absolute" top='18%' left='5%' right='35%'>Innovating Neonatal Care with AI-Powered Incubators</Text>
                    <Text fontSize='30px' fontFamily='Roboto' color='#444343' position="absolute" top='34%' left='5%' right='35%' >At Kangaroo Care AI, we blend advanced technology with compassionate design to ensure the best start for every newborn.</Text>
                </Box>
                <Box>
                    <Text bg="app.primary" color="#FFFFFF" width="180px" padding="5px" justifyContent='center' position="absolute" top='40%' marginLeft='70px'>
                        Explore Our Products
                    </Text>
                </Box>
                <Box bg='#FBEFDD' width='100%' padding="50px" fontSize='60px'>
                    <Heading justifySelf='center' color="app.primary">
                        Why Choose Us?
                    </Heading>
                </Box>
                <Box bg='#FBEFDD'>
                    <Text textAlign='justify' >
                        Choose Kangaroo Care AI for innovative, AI-powered infant care solutions designed with precision and compassion. Our advanced incubators prioritize infant safety, warmth, and health, integrating cutting-edge technology to support healthcare professionals and parents alike. With a commitment to excellence, reliability, and superior outcomes, we empower neonatal care teams to provide the best start for every newborn. Trust us for pioneering solutions that blend technology with heartfelt care.
                    </Text>
                </Box>
                <Box>
                    <Text>
                        <Image src='/image 6.png' alt='employee_group' width='100%' />
                    </Text>
                </Box>
                <Box position='absolute'>
                    <Text fontSize='115px' color=''>
                        100+
                    </Text>
                </Box>

                <Box width="100%" bg="#F4F4F4" padding="10px" minHeight="50vh" >
                    <Box>
                        <Image src='/image 4.png' alt="Footer_Image" width="300px" marginLeft='70px' mb='10px' />
                        <Box display='flex' flexDirection="column" gap='30px' justifyContent='start' marginTop='20px'  >
                            <Box marginLeft='60px' gap='10px' >
                                <ImLocation fontSize="25px" />
                                <Text ml="40px" fontSize="16px" marginTop="-28px" color="#555">
                                    4B, Block-2 PECHS, Karachi, Pakistan
                                </Text>
                            </Box>
                            <Box marginLeft='60px' gap='10px'>
                                <BsFillTelephoneFill fontSize='20' />
                                <Text ml="40px" fontSize="16px" marginTop="-22px" color="#555">
                                    +923322842727
                                </Text>
                            </Box>
                            <Box marginLeft='60px' gap='10px'>
                                <GrMail fontSize='20' />
                                <Text ml="40px" fontSize="16px" marginTop="-22px" color="#424040">
                                    +mohammadlaeeq91@gmail.com
                                </Text>
                            </Box>
                        </Box>
                    </Box>
                    <Box>
                        <Box marginLeft="450px" left="90%" marginTop="-16%" >
                            <Text fontFamily="Jua" color="app.primary" fontSize="25px">
                                Quick Links
                            </Text>
                        </Box>
                        <Box marginLeft="450px" top="25%" display="flex" flexDirection="column" gap="16px">
                            <Text fontSize="18px">Home</Text>
                            <Text fontSize="18px">About</Text>
                            <Text fontSize="18px">Products</Text>
                            <Text fontSize="18px">Contact Us</Text>
                            <Text fontSize="18px">Career</Text>
                        </Box>
                    </Box>
                    <Box>
                        <Box marginLeft="700px" marginTop="-18%" >
                            <Text fontFamily="Jua" color="app.primary" fontSize="25px">
                                Our Mission
                            </Text>
                        </Box>
                        <Box marginLeft="700px" marginRight='80px' top='25%'>
                            <Text textAlign='justify'>
                                At Kangaroo Care AI, our mission is to revolutionize neonatal care with AI-powered incubators that prioritize warmth, safety, and bonding. We combine advanced technology with compassionate design to support healthcare professionals and families, ensuring optimal outcomes for infants in their most critical early moments.
                            </Text>
                            <Text display='flex' justifyContent='start' gap='16px' mt='30px' >
                                <RiFacebookFill fontSize="25px" />
                                <IoLogoInstagram fontSize="25px" />
                                <FaLinkedinIn fontSize="25px" />
                            </Text>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </div >
    )
}
export default Home;