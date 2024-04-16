import React from "react";
import {
  chakra,
  Box,
  Flex,
  useColorModeValue,
  Text,
  useToken,
  Stack,
  SimpleGrid,
  Icon,
  Link,
  useColorMode,
  Heading,
  Badge,
} from "@chakra-ui/react";

import Head from 'next/head'

export default function App(){
  const topBg = useColorModeValue("gray.800", "gray.700");
  const bottomBg = useColorModeValue("gray.800", "gray.800");
  const [bottomBgHex] = useToken("colors", [bottomBg]);

  const { colorMode } = useColorMode()


  const Feature = (props) => {
    return (
      <Flex align="center">

        <Head>
        <title>Our Prices | Dralega Web Operations Ltd</title>
        <meta name="description" content="Dralega Web Operations Ltd Webpage" />
        <link rel="shortcut icon" href="../../../images/icon/DWOLogo.png"></link>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link href="https://fonts.googleapis.com/css2?family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap" 
        rel="stylesheet" />
        </Head>


        <Flex shrink={0}>
          <Icon
            boxSize={5}
            mt={1}
            mr={2}
            color="gray.500"
            _dark={{ color: "gray.300" }}
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
              clipRule="evenodd"
            ></path>
          </Icon>
        </Flex>
        <Box ml={4}>
          <chakra.span mt={2} color="gray.700" _dark={{ color: "gray.400" }}>
            {props.children}
          </chakra.span>
        </Box>
      </Flex>
    );
  };
  return (
    <Flex
      boxSize="full"
      bg="#F9FAFB"
      _dark={{ bg: "gray.600" }}
      p={{base: 2,md:5}}
      alignItems="center"
      justifyContent="center"
    >
      <Box
        mx="auto"
        textAlign={{ base: "left", md: "center" }}
        rounded="md"
        shadow="base"
        w="full"
        bg={bottomBg}
      >
        <Box pt={10} rounded="md" bg={topBg}>
          <Box w="full" px={[10, , 4]} mx="auto">

        <Heading fontSize={{base: '5xl', md:'8xl'}} bgClip="text"
            bgGradient="linear(to-r, white, whiteAlpha.800)"
            fontWeight="extrabold">
              Our Pricing
        </Heading>

            <Text
              mb={2}
              fontSize={["2xl", , "5xl"]}
              fontWeight="bold"
              lineHeight="tight"
              color="white"
            >
              The right price for you, whatever stage of business
            </Text>
            <chakra.p mb={6} fontSize={["lg", , "xl"]} color="gray.400">
              Our plans scale for any organization—from startups to Fortune
              500s.
            </chakra.p>
          </Box>
          <Box
            bg={`linear-gradient(180deg, transparent 70%, ${bottomBgHex} 30%)`}
          >
            <SimpleGrid
              columns={[1, , , 2]}
              gap="24px"
              rounded="md"
              mx={[10, , 24]}
              textAlign="left"
            >
              <Box
                bg="white"
                _dark={{ bg: "gray.800" }}
                pt={10}
                shadow="lg"
                rounded="md"
              >
                <Flex direction="column">
                  <Box px={10} pb={5}>
                    <Badge
                      mb={1}
                      fontSize="xs"
                      letterSpacing="wide"
                      colorScheme="gray"
                      fontWeight="medium"
                      rounded="full"
                      px={4}
                      py={1}
                    >
                      Basic
                    </Badge>
                    <Text
                      mb={2}
                      fontSize="5xl"
                      fontWeight={["bold", "extrabold"]}
                      color="gray.900"
                      _dark={{ color: "gray.50" }}
                      lineHeight="tight"
                    >
                      $645+
                      <chakra.span
                        fontSize="2xl"
                        fontWeight="medium"
                        color="gray.600"
                        _dark={{ color: "gray.100" }}
                      >
                        {" "}
                        {/* /mo{" "} */}
                      </chakra.span>
                    </Text>
                    <chakra.p
                      mb={6}
                      fontSize="md"
                      color="gray.500"
                      _dark={{ color: "gray.100" }}
                    >
                      Just starting your business but need a professional web presence? This is the package for you!
                    </chakra.p>
                  </Box>
                  <Flex
                    px={10}
                    pt={5}
                    pb={10}
                    direction="column"
                    bg="gray.50"
                    _dark={{ bg: "gray.900" }}
                    roundedBottom="md"
                  >
                    <Stack mb={5} spacing={4} >
                      <Feature>4-Page Website: Landing Page, About Us, Products and Services, Contact Us </Feature>
                      <Feature>Sanity CMS - Update your website yourself</Feature>
                      <Feature>Market Leading SEO and Visitor Analytics</Feature>
                      <Feature>Free Web Hosting !</Feature>
                      <Feature>Mobile Friendly Design - Optimised for Ugandan Internet</Feature>
                      <Feature>Built with Next.Js</Feature>
                    </Stack>
                    {/* <Link
                      w="full"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      px={5}
                      py={3}
                      border="solid transparent"
                      fontWeight="semibold"
                      rounded="md"
                      shadow="md"
                      _light={{ color: "white" }}
                      bg="gray.800"
                      _dark={{ bg: "gray.500" }}
                      _hover={{
                        bg: "gray.700",
                        _dark: { bg: "gray.600" },
                      }}
                    >
                      Get started
                    </Link> */}
                  </Flex>
                </Flex>
              </Box>


              
              <Box
                bg="white"
                _dark={{ bg: "gray.800" }}
                pt={10}
                shadow="lg"
                rounded="md"
              >
                <Flex direction="column">
                  <Box px={10} pb={5}>
                    <Badge
                      mb={1}
                      fontSize="xs"
                      letterSpacing="wide"
                      colorScheme="gray"
                      fontWeight="medium"
                      rounded="full"
                      px={4}
                      py={1}
                    >
                      Standard
                    </Badge>
                    <Text
                      mb={2}
                      fontSize="5xl"
                      fontWeight={["bold", "extrabold"]}
                      color="gray.900"
                      _dark={{ color: "gray.50" }}
                      lineHeight="tight"
                    >
                      $950+
                      <chakra.span
                        fontSize="2xl"
                        fontWeight="medium"
                        color="gray.600"
                        _dark={{ color: "gray.100" }}
                      >
                        {" "}
                        {/* /9{" "} */}
                      </chakra.span>
                    </Text>
                    <chakra.p
                      mb={6}
                      fontSize="md"
                      color="gray.500"
                      _dark={{ color: "gray.100" }}
                    >
                      Start attracting customers to interact with your site and take data from them to inform your business decisions. Perfect for Hotels, Restaurants and SMEs.
                    </chakra.p>
                  </Box>
                  <Flex
                    px={10}
                    pt={5}
                    pb={10}
                    direction="column"
                    bg="gray.50"
                    _dark={{ bg: "gray.900" }}
                    roundedBottom="md"
                  >
                    <Stack mb={5} spacing={4}>
                      <Feature>6-Page Website: Landing Page, About Us, Products and Services, Contact Us, Bookings Calendar, FAQs, Blog </Feature>
                      <Feature>Sanity CMS: Update Website Content Yourself</Feature>
                      <Feature>A.I Chatbots</Feature>
                      <Feature>Light/Dark Mode</Feature>
                      <Feature>Bookings Calendar</Feature>
                      <Feature>Market Leading SEO and Visitor Analytics</Feature>
                      <Feature>Built with Next.Js</Feature>
                    </Stack>
                    {/* <Link
                      w="full"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      px={5}
                      py={3}
                      border="solid transparent"
                      fontWeight="semibold"
                      rounded="md"
                      shadow="md"
                      _light={{ color: "white" }}
                      bg="gray.800"
                      _dark={{ bg: "gray.500" }}
                      _hover={{
                        bg: "gray.700",
                        _dark: { bg: "gray.600" },
                      }}
                    >
                      Get started
                    </Link> */}
                  </Flex>
                </Flex>
              </Box>




              <Box
                bg="white"
                _dark={{ bg: "gray.800" }}
                pt={10}
                shadow="lg"
                rounded="md"
              >
                <Flex direction="column">
                  <Box px={10} pb={5}>
                    <Badge
                      mb={1}
                      fontSize="xs"
                      letterSpacing="wide"
                      colorScheme="gray"
                      fontWeight="medium"
                      rounded="full"
                      px={4}
                      py={1}
                    >
                      E-Commerce
                    </Badge>
                    <Text
                      mb={2}
                      fontSize="5xl"
                      fontWeight={["bold", "extrabold"]}
                      color="gray.900"
                      _dark={{ color: "gray.50" }}
                      lineHeight="tight"
                    >
                      $1350+
                      <chakra.span
                        fontSize="2xl"
                        fontWeight="medium"
                        color="gray.600"
                        _dark={{ color: "gray.100" }}
                      >
                        {" "}
                        {/* /starting from{" "} */}
                      </chakra.span>
                    </Text>
                    <chakra.p
                      mb={6}
                      fontSize="md"
                      color="gray.500"
                      _dark={{ color: "gray.100" }}
                    >
                      The World is your Oyster. Expand your business globally!
                      Take online payments, inform users on your product offerings with a high performance storefront.
                    </chakra.p>
                  </Box>
                  <Flex
                    px={10}
                    pt={5}
                    pb={10}
                    direction="column"
                    bg="gray.50"
                    _dark={{ bg: "gray.900" }}
                    roundedBottom="md"
                  >
                    <Stack mb={5} spacing={4}>
                    <Feature>6-Page Mobile-Friendly Website</Feature>
                      <Feature>MedusaJS: Open-Source Building blocks for digital commerce</Feature>
                      <Feature>Shopify: The global commerce platform</Feature>
                      <Feature>Sanity CMS: Update Website Content Yourself</Feature>
                      <Feature>Bookings Calendar</Feature>
                      <Feature>SEO Optimisation</Feature>
                      <Feature>User Analytics</Feature>
                      <Feature>Built with Next.Js</Feature>
                    </Stack>
                    {/* <Link
                      w="full"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      px={5}
                      py={3}
                      border="solid transparent"
                      fontWeight="semibold"
                      rounded="md"
                      shadow="md"
                      _light={{ color: "white" }}
                      bg="gray.800"
                      _dark={{ bg: "gray.500" }}
                      _hover={{
                        bg: "gray.700",
                        _dark: { bg: "gray.600" },
                      }}
                    >
                      Get started
                    </Link> */}
                  </Flex>
                </Flex>
              </Box>




              <Box
                bg="white"
                _dark={{ bg: "gray.800" }}
                pt={10}
                shadow="lg"
                rounded="md"
              >
                <Flex direction="column">
                  <Box px={10} pb={5}>
                    <Badge
                      mb={1}
                      fontSize="xs"
                      letterSpacing="wide"
                      colorScheme="gray"
                      fontWeight="medium"
                      rounded="full"
                      px={4}
                      py={1}
                    >
                      Custom
                    </Badge>
                    <Text
                      mb={2}
                      fontSize="5xl"
                      fontWeight={["bold", "extrabold"]}
                      color="gray.900"
                      _dark={{ color: "gray.50" }}
                      lineHeight="tight"
                    >
                      $2500+
                      <chakra.span
                        fontSize="2xl"
                        fontWeight="medium"
                        color="gray.600"
                        _dark={{ color: "gray.100" }}
                      >
                        {" "}
                        {/* /starting from{" "} */}
                      </chakra.span>
                    </Text>
                    <chakra.p
                      mb={6}
                      fontSize="md"
                      color="gray.500"
                      _dark={{ color: "gray.200" }}
                    >
                      Need a web3 or Cryptocurrency project built? Setting up IoT ? Integrate with your existing custom solution into modern web practices ?
                    </chakra.p>
                  </Box>
                  <Flex
                    px={10}
                    pt={5}
                    pb={10}
                    direction="column"
                    bg="gray.50"
                    _dark={{ bg: "gray.900" }}
                    roundedBottom="md"
                  >
                    <Stack mb={5} spacing={4}>
                      <Feature>Cryptocurrency and Web3 Projects</Feature>
                      <Feature>Custom components</Feature>
                      <Feature>Deploy on-premises</Feature>
                      <Feature>Identity management</Feature>
                    </Stack>
                    {/* <Link
                      w="full"
                      display="inline-flex"
                      alignItems="center"
                      justifyContent="center"
                      px={5}
                      py={3}
                      border="solid transparent"
                      fontWeight="semibold"
                      rounded="md"
                      shadow="md"
                      _light={{ color: "white" }}
                      bg="gray.800"
                      _dark={{ bg: "gray.500" }}
                      _hover={{
                        bg: "gray.700",
                        _dark: { bg: "gray.600" },
                      }}
                    >
                      Get started
                    </Link> */}
                  </Flex>
                </Flex>
              </Box>





            </SimpleGrid>



            <Flex
              mb="100px"
              mx={[10, , 24]}
              p={10}
              mt={5}
              rounded="md"
              bg="#F9FAFB"
              _dark={{ bg: "gray.700" }}
              align="center"
              direction={["column", , "row"]}
            >
              <Stack flex="0.8" pr={10}>
                <Badge
                  mb={1}
                  fontSize="xs"
                  letterSpacing="wide"
                  colorScheme="gray"
                  fontWeight="medium"
                  rounded="full"
                  px={4}
                  py={1}
                  w="fit-content"
                >
                  Discounted
                </Badge>
                <Text textAlign="left">
                  We offer <chakra.span fontWeight="bold">50%</chakra.span> off
                  of for all students and universities. Please get in touch with
                  us and provide proof of your status.
                </Text>
              </Stack>
              <Link
                w={["full", , "auto"]}
                display="inline-flex"
                alignItems="center"
                justifyContent="center"
                px={5}
                py={3}
                mt={[5, , 0]}
                border="solid transparent"
                fontWeight="semibold"
                rounded="md"
                shadow="md"
                h="fit-content"
                color="gray.600"
                _dark={{ color: "white" }}
                bg="white"
                _hover={{
                  bg: "gray.50",
                  _dark: { bg: "gray.900" },
                }}
                flex="0.2"
              >
                Get Discount
              </Link>
            </Flex>
          </Box>
        </Box>
      </Box>
    </Flex>
  );
};

