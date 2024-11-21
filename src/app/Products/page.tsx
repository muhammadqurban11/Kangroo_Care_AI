


import { Box, Button, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'

import React from 'react'

export default function Products() {
    return (
        <Box aria-label='product-cover-page'>
            <Box>
                <Image src='/assests/product/baby-wallpaper.jpg' alt='product-Image' w='1380px' h='600px' />
                <Flex direction='column' pos='absolute' top="60" left="20" maxW="800px" gap='4'>
                    <Heading color='app.primary'>Our Products </Heading>
                    <Text textAlign='justify' w='40%'>
                        Our baby products are designed with care and comfort in mind, ensuring your little one stays safe and happy. Made from soft, high-quality materials, they provide the perfect blend of practicality and style. Trust us for all your baby's needs, from clothing to accessories.
                    </Text>
                    <Button w='fit-content' colorScheme='blue' ml='8' mt='6' as={Link} href='Home'>
                        Get a Quote
                    </Button>
                </Flex>
            </Box>
            <Box aria-label='product-cards' ml='20' mt='20' mb='20'>
                <Flex gap='4'>
                    <Image src='/assests/product/incubator.png' w='320px' border='3px Solid white' borderRadius='12' />
                    <Text w='full' p='4' m='5' mt='4'   >
                        <Heading color='app.primary' textAlign='center' mb='4'> PAKISTAN'S FIRST AI INCUBATOR</Heading>
                        Kangaroo Care AI, Pakistan’s first AI-powered incubator manufacturer, marking a significant step forward for the local tech ecosystem.
                        Specializing in advanced infant incubators, Kangaroo Care AI’s flagship product is a desktop application that allows medical professionals to monitor and control incubators in real time. The company’s AI-powered electric incubators ensure seamless operation and monitoring, offering critical support for newborns, including those in neonatal intensive care units (NICUs).
                        With intuitive controls and real-time monitoring features, these incubators leverage cutting-edge artificial intelligence to enhance neonatal care. The startup is not only making life-saving technology accessible but also improving healthcare outcomes for premature and critically ill newborns.
                    </Text>
                </Flex>
                <Heading>MANUCTURE</Heading>
            </Box>
        </Box>

    )
}
