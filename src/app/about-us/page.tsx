import { Box, Heading, Image, Text } from "@chakra-ui/react"

import React from 'react'
export default function About() {
    return (
        <Box>
            <Box aria-label='cover-section' bgImage={`url("/assets/about us/baby-cover-image1.png")`}>
                <Image src="/assets/about us/baby-cover-image1.png" alt="cover-image" w="full" />
                <Box gap="4" position="absolute" top="50%" left="5%" px="4" display="flex" flexDirection="column" justifyContent="center" alignItems="flex-start" zIndex="1">
                    <Heading color="app.primary">About Us</Heading>
                    <Text justifyContent='left' textAlign='justify' w='40%'> Kangaroo Care AI system is designed with advanced features that make neonatal care easier, more efficient, and more effective.
                        With intuitive controls and real-time monitoring.</Text>
                </Box>
            </Box>
            <Box aria-label='our-mission-section' textAlign='center' mt='10'><Heading justifyContent='center' color='app.primary' mt="10">Featured In Shark Tank Pakistan 2024</Heading>
                <Box px='8' py='6'>
                    <Image src='/assets/about us/shark-tank-pakistan.jpg' alt='image_shark_tank' w='100%' h='100%' />
                </Box>
                <Text textAlign='justify' p='8'>Kangaroo Care AI, a cutting-edge startup focused on leveraging artificial intelligence to enhance infant care, has secured a major investment deal worth 3 crore through the Shark Tank Pakistan program. The investment will help the company scale its AI-driven solutions for monitoring infant health, development, and well-being. This deal is a significant step toward advancing technology in early childhood care, ensuring safer, smarter solutions for parents and healthcare professionals. With the support of the Sharks, Kangaroo Care AI aims to expand its impact and bring innovative products to the market. The partnership highlights the growing potential of AI in healthcare and infant care sectors</Text>
                <Heading color='app.primary'>Our&nbsp;Mission</Heading>
                <Text justifyContent='center' textAlign='justify' p='8'>Our mission is to empower and support innovative startups focused on harnessing the potential of artificial intelligence to improve early childhood development. We provide a nurturing environment for entrepreneurs to develop AI-driven solutions that enhance infant care, health monitoring, and learning. Through mentorship, resources, and funding, we aim to accelerate the creation of AI technologies that prioritize the well-being of infants. Our goal is to ensure these solutions are safe, ethical, and impactful, contributing to healthier, smarter futures for the next generation</Text>

            </Box>
        </Box>
    )
}