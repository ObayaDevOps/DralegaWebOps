import { Heading, Box, Container, VStack, SimpleGrid, Center, Button, AspectRatio, useColorModeValue, ButtonGroup} from '@chakra-ui/react'
import dynamic from 'next/dynamic'
import LandingPageSplitWithImage from '../landingPageSections/feature'
import acunye from '../../public/images/visting-artists/acunye/Afropocene-Studio-BTS60.jpg'


const DynamicTypeWriterWithNoSSR = dynamic(
    () => import('../utils/typewriter'),
    { ssr: false }
  )


export default function LandingPage() {


  return (
    <Box>

    <SimpleGrid
    columns={1}
    spacing={{ base: 8, md: 10 }}
    // py={{ base: 0, md: 0, lg:0 }}
    >

      {/* backgroundImage={'../../../images/visting-artists/acunye/Afropocene-Studio-Acunye-darkened.jpg'}
      Mandelbrot-small.jpg
      recursiveperlinnoise2.png
              <Box minHeight='100vh'  bgPosition="left"  backgroundImage={'../../../images/backgrounds/recursivePerlinNoise.png'}
        <Box minHeight='100vh' bgRepeat="no-repeat" bgSize="100%" bgPosition="fixed"  width="100%" height="auto" backgroundImage={'../../../images/backgrounds/MandelbrotLarge.jpg'}>
        <Box minHeight='100vh' bgSize="cover" bgPosition="center" bgAttachment="fixed" filter="brightness(60%)" backgroundImage={{base: '../../../images/backgrounds/MandelbrotMedium.jpg', lg:'../../../images/backgrounds/MandelbrotLarge.jpg' }}>

      */}
        {/* <Box minHeight='100vh' bgSize="cover" bgPosition="center" bgAttachment="fixed" backgroundImage={{base: '../../../images/backgrounds/MandelbrotMediumDark.jpg', lg:'../../../images/backgrounds/MandelbrotLargeDark.jpg' }}> */}
        <Box minHeight='100vh' bgSize="cover" bgPosition="center" bgAttachment="fixed" >
 

            <Center p={{sm:1 , md:10}} >
                <Heading
                 as='h1'
                 size='6xl'
                 fontSize = '6xl'
                textAlign="center"
                 sx={{
                  background: "linear-gradient(90deg, #62e897 20%, #129b3c 70.35%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
                color="white"
                pt={{base: 10, md: 20}}
                // pb={{base: 5}}
                 >
                   Med-Optics
                </Heading>
            </Center>
            <Center >
            <Heading
                 as='h3'
                 size='3xl'
                 fontSize = '3xl'
                textAlign="center"
                 sx={{
                  background: "linear-gradient(90deg, #62e897 20%, #129b3c 70.35%)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent"
                }}
                color="white"
                // pt={{base: 10, md: 20}}
                pb={{base: 5}}
                 >
                   Cherish The Gift of Sight
                </Heading>
            </Center>

            {/* Scrolling Text */}
            {/* <Container maxW='md' centerContent     zIndex={1}
>
                <DynamicTypeWriterWithNoSSR/>
            </Container> */}

            <Container maxW='md' centerContent     zIndex={1} pt={{base: 10}}>
            <ButtonGroup  spacing='6'> 

              <Button
                colorScheme='green'
                color={useColorModeValue('green.50', 'green.900')}
                sx={{
                  background: "linear-gradient(90deg, #62e897 20%, #129b3c 70.35%)",
                  // WebkitBackgroundClip: "text",
                  // WebkitTextFillColor: "transparent"
                }}
              >
                Book an Eye Test</Button>

                <Button
                colorScheme='green'
                color={useColorModeValue('green.50', 'green.900')}
                sx={{
                  background: "linear-gradient(90deg, #62e897 20%, #129b3c 70.35%)",
                  // WebkitBackgroundClip: "text",
                  // WebkitTextFillColor: "transparent"
                }}
              >
                Find A Treatment Center</Button>
                </ButtonGroup>
            </Container>

        </Box>

      <Center p={{sm:1 , md:10}} flex='1'>
        <Heading
          as='h1'
          size='4xl'
          sx={{
            background: "linear-gradient(90deg, #62e897 20%, #129b3c 70.35%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent"
          }}
          paddingBottom='1em'
          >
            What We Do
          </Heading>
      </Center>

        <LandingPageSplitWithImage />

      </SimpleGrid>
      </Box>
  )
}
