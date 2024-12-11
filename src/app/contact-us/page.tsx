'use client'

import sendContactFrom from "../lib/api";

import { Box, Button, Flex, FormControl, FormErrorMessage, FormLabel, Heading, Input, Text, VStack } from "@chakra-ui/react"
import Image from "next/image";
import { useState } from "react";



const initialValues = { name: "", email: "", phone: "", address: "", message: "" }
const initialState = { values: initialValues, isLoading:false }


const Contact = () => {

    const [state, setState] = useState(initialState);

    const { values, isLoading } = state;

    const handleChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
        setState((prev) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            },

        }))
        // console.log(target.value)
    }

    const onSubmit = async () => {(
        setState((prev) => ({
            ...prev,
            isLoading: true,
        })),
        await sendContactFrom (values)
    )}



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
            <Box aria-label='contact-us Form' mx='auto' my='20' mt='20' mb='20' maxW="400px"  >
                <VStack top="42%" left="38%" backdropFilter="blur(8px)" bgColor="rgba(194, 190, 190, 0.7)" borderRadius="md" p="6" boxShadow="lg" zIndex="10" >
                    <FormControl>
                        <Heading mb="4" color="app.primary" textAlign="center">Keep in Touch !!!</Heading>
                        <FormLabel htmlFor="name">
                            Name
                            <Input type="text" name='name' value={values.name} onChange={handleChange} errorBorderColor="red.400"placeholder="Enter your name" focusBorderColor="app.primary" borderColor="app.grey2" _hover={{ borderColor: "app.primary" }} />
                            {/* <FormErrorMessage>Required</FormErrorMessage>     */}
                        </FormLabel>
                        <FormLabel htmlFor="email">
                            Email
                            <Input type="email" name='email' value={values.email}onChange={handleChange}  placeholder="Enter your email" focusBorderColor="app.primary" borderColor="app.grey2" _hover={{ borderColor: "app.primary" }} />
                        </FormLabel>
                        <FormLabel htmlFor="phone">
                            Phone
                            <Input type="phone" name='phone' value={values.phone} onChange={handleChange} placeholder="Enter your phone number" focusBorderColor="app.primary" borderColor="app.grey2" _hover={{ borderColor: "app.primary" }} />
                        </FormLabel>
                        <FormLabel htmlFor="address">
                            Address
                            <Input type="address" name='address' value={values.address} onChange={handleChange} placeholder="Enter your address" focusBorderColor="app.primary" borderColor="app.grey2" _hover={{ borderColor: "app.primary" }} />
                        </FormLabel>
                        <FormLabel htmlFor="message">
                            Message
                            <Input type="message" name='message' value={values.message} onChange={handleChange} placeholder="Enter your message" focusBorderColor="app.primary" borderColor="app.grey2" _hover={{ borderColor: "app.primary" }} />
                        </FormLabel>
                        <FormErrorMessage>Required</FormErrorMessage>
                    </FormControl>
                    <Button colorScheme="blue" onClick={onSubmit} isLoading={isLoading}  _hover={{ bg: "app.primary", color: "white" }} borderRadius="md" boxShadow="md"> Submit</Button>
                </VStack>
            </Box>
        </Box >
    )
}
export default Contact;