import {
  chakra,
  Box,
  Button,
  Stack,
  Image,
  Text,
  Icon,
  useColorModeValue,
  useColorMode,
  SlideFade
} from "@chakra-ui/react";
import { getCloudinaryImage, getCloudinaryImageBlur } from '../../components/utils/cloudinaryImageRetreival';

import React, { useRef } from "react";
import { useInView } from "framer-motion";
import NextLink from 'next/link'

export default function App(){

  const ref = useRef(null)
  const isInView = useInView(ref)
  return (
    <Box px={8} py={24} mx="auto">
      <Box
        w={{ base: "full", md: 11 / 12, xl: 9 / 12 }}
        mx="auto"
        textAlign={{ base: "center", md: "center" }}
      >
        <chakra.h1
          mb={6}
          fontSize={{ base: "5xl", md: "8xl" }}
          fontWeight="bold"
          lineHeight="none"
          letterSpacing={{ base: "normal", md: "tight" }}
          color="gray.900"
          _dark={{ color: "gray.100" }}
        >
          Brand Design for {" "}
          <Text
            display={{ base: "block", lg: "inline" }}
            w="full"
            bgClip="text"
            bgGradient="linear(to-r, green.400,purple.500)"
            fontWeight="extrabold"
          >
            Maximizing Business Potential
          </Text>{" "}
           
        </chakra.h1>
        <chakra.p
          px={{ base: 0, lg: 24 }}
          mb={6}
          fontSize={{ base: "lg", md: "xl" }}
          color="gray.700"
          textAlign="left"
          _dark={{ color: "gray.100" }}
        >
          We craft profitable websites for SMEs and Start-Ups aiming to unleash business potential.
	        With both Design and Performance perfectly balanced,
          we aim to Fuel Business Growth through Professional Website Development.

        </chakra.p>
        <Stack
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 4, md: 8 }}
          spacing={2}
          justifyContent={{ sm: "left", md: "center" }}
        >
          <NextLink href="/pricing/our-prices" passHref>
          <Button
            as="a"
            colorScheme="whiteAlpha"
            textColor={useColorModeValue('gray.600', 'gray.200')}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
            shadow={'xl'}
          >
            See our Pricing
            <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </Icon>
          </Button>
          </NextLink>
          <NextLink href="/info/contact-enquiry" passHref>
          <Button
            as="a"
            colorScheme="whiteAlpha"
            textColor={useColorModeValue('gray.600', 'gray.200')}
            display="inline-flex"
            alignItems="center"
            justifyContent="center"
            w={{ base: "full", sm: "auto" }}
            mb={{ base: 2, sm: 0 }}
            size="lg"
            cursor="pointer"
            shadow={'lg'}
          >
            Get in Contact
            <Icon boxSize={4} ml={1} viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M6.672 1.911a1 1 0 10-1.932.518l.259.966a1 1 0 001.932-.518l-.26-.966zM2.429 4.74a1 1 0 10-.517 1.932l.966.259a1 1 0 00.517-1.932l-.966-.26zm8.814-.569a1 1 0 00-1.415-1.414l-.707.707a1 1 0 101.415 1.415l.707-.708zm-7.071 7.072l.707-.707A1 1 0 003.465 9.12l-.708.707a1 1 0 001.415 1.415zm3.2-5.171a1 1 0 00-1.3 1.3l4 10a1 1 0 001.823.075l1.38-2.759 3.018 3.02a1 1 0 001.414-1.415l-3.019-3.02 2.76-1.379a1 1 0 00-.076-1.822l-10-4z"
                clipRule="evenodd"
              />
            </Icon>
          </Button>
          </NextLink>

        </Stack>
      </Box>


      <Box
        w={{ base: "full", md: 10 / 12 }}
        mx="auto"
        mt={20}
        textAlign="center"
      >

        <Image
                    // w="full"
                    rounded="lg"
                    shadow="2xl"
                    src={getCloudinaryImage('afropoceneScreenshot_qwd27h.jpg')} 
                    alt="Hellonext feedback boards software screenshot"
                    // width={3675/2.5}
                    // height= {2001/2.5}
                    placeholder="blur"
                    blurDataURL={getCloudinaryImageBlur('afropoceneScreenshot_qwd27h.jpg')}
                    ref={ref}

        />  
      </Box>


    </Box>
  );
};

