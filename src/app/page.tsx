'use client';
import { Box, Button, Flex, Heading, Image, Text, VStack } from '@chakra-ui/react';
import React from 'react'
import Link from 'next/link';
import { PAGES } from '@/app-config';

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
      <Heading justifySelf='center' color="app.primary" mt='10'>Why Choose Us?</Heading>
      <Flex justify="space-between" align="center" wrap="wrap">
        <Box px="10" flex="1" minWidth="300px">
          <Text fontSize="xl" color="gray.700">Choose Kangaroo Care AI for innovative, AI-powered infant care solutions designed with precision and compassion. Our advanced incubators prioritize infant safety, warmth, and health, integrating cutting-edge technology to support healthcare professionals and parents alike. Witha commitment to excellence, reliability, and superior outcomes, we empower neonatal care teams to provide the best start for every newborn.Trust us for pioneering solutions that blend technology with heartfelt care.</Text>
        </Box>

        <Flex gap='4' justify='space-between'>
          <Box border='4px solid gray' borderRadius='20px' width='150px' height='150px' transform="rotate(45deg)" ></Box>
          <Image src='/assests/home/star.png' alt='star-image' w='40' />
        </Flex>
        <Box px="10" flex="1" minWidth="280px" mb='20' mt='20'>
          <Image src="/assests/home/products-img.png" alt="products-image" width='360px' />
        </Box>
      </Flex>
      <Box position='relative'>
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
            <Box fontSize='8xl'>95+</Box>
            <Heading fontSize='xl' mt='-7'>SATISFICATION</Heading>
          </VStack>
        </Flex>
      </Box>
    </Box >
  )
}
export default Page;