import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react"

export const Team = () => {
    return (
        <Box aria-label='Team-content' bgColor='app.grey2'>
            <Image src='/assets/team/team-img2.jpg' alt='team-img' />
            <Flex pos='absolute' top='80' direction='column' m='9' textAlign='center' w='480px' gap='4'>
                <Heading color='app.primary' gap='4'>Meet Our Professional Team</Heading>
                <Text color='blackAlpha.900'>Our professional team is dedicated to delivering exceptional solutions with expertise and passion. Each member brings unique skills and knowledge to drive innovation and excellence. Together, we work towards achieving impactful results for our clients.</Text>
            </Flex>
            <Box bgColor='app.grey2'>
                <Heading color='app.primary' textAlign='center' mb='20' mt='10'>Teams and People</Heading>
                <Flex justify='space-between' ml='20' mr='20' gap='8' pb='10'>
                    <Flex flex='1'>
                        <Box border='2px solid white' bgColor='app.secondary' borderRadius='20px' justifyItems='center' w='full' >
                            <Image src='/assets/team/team-img.jpg' alt='professional-team-image' border='2px solid white' borderRadius='50%' w='150px' h='150px' mt='3' />

                            <Text >
                                <Text>BOI MEDICAL ENGINEER</Text>
                            </Text>

                        </Box>
                    </Flex>
                    <Flex flex='1'>
                        <Box border='2px solid white' bgColor='app.secondary' borderRadius='20px' justifyItems='center' w='full'>
                            <Image src='/assets/team/team-img.jpg' alt='professional-team-image' border='2px solid white' borderRadius='100px' w='150px' h='150px' mt='3' />
                            <Text >
                                <Text>BOI MEDICAL ENGINEER</Text>
                            </Text>
                        </Box>
                    </Flex>
                    <Flex flex='1'>
                        <Box border='2px solid white' bgColor='app.secondary' borderRadius='20px' justifyItems='center' w='full'>
                            <Image src='/assets/team/team-img.jpg' alt='professional-team-image' border='2px solid white' borderRadius='100px' w='150px' h='150px' mt='3' />
                            <Text >
                                <Text fontSize='20px'>BOI MEDICAL ENGINEER</Text>
                            </Text>
                        </Box>
                    </Flex>
                    <Flex flex='1'>
                        <Box border='2px solid white' bgColor='app.secondary' borderRadius='20px' justifyItems='center' w='full'>
                            <Image src='/assets/team/team-img.jpg' alt='professional-team-image' border='2px solid white' borderRadius='100px' w='150px' h='150px' mt='3' />
                            <Text >
                                <Text>BOI MEDICAL ENGINEER</Text>
                            </Text>
                        </Box>
                    </Flex>
                </Flex>
            </Box>
        </Box>
    )
}

export default Team;