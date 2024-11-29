
import { PAGES } from '@/app-config'
import { Box, Button, Flex, Heading, Image, Link, Text } from '@chakra-ui/react'

export default function Products() {
    return (
        <Box aria-label='product-cover-page'>
            <Box bgColor="black" opacity='6'>
                <Image src='/assets/product/baby-wallpaper.jpg' alt='product-Image' w='1380px' h='600px' />
                <Flex direction='column' pos='absolute' top="60" left="20" maxW="800px" gap='4'>
                    <Heading color='app.primary'>Our Products </Heading>
                    <Text textAlign='justify' w='40%'>
                        Our baby products are designed with care and comfort in mind, ensuring your little one stays safe and happy. Made from soft, high-quality materials, they provide the perfect blend of practicality and style. Trust us for all your babies needs, from clothing to accessories.
                    </Text>
                    <Button w='fit-content' colorScheme='blue' ml='8' mt='6' as={Link} href={PAGES.Products.path}>
                        Get a Quote
                    </Button>
                </Flex>
            </Box>
            <Box aria-label='product-cards' ml='20' mt='20' mb='20'>
                <Heading color='app.primary' mb='4' textAlign='center' > PAKISTAN FIRST AI INCUBATOR</Heading>
                <Flex gap='10' align='center'>
                    <Image src='/assets/product/incubator.png' alt="incubator-image" w='450px' h='250px' border='3px Solid white' borderRadius='12' />
                    <Text textAlign="justify" mr='8'>
                        Kangaroo Care AI, Pakistan’s first AI-powered incubator manufacturer, marking a significant step forward for the local tech ecosystem.
                        Specializing in advanced infant incubators, Kangaroo Care AI’s flagship product is a desktop application that allows medical professionals to monitor and control incubators in real time. The company’s AI-powered electric incubators ensure seamless operation and monitoring, offering critical support for newborns, including those in neonatal intensive care units.
                        With intuitive controls and real-time monitoring features, these incubators leverage cutting-edge artificial intelligence to enhance neonatal care. The startup is not only making life-saving technology accessible but also improving healthcare outcomes for premature and critically ill newborns.
                    </Text>
                </Flex>
                <br />
                <Box aria-label='Manufacture Description'>
                    <Heading color='app.primary' textAlign='center' mb='4' >MANUFACTURE DESCRIPTION</Heading>
                    <Flex gap='4' align='center'>
                        <Image src='/assets/product/incubator_infant.jpg' alt="incubator-image" w='450px' h='250px' border='3px Solid white' borderRadius='12' />
                        <Text textAlign='justify' mr='8'>
                            The manufacturing process of an AI incubator begins with designing and prototyping, focusing on features like temperature control and AI integration. Key components, including sensors, processors, and medical-grade materials, are sourced and assembled. AI algorithms are then programmed to monitor vital signs and adjust conditions. After integration, the system undergoes rigorous testing for accuracy and reliability. Finally, the incubator is calibrated, undergoes quality control checks, and is packaged for distribution to healthcare providers.
                        </Text>
                    </Flex>
                </Box>
            </Box>
        </Box >

    )
}
