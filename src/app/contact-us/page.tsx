import { Box, Button, Flex, FormControl, FormLabel, Heading, Image, Input, Text, VStack } from "@chakra-ui/react"



const Contact = () => {
    return (
        <Box aria-label='cover page' w='fit-content' bg='app.white'>
            <Image src="/assets/contact us/contact-image-.jpeg" alt="Image" />
            <Flex pos='absolute' left='0' right='0' top='32' bottom='0' justify='center' >
                <VStack>
                    <Heading textAlign='center' color='app.primary'>Contact Us</Heading>
                    <Text> We Build Relationships, Not Just Solutions. Lets Thrive Together. Contact Us Now!</Text>
                </VStack>
            </Flex>
            <br />
            <br />
            <Box aria-label='contact-us Form' border='none' borderRadius='10' bgColor='app.secondary' p='10' m='auto' maxW='md' gap='5' >
                <VStack>
                    <FormControl>
                        <Heading mb='4' color="app.primary">Keep in Touch !!!</Heading>
                        <FormLabel htmlFor="name">Name
                            <Input type="text" placeholder="Enter your name" />
                        </FormLabel>
                        <FormLabel htmlFor="email">Email
                            <Input type="email" placeholder="Enter your email" />
                        </FormLabel>
                        <FormLabel htmlFor="phone">Phone
                            <Input type="phone" placeholder="Enter your phone number" />
                        </FormLabel>
                        <FormLabel htmlFor="address">Address
                            <Input type="address" placeholder="Enter your address" />
                        </FormLabel>
                        <FormLabel htmlFor="message">Message
                            <Input type="message" placeholder="Enter your message" />
                        </FormLabel>
                    </FormControl>
                    <Button colorScheme="teal" type='submit' >Submit</Button>
                </VStack>
            </Box>
            <br />
            <br />
        </Box>
    )
}
export default Contact;