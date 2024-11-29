import { Box, Button, Flex, FormControl, FormLabel, Heading, Input, Text, VStack } from "@chakra-ui/react"
import Image from "next/image";



const Contact = () => {
    return (
        <Box aria-label='cover page'  >
            <Box bgColor='app.grey1'>
                <Image src="/assets/contact us/transparent-images.png" alt="Image" width='1200' height='1200' />
            </Box>
            <Flex pos='absolute' left='0' right='0' top='32' bottom='0' justify='center' >
                <VStack>
                    <Heading textAlign='center' color='app.primary'>Contact Us</Heading>
                </VStack>
            </Flex>
            <Box aria-label='contact-us Form' justifyItems='center' mt='20' mb='20' >
                <VStack top="42%" left="38%" backdropFilter="blur(8px)" bgColor="rgba(194, 190, 190, 0.7)" borderRadius="md" p="6" boxShadow="lg" zIndex="10" >
                    <FormControl isRequired>
                        <Heading mb="4" color="app.primary" textAlign="center">Keep in Touch !!!</Heading>
                        <FormLabel htmlFor="name">
                            Name
                            <Input type="text" placeholder="Enter your name" focusBorderColor="app.primary" borderColor="app.grey2" _hover={{ borderColor: "app.primary" }} />
                        </FormLabel>
                        <FormLabel htmlFor="email">
                            Email
                            <Input type="email" placeholder="Enter your email" focusBorderColor="app.primary" borderColor="app.grey2" _hover={{ borderColor: "app.primary" }} />
                        </FormLabel>
                        <FormLabel htmlFor="phone">
                            Phone
                            <Input type="phone" placeholder="Enter your phone number" focusBorderColor="app.primary" borderColor="app.grey2" _hover={{ borderColor: "app.primary" }} />
                        </FormLabel>
                        <FormLabel htmlFor="address">
                            Address
                            <Input type="address" placeholder="Enter your address" focusBorderColor="app.primary" borderColor="app.grey2" _hover={{ borderColor: "app.primary" }} />
                        </FormLabel>
                        <FormLabel htmlFor="message">
                            Message
                            <Input type="message" placeholder="Enter your message" focusBorderColor="app.primary" borderColor="app.grey2" _hover={{ borderColor: "app.primary" }} />
                        </FormLabel>
                    </FormControl>
                    <Button colorScheme="blue" type="submit" _hover={{ bg: "app.primary", color: "white" }} borderRadius="md" boxShadow="md"> Submit</Button>
                </VStack>
            </Box>
        </Box >
    )
}
export default Contact;