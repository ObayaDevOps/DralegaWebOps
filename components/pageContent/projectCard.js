'use client'

import Image from 'next/image'
import {
  Box,
  Center,
  Heading,
  Text,
  VStack,
  Stack,
  Container,
  Avatar,
  useColorModeValue,
  useColorMode,
  ScaleFade
} from '@chakra-ui/react'

import NextLink from 'next/link'

import React, { useRef } from "react";
import { useInView } from "framer-motion";
  
import { getCloudinaryImage, getCloudinaryImageBlur } from '../../components/utils/cloudinaryImageRetreival';


//put this in a carousel
export default function blogPostWithImage() {
  const scaleFactor = 0.9;

  const { colorMode } = useColorMode()

  const ref1 = useRef(null)
  const isInView1 = useInView(ref1)

  const ref2 = useRef(null)
  const isInView2 = useInView(ref2)

  const ref3 = useRef(null)
  const isInView3 = useInView(ref3)

  const ref4 = useRef(null)
  const isInView4 = useInView(ref4)

  const ref5 = useRef(null)
  const isInView5 = useInView(ref5)

  const ref6 = useRef(null)
  const isInView6 = useInView(ref6)

  const ref7 = useRef(null)
  const isInView7 = useInView(ref7)

  const ref8 = useRef(null)
  const isInView8 = useInView(ref8)

  return (
    
    <Box p={4}>

<ScaleFade initialScale={0.6}
    in={isInView1}>

      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}pt={{md:40}}     ref={ref1}
 >
      {colorMode === 'light' && (
        <Heading fontSize={{base: '7xl', md:'8xl'}} bgClip="text"
            bgGradient="linear(to-r, black, whiteAlpha.100)"
            fontWeight="extrabold">
              Our Work
        </Heading>)}

      {colorMode === 'dark' && (
        <Heading fontSize={{base: '7xl', md:'8xl'}} bgClip="text"
            bgGradient="linear(to-r, white, whiteAlpha.500)"
            fontWeight="extrabold">
              Our Work
        </Heading>)}


        <Text color={useColorModeValue('gray.600', 'gray.200')}   fontSize={'xl'} p={5}>
          Past Clients that we have been happy to work with
        </Text>
      </Stack>
      </ScaleFade>

    
    <Center>
      <VStack padding={{md:15}} spacing={12}>

      <ScaleFade initialScale={scaleFactor}
        in={isInView8}>

      <Box
        maxW={{base: '80vw', md: '60vw'}}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={10}
        overflow={'hidden'}
        ref={ref8}
        >

        <Box  maxW={{md:'75vw'}} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'} >
        <NextLink href='https://www.yujo.ug'>
            <Image
                        // w="full"
                        //Screenshot_from_2023-11-02_11-25-13_ufpos1




                        rounded="lg"
                        shadow="2xl"
                        src={getCloudinaryImage('yujo_screenshot_w1rgq2')} 
                        alt="Yujo Webpage screenshot"
                        width={3675/3}
                        height={2001/3} 
                        placeholder="blur"
                        blurDataURL={getCloudinaryImageBlur('yujo_screenshot_w1rgq2')}
            />  
            </NextLink>

        </Box>
        <Stack>
          <Text
            color={'blue.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            pt={7}
            // pb={5}
            letterSpacing={1.1}>
            FullStack, Branding Design
          </Text>
          <NextLink href='https://www.yujo.ug'>
            <Heading
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              Yujo Izakaya: Japanese Resturant
            </Heading>
          </NextLink>

          <Text color={useColorModeValue('gray.500', 'white')}>
            An upmarket Japanese Kitchen and Cocktail Bar, requested a clean, minimal and elegant design that minimised clicks and hosted their menus. 
          </Text>
        </Stack>
      </Box>
      </ScaleFade>  

      <ScaleFade initialScale={scaleFactor}
        in={isInView7}>

      <Box
        maxW={{base: '80vw', md: '60vw'}}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={10}
        overflow={'hidden'}
        ref={ref7}
        >

        <Box  maxW={{md:'75vw'}} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'} >
        <NextLink href='https://www.nekosero.ug/'>
            <Image
                        rounded="lg"
                        shadow="2xl"
                        src={getCloudinaryImage('nekosero_screenshot_yu7dll')} 
                        alt="Nekosero Webpage screenshot"
                        width={3675/3}
                        height={2001/3} 
                        placeholder="blur"
                        blurDataURL={getCloudinaryImageBlur('nekosero_screenshot_yu7dll')}
            />  
            </NextLink>

        </Box>
        <Stack>
          <Text
            color={'blue.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            pt={7}
            // pb={5}
            letterSpacing={1.1}>
            FullStack, Branding Design
          </Text>
          <NextLink href='https://www.nekosero.ug'>
            <Heading
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              Nekosero
            </Heading>
          </NextLink>

          <Text color={useColorModeValue('gray.500', 'white')}>
          A creative Shopping, Dining, Brewing, Fashion, and Contemporary Arts Space 
          </Text>
        </Stack>
      </Box>
      </ScaleFade> 


      <ScaleFade initialScale={scaleFactor}
        in={isInView6}>

      <Box
        maxW={{base: '80vw', md: '60vw'}}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={10}
        overflow={'hidden'}
        ref={ref6}
        >

        <Box  maxW={{md:'75vw'}} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'} >
        <NextLink href='https://www.taxedgeadvisory.co.uk/'>
            <Image
                        // w="full"
                        //Screenshot_from_2023-11-02_11-25-13_ufpos1




                        rounded="lg"
                        shadow="2xl"
                        src={getCloudinaryImage('Screenshot_from_2023-11-02_11-25-13_ufpos1.png')} 
                        alt="Hellonext feedback boards software screenshot"
                        width={3675/3}
                        height={2001/3} 
                        placeholder="blur"
                        blurDataURL={getCloudinaryImageBlur('Screenshot_from_2023-11-02_11-25-13_ufpos1.png')}
            />  
            </NextLink>

        </Box>
        <Stack>
          <Text
            color={'blue.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            pt={7}
            // pb={5}
            letterSpacing={1.1}>
            FullStack, Branding Design, SanityCMS
          </Text>
          <NextLink href='https://www.taxedgeadvisory.co.uk/'>
            <Heading
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              Tax Edge Advisory
            </Heading>
          </NextLink>

          <Text color={useColorModeValue('gray.500', 'white')}>
          Tax Edge Advisory seeks to be a leading specialist tax consultancy firm with a focus on providing expert advice on UK tax incentives to businesses, accountants, and other professional advisers.          </Text>
        </Stack>
      </Box>
      </ScaleFade>   
      
      <ScaleFade initialScale={scaleFactor}
    in={isInView2}>

      <Box
        maxW={{base: '80vw', md: '60vw'}}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={10}
        overflow={'hidden'}
        ref={ref2}
        >

        <Box  maxW={{md:'75vw'}} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'} >
        <NextLink href='https://www.medopticsltd.com/'>
            <Image
                        // w="full"
                        rounded="lg"
                        shadow="2xl"
                        src={getCloudinaryImage('Screenshot_from_2023-08-10_16-23-10_kylnck.png')} 
                        alt="Hellonext feedback boards software screenshot"
                        width={3675/3}
                        height={2001/3} 
                        placeholder="blur"
                        blurDataURL={getCloudinaryImageBlur('Screenshot_from_2023-08-10_16-23-10_kylnck.png')}
            />  
            </NextLink>

        </Box>
        <Stack>
          <Text
            color={'blue.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            pt={7}
            // pb={5}
            letterSpacing={1.1}>
            FullStack, Bookings, CMS
          </Text>
          <NextLink href='https://www.medopticsltd.com/'>
            <Heading
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              Med-Optics Vision Centre
            </Heading>
          </NextLink>

          <Text color={useColorModeValue('gray.500', 'white')}>
          A 'Top 100 Mid-Sized Companies in Uganda 2022' Winner. The User wanted a high performance website that the marketing department was able to edit the content of the website in a similar fashion to wordpress but with better SEO and google pageRank Score (95+) 
          </Text>
        </Stack>
      </Box>
      </ScaleFade>

      <ScaleFade initialScale={scaleFactor}
    in={isInView3}>
      <Box
        maxW={{base: '80vw', md: '60vw'}}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={10}
        overflow={'hidden'}
        ref={ref3}

        >
        <Box  maxW={'75vw'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'} >
        <NextLink href='https://www.afropocene.com/'>
            <Image
                        // w="full"
                        rounded="lg"
                        shadow="2xl"
                        src={getCloudinaryImage('afropoceneScreenshot_qwd27h.jpg')} 
                        alt="Hellonext feedback boards software screenshot"
                        width={3675/3}
                        height={2001/3} 
                        placeholder="blur"
                        blurDataURL={getCloudinaryImageBlur('afropoceneScreenshot_qwd27h.jpg')}
            />  
        </NextLink>
        </Box>
        <Stack>
          <Text
            color={'blue.500'}
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            pt={7}
            // pb={5}
            letterSpacing={1.1}>
            FullStack, Web3, CMS
          </Text>
          <NextLink href='https://www.afropocene.com/'>
            <Heading
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              Afropocene StudioLab
            </Heading>
          </NextLink>
          <Text color={useColorModeValue('gray.500', 'white')}>
          Afropocene StudioLab is an award winning collaborative arts and technology lab, which aims to foster and export
the next generation of influential African technology (NFTs) and art. We are a proud recipient of funding from the
United Nations Development Program in 2023.
          </Text>
        </Stack>
      </Box>
      </ScaleFade>

      <ScaleFade initialScale={scaleFactor}
    in={isInView4}>
      <Box
        maxW={{base: '80vw', md: '60vw'}}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={10}
        overflow={'hidden'}
        ref={ref4}

        >
        <Box  maxW={'75vw'} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'} >
        <NextLink href='http://humble-beeing.com/'>

            <Image
                        // w="full"
                        rounded="lg"
                        shadow="2xl"
                        src={getCloudinaryImage('Screenshot_from_2023-08-10_16-25-39_evsnsk.jpg')} 
                        alt="Hellonext feedback boards software screenshot"
                        width={3675/3}
                        height={2001/3} 
                        placeholder="blur"
                        blurDataURL={getCloudinaryImageBlur('Screenshot_from_2023-08-10_16-25-39_evsnsk.jpg')}
            />  
        </NextLink>
        </Box>
        <Stack>
          <Text
            color={'blue.500'}
            color={useColorModeValue('blue.500', 'white')}

            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            pt={7}
            // pb={5}
            letterSpacing={1.1}>
            FullStack
          </Text>
          <NextLink href='http://humble-beeing.com/'>
            <Heading
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}>
              Humble Beeing Honey
            </Heading>
          </NextLink>
          <Text color={useColorModeValue('gray.500', 'white')}>
          Humble Beeing is a proudly Ugandan Social Enterprise specialising in Beekeeping. A Website Built for Beekeeping Social Enterprise - the intention was to give the new company a polished professional look, while informing about the company mission, vision and brand image. Interactive Scroll Elements. Built and Designed in house with No templates used. Styled CSS and Interactivity by SemanticUI.
        </Text>
        </Stack>
      </Box>
      </ScaleFade>


      </VStack>
      </Center>


      </Box>
  )
}