import {
    Box,
    VStack,
    Button,
    Flex,
    Divider,
    chakra,
    Grid,
    GridItem,
    Container,
    useColorModeValue,
    Text,
    ScaleFade
  } from '@chakra-ui/react';
  import {} from '@chakra-ui/react';
  
  import Image from 'next/image';
  import { getCloudinaryImage, getCloudinaryImageBlur } from '../../components/utils/cloudinaryImageRetreival';
  
import React, { useRef } from "react";
import { useInView } from "framer-motion";
  
  
  const Feature = ({ heading, text1, text2, photo }) => {
    const ref = useRef(null)
    const isInView = useInView(ref)
    return (
      <ScaleFade initialScale={0.6}
      in={isInView}>
      <GridItem 
        ref={ref}
      >
        <Box border="3px" borderColor="gray.200">
        <Image
              w="full"
              rounded="lg"
              shadow="2xl"
              src={getCloudinaryImage(photo)} 
              alt="Our Services offered"
              width={500}
              height={600} 
              placeholder="blur"
              blurDataURL={getCloudinaryImageBlur(photo)}
            />
        <chakra.h3 fontSize="xl" fontWeight="600">
          {heading}
        </chakra.h3>
        <chakra.p>{text1}</chakra.p>
        <chakra.p>{text2}</chakra.p>

        </Box>
      </GridItem>
      </ScaleFade>
    );
  };
  
  export default function GridListWithDescription() {
    return (
      <Box as={Container} maxW="6xl" mt={14} p={4} minHeight={'100vh'}>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(2, 1fr)',
          }}
          gap={4}>
          <GridItem colSpan={1}>
            <VStack alignItems="flex-start" spacing="20px">
            <Text
              textTransform={'uppercase'}
              color={'green.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('green.50', 'green.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              What We Offer
            </Text>
              <chakra.h2 
              fontSize="6xl" 
              fontWeight="700"
              bgClip="text"
              bgGradient='linear(to-r, green.600, green.300)'
              fontWeight="extrabold"
              
              >
                Our Service Scope
              </chakra.h2>
            </VStack>
          </GridItem>
        </Grid>
        <Grid
          templateColumns={{
            base: 'repeat(1, 1fr)',
            sm: 'repeat(3, 1fr)',
            md: 'repeat(3, 1fr)',
          }}
          gap={{ base: '8', sm: '12', md: '16' }}>
          <Feature
            heading={'Computerized Eye Examination'}
            text1={'Experience clear vision with our comprehensive eye exams and personalized eyewear solutions. '}
            text2={'Our state-of-the-art equipment, combined with the expertise of our highly trained eye care professionals ensures accurate diagnoses and effective treatments, and allows us to provide the highest level of care to our patients'}
            photo={'EyeTest1.jpg'}
          />
          <Feature
            heading={'Made-to-Measure Lenses'}
            text1={'For a full vision performance, an excellent lens alone is not enough. It cannot be perfect if it has not been fitted to each individual wearer. '}
            text2={'Visit Med Optic’s Optical shops across the country and enjoy service tailored to your needs - from precise eye measurement to perfect lens fitting.'}
            photo={'EyeTest2.jpg'}
          />
          <Feature
            heading={'Lifelong Aftercare'}
            text1={'All completed repairs and adjustments undergo rigorous quality control checks and the parts and labour is free for all glass frames.'}
            text2={'The After Sales team supports our clients that have purchased products (eye glasses, contact lenses) made or marketed by Med Optics, from managing returns to warranty policies for eyewear collections, and corrective lenses.'}
            photo={'EyeTest3.jpg'}
          />
        </Grid>
      </Box>
    );
  }