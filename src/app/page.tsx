'use client';
import { Box, Button, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import Link from 'next/link';
import { PAGES } from '@/app-config';
import { SlStar } from 'react-icons/sl';

function Page() {
  return (
    <Box>
      <Box py={{ lg: '40', xl: '52' }} bgImg={`url("/assests/home/cover-img.png")`} bgSize='cover' bgPos='bottom' aria-label='cover-section' >
        <Box maxW='1280px' mx='auto'>
          <Box maxW='690px' pl='5' >
            <Heading mb='5' fontSize='5xl' as='h1' fontFamily='jua' color='app.primary' >Innovating Neonatal Care with AI-Powered Incubators</Heading>
            <Text mb='14' textAlign={'left'} fontSize='2xl' color='app.grey3' >At Kangaroo Care AI, we blend advanced technology with compassionate design to ensure the best start for every newborn.</Text>
            <Button colorScheme='blue' w='fit-content' as={Link} href={PAGES.Products.path} >
              Explore Our Products
            </Button>
          </Box>
        </Box>
      </Box>

      <Box aria-label="Why-Choose-Us-Section" pos="relative" mt='4'>
        <Heading justifySelf="center" color="app.primary"> Why Choose Us? </Heading>

        <Flex pos="relative" justify="space-between" align="center">
          <Box px="10" flex="1" minWidth="320px">
            <Text fontSize="xl" color="gray.700">Choose Kangaroo Care AI for innovative, AI-powered infant care solutions designed with precision and compassion. Our advanced incubators prioritize infant safety, warmth, and health, integrating cutting-edge technology to support healthcare professionals and parents alike. With a commitment to excellence, reliability, and superior outcomes, we empower neonatal care teams to provide the best start for every newborn. Trust us for pioneering solutions that blend technology with heartfelt care.</Text>
          </Box>
          <Box flex="1" minWidth="320px" mb='10' px='10'>
            <Image src="/assests/home/product-img.png" alt="products-image" w="full" h="full" />
          </Box>
          <Box pos="absolute" zIndex="-1" right='0' left='0' bottom='0' top='0' color="gray.200">
            <Box pos="absolute" transform="rotate(64deg)" right='1' bottom='-20'>
              <SlStar size="64%" />
            </Box>
            <Box pos="absolute" zIndex="-1" left='-4' top='0' transform="rotate(90deg)">
              <SlStar size="64%" />
            </Box>
            <Box pos="absolute" zIndex="-1" left='46%' top='38%'>
              <Box border='10px solid' borderRadius='40px' w='140px' h='140px' transform="rotate(45deg)" />
            </Box>
          </Box>
        </Flex>
      </Box >

      <Box position='relative' mb='24'>
        <Image src='/assests/home/team-img.png' alt='employee_group' objectFit="cover" width="100%" height="100%" />
        <Flex px="5" py="10" justify="space-between" align="center" fontWeight="bold" color="white" position="absolute" top="0" left="0" width="100%" height="100%">
          <VStack pl='8' >
            <Box fontSize='8xl'>100+</Box>
            <Heading fontSize='lg' mt='-7'> UNIT SOLD </Heading>
          </VStack>
          <VStack flex='8'>
            <Box fontSize='8xl'>50+ </Box>
            <Heading fontSize='xl' mt='-7'> CLIENTS</Heading>
          </VStack>
          <VStack flex='1' pr='6'>
            <Box fontSize='8xl'>95%</Box>
            <Heading fontSize='xl' mt='-7'>SATISFACTION</Heading>
          </VStack>
        </Flex>
      </Box>
    </Box >
  )
}
export default Page;