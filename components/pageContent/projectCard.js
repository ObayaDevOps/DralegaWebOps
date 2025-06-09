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


// Add this array near the top of the file, before the component function
const projects = [
  {
    id: 8, // Using different IDs to avoid potential conflicts, though not strictly necessary here
    link: 'https://praxis-afrpcn.vercel.app/',
    imageSrc: 'afrpcn-praxis_main',
    imageAlt: 'Praxis Labs, Doen, AFRPCN Webpage screenshot',
    category: 'Design, 3D Website, Creative Coding',
    title: 'AFRPCN: World Building through Art',
    description: 'Current WIP: A creative website that showcases artists working on a World-Building Through Art Project ',
  },
  {
    id: 8, // Using different IDs to avoid potential conflicts, though not strictly necessary here
    link: 'https://www.ashtonandcarrington.co.uk/',
    imageSrc: 'ashton-carrington_main',
    imageAlt: 'Ashton & Carrington Webpage screenshot',
    category: 'FullStack, CMS',
    title: 'Ashton & Carrington: Expert Finacial and Tax Advisory',
    description: 'A professional rebrand of an existing website optimised to display large amounts of information',
  },
    {
    id: 8, // Using different IDs to avoid potential conflicts, though not strictly necessary here
    link: 'https://www.shop.yujo.ug',
    imageSrc: 'little-kobe_main',
    imageAlt: 'Little Kobe Japanese Market Webpage screenshot',
    category: 'E-commerce, FullStack, Branding Design, Payment Gateway',
    title: 'Little Kobe Japanese Market',
    description: 'A premium supplier of Japanese ingredients, wanted a custom website that felt authentically japanese with a video-game inspired theme',
  },
  {
    id: 8, // Using different IDs to avoid potential conflicts, though not strictly necessary here
    link: 'https://www.greatoutdoorsuganda.com/#/',
    imageSrc: 'great_outdoors_main',
    imageAlt: 'Great outdoors Uganda Webpage screenshot',
    category: 'FullStack, Branding Design, CMS, Booking System, Payment Gateway',
    title: 'Great Outdoors Resort',
    description: 'A luxury resort website with a booking system and online payments',
  },
  {
    id: 8, // Using different IDs to avoid potential conflicts, though not strictly necessary here
    link: 'https://www.papec.org/',
    imageSrc: 'papec_main',
    imageAlt: 'People & Potential Uganda Webpage screenshot',
    category: 'FullStack, Branding Design, CMS',
    title: 'People & Potential: Professional Educational Consultancy',
    description: 'A website for an educational consultantcy highlighting offered services',
  },
  {
    id: 8, // Using different IDs to avoid potential conflicts, though not strictly necessary here
    link: 'https://www.yujo.ug',
    imageSrc: 'yujo_screenshot_w1rgq2',
    imageAlt: 'Yujo Webpage screenshot',
    category: 'FullStack, Branding Design',
    title: 'Yujo Izakaya: Japanese Resturant',
    description: 'An upmarket Japanese Kitchen and Cocktail Bar, requested a clean, minimal and elegant design that minimised clicks and hosted their menus.',
  },
  {
    id: 7,
    link: 'https://www.nekosero.ug/',
    imageSrc: 'nekosero_main',
    imageAlt: 'Nekosero Webpage screenshot',
    category: 'FullStack, Events, CMS',
    title: 'Nekosero',
    description: 'A Creative Shopping, Dining, Brewing, Fashion, and Contemporary Arts Space that holds regular events' ,
  },
    {
    id: 6,
    link: 'https://www.taxedgeadvisory.co.uk/',
    imageSrc: 'Screenshot_from_2023-11-02_11-25-13_ufpos1.png',
    imageAlt: 'Tax Edge Advisory Webpage screenshot', // Updated alt text
    category: 'FullStack, Branding Design, SanityCMS',
    title: 'Tax Edge Advisory',
    description: 'Tax Edge Advisory seeks to be a leading specialist tax consultancy firm with a focus on providing expert advice on UK tax incentives to businesses, accountants, and other professional advisers.',
  },
    {
    id: 2,
    link: 'https://medoptics.vercel.app/',
    imageSrc: 'Screenshot_from_2023-08-10_16-23-10_kylnck.png',
    imageAlt: 'Med-Optics Vision Centre Webpage screenshot', // Updated alt text
    category: 'FullStack, Bookings, CMS',
    title: 'Med-Optics Vision Centre',
    description: "A 'Top 100 Mid-Sized Companies in Uganda 2022' Winner. The User wanted a high performance website that the marketing department was able to edit the content of the website in a similar fashion to wordpress but with better SEO and google pageRank Score (95+)",
  },
  {
    id: 3,
    link: 'https://www.afropocene.com/',
    imageSrc: 'afropoceneScreenshot_qwd27h.jpg',
    imageAlt: 'Afropocene StudioLab Webpage screenshot', // Updated alt text
    category: 'FullStack, Web3, CMS',
    title: 'Afropocene StudioLab',
    description: 'Afropocene StudioLab is an award winning collaborative arts and technology lab, which aims to foster and export the next generation of influential African technology (NFTs) and art. We are a proud recipient of funding from the United Nations Development Program in 2023.',
  },
  {
    id: 4,
    link: 'http://humble-beeing.com/',
    imageSrc: 'Screenshot_from_2023-08-10_16-25-39_evsnsk.jpg',
    imageAlt: 'Humble Beeing Honey Webpage screenshot', // Updated alt text
    category: 'FullStack',
    title: 'Humble Beeing Honey',
    description: 'Humble Beeing is a proudly Ugandan Social Enterprise specialising in Beekeeping. A Website Built for Beekeeping Social Enterprise - the intention was to give the new company a polished professional look, while informing about the company mission, vision and brand image. Interactive Scroll Elements. Built and Designed in house with No templates used. Styled CSS and Interactivity by SemanticUI.',
  },
  // Add other projects here following the same structure
];

// Create the ProjectCardItem component
function ProjectCardItem({ project }) {
  const scaleFactor = 0.9;
  const { colorMode } = useColorMode();

  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <ScaleFade initialScale={scaleFactor} in={isInView}>
      <Box
        maxW={{ base: '80vw', md: '60vw' }}
        w={'full'}
        // eslint-disable-next-line react-hooks/rules-of-hooks
        bg={useColorModeValue('white', 'gray.900')}
        boxShadow={'2xl'}
        rounded={'md'}
        p={10}
        overflow={'hidden'}
        ref={ref} // Attach ref here
      >
        <Box maxW={{ md: '75vw' }} bg={'gray.100'} mt={-6} mx={-6} mb={6} pos={'relative'}>
          <NextLink href={project.link}>
            <Image
              rounded="lg"
              shadow="2xl"
              src={getCloudinaryImage(project.imageSrc)}
              alt={project.imageAlt}
              width={3675 / 3}
              height={2001 / 3}
              placeholder="blur"
              blurDataURL={getCloudinaryImageBlur(project.imageSrc)}
            />
          </NextLink>
        </Box>
        <Stack>
          <Text
            // color={'blue.500'}
            color={useColorModeValue('blue.500', 'white')} // Use correct color mode hook
            textTransform={'uppercase'}
            fontWeight={800}
            fontSize={'sm'}
            pt={7}
            letterSpacing={1.1}
          >
            {project.category}
          </Text>
          <NextLink href={project.link}>
            <Heading
              // eslint-disable-next-line react-hooks/rules-of-hooks
              color={useColorModeValue('gray.700', 'white')}
              fontSize={'2xl'}
              fontFamily={'body'}
            >
              {project.title}
            </Heading>
          </NextLink>
          <Text color={useColorModeValue('gray.500', 'white')}>
            {project.description}
          </Text>
        </Stack>
      </Box>
    </ScaleFade>
  );
}

//put this in a carousel
export default function blogPostWithImage() {
  const scaleFactor = 0.9;

  const { colorMode } = useColorMode()

  const ref1 = useRef(null)
  const isInView1 = useInView(ref1)

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
        {/* Map over the projects array to render ProjectCardItem components */}
        {projects.map(project => (
          <ProjectCardItem key={project.id} project={project} />
        ))}
      </VStack>
      </Center>


      </Box>
  )
}