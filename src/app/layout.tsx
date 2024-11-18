import type { Metadata } from "next";
import "../theme/globals.css";
import React from 'react'
import { Box, Text, Image, Flex, Heading, VStack } from '@chakra-ui/react'
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import RootWrapper from "@/RootWrapper";
import Link from "next/link";
import { IoLogoInstagram, IoMail } from "react-icons/io5";
import { SOCIAL_LINKS, SITE_TITLE, SITE_DESCRIPTION, CONTACT_DETAILS, DOMAIN_NAME } from "@/app-config";
import { FaPhoneAlt } from "react-icons/fa";
import { ImLocation } from "react-icons/im";
import { BsFillTelephoneFill } from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import { RiFacebookFill } from "react-icons/ri";
import { breakpoints } from "@/theme";

export const metadata: Metadata = {
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
};

export default function RootLayout({ children, }: Readonly<{ children: React.ReactNode; }>) {
  return (
    <html lang="en">
      <Flex direction='column' h='100vh' w='100%' as='body'>
        <RootWrapper>
          <Header />
          <Box flex="1 0 auto">
            {children}
          </Box>
          <Footer />
        </RootWrapper>
      </Flex>
    </html>
  );
}


function Header() {
  return (
    <Flex p="2" bgColor='app.primary' justify='space-between'>
      <Flex align='center' color='app.white' gap='20px' mt='2px'>
        <Link href={SOCIAL_LINKS.Facebook} target="_blank" ><FaFacebookF size='20' /></Link>
        <Link href={SOCIAL_LINKS.Instagram} target="_blank" ><FaInstagram size='20' /></Link>
        <Link href={SOCIAL_LINKS.LinkedIn} target="_blank" ><FaLinkedinIn size='20' /></Link>
      </Flex>
      <Flex color='app.white' gap='5' align="center" >
        <Flex align="center" gap='2'>
          <FaPhoneAlt size='19' />
          <Text >{CONTACT_DETAILS.Phone}</Text>
        </Flex>
        <Flex align="center" gap='2'>
          <IoMail size='22' />
          <Text  >{CONTACT_DETAILS.Email}</Text>
        </Flex>
      </Flex>
    </Flex>

  )
}

function Footer() {
  return (
    <Box bg="app.grey2" >
      <Flex aria-label="footer-top" maxW='1280px' mx='auto' p="10px" gap='5'  >

        <Box flex='2'>
          <Image src='/logo-2.png' alt="logo-2" maxW="300px" mb='10px' />
          <br />
          <VStack spacing='5' align='start' >
            <Flex gap='10px' >
              <ImLocation size="28" />
              <Text >{CONTACT_DETAILS.Address}</Text>
            </Flex>
            <Flex gap='10px'>
              <BsFillTelephoneFill size='25' />
              <Text >{CONTACT_DETAILS.Phone}</Text>
            </Flex>
            <Flex gap='10px'>
              <GrMail size='25' />
              <Text >{CONTACT_DETAILS.Email}</Text>
            </Flex>
          </VStack>
        </Box>

        <Box flex='1'>
          <Heading fontSize='3xl' color="app.primary" mb='4' >Quick Links</Heading>
          <Box display="flex" flexDirection="column" gap="2">
            <Text >Home</Text>
            <Text >About</Text>
            <Text >Products</Text>
            <Text >Contact Us</Text>
            <Text >Career</Text>
          </Box>
        </Box>

        <Box flex='2'>
          <Heading color="app.primary" fontSize='3xl'>Our Mission</Heading>
          <Text mb='5'>
            At Kangaroo Care AI, our mission is to revolutionize neonatal care with AI-powered incubators that prioritize warmth, safety, and bonding. We combine advanced technology with compassionate design to support healthcare professionals and families, ensuring optimal outcomes for infants in their most critical early moments.
          </Text>
          <Flex justify='start' color='app.grey3' gap='16px' >
            <RiFacebookFill size="25px" />
            <IoLogoInstagram size="25px" />
            <FaLinkedinIn size="25px" />
          </Flex>
        </Box>

      </Flex>

      <Flex aria-label="footer-bottom" p='3' justify='space-between' align='center' bgColor='app.grey3'>
        <Text color='app.white' >Copyright &copy; {new Date().getFullYear()} {DOMAIN_NAME} All Rights Reserved</Text>
        <Flex align="center" gap={2} >
          <Text color="app.white">Powered By :</Text>
          <Link href="https://syntaxfit.com/" target="_blank">
            <Image src="/syntaxfit.png" alt="creator_company_logo" />
          </Link>
        </Flex>
      </Flex>
    </Box>
  )
}

