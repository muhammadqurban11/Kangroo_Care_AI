'use client'
import { Box, Image, Heading, Text, Flex, VStack } from "@chakra-ui/react"

export const Team = () => {
    return (
        <Box aria-label='Cover Page' bgColor='app.secondary' p='10' >
            <Heading textAlign='center' color='app.primary' mb='10' mt='20'>Meet Our Professional Team</Heading>
            <Box className="slider-container">
                <Box className="slider" w='100%' h='100%'>
                    <Box>
                        <Image src="/assets/team/group-img.png" alt="Image 1" objectFit="cover" w='100%' h='100%' />
                    </Box>
                </Box>
            </Box>
            <br />
            <br />
            <br />
            <br />
            <Flex justify='space-between'>
                <VStack align='start' spacing='5' m='40'>
                    <Heading textAlign='center' color='app.primary'>CEO / Co Founder of KangarooCareAi</Heading>
                    <Text>The First Pakistani Manufacturer Infant Incubator, where we are dedicated to improving the lives of infants through innovative technology. As a manufacturer of state-of-the-art infant incubators, we understand the critical nature of neonatal care. Thats  why we have developed Kangaroo Care AI, a revolutionary desktop application that allows medical staff to control and monitor our incubators in real-time, ensuring the best possible care for our tiniest patients.</Text>
                </VStack>
                <Image src='/assets/team/ceo_img.png' alt='ceo_img.png' w='60%' h='60%' />
            </Flex>
            <Image src='/assets/team/team_02.jpg' alt='group-image' w='100%' h='100%' />
            <Box p='10' mr='20' ml='20' >
                <Heading color='app.primary' textAlign='center' mb='4'>Short Description About Our Team</Heading>
                <Text textAlign='center'>
                    We bring together a diverse group of innovators, researchers, and engineers passionate about shaping the future of artificial intelligence. Our team works tirelessly to foster the growth of AI startups and entrepreneurs by providing cutting-edge resources, mentorship, and a collaborative environment.
                </Text>
            </Box>
            {/* <Box>
                <Flex>
                    <Image src='/assets/team/team_img3.png' alt='ceo_img.png' className='hover-image' w='40%' h="20%" />
                    <Text className="hover-text" color='maroon'>Hovering Effect</Text>
                    <Image src='/assets/team/team_img_05.png' alt='ceo_img.png' className="hover-image2" />
                    <Text className="hover-text2">Text Hovering effect2</Text>
                </Flex>
                <Flex>
                    <Image src='/assets/team/team_img3.png' alt='ceo_img.png' className="hover-image3" />
                    <Text className="hover-text3">Text Hovering effect3</Text>
                    <Image src='/assets/team/team_member.png' alt='ceo_img.png' className="hover-image4" />
                    <Text className="hover-text4">Text Hovering effect4</Text>
                </Flex>
            </Box> */}

        </Box>
    )
}
export default Team;