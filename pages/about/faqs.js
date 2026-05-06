import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Box,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  Tab,
  Tabs,
  TabList,
  TabPanel,
  TabPanels,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react';


import { SettingsIcon, InfoIcon, SearchIcon } from '@chakra-ui/icons';
import { ReactElement } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { getCloudinaryImage, getCloudinaryImageBlur } from '../../components/utils/cloudinaryImageRetreival';


const AccordionDropperServices = () => {
  return (
  <Accordion>
    <AccordionItem>
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
            How much is a Consultation ?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      Consultation fee is 20,000 UGX, however if you want to take your 
      prescription away from the practice we charge 50,000 UGX.
      </AccordionPanel>
    </AccordionItem>
  
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            How long is a Consultation ?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      A normal consultation will not exceed 20 mins,
       however more complicated eye defects which require more investigation may lengthen the  examination time to 30 mins.
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            How long will it take me to get my glasses ?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      If you are ordering lenses we have in stock your glasses can be ready same day if ordered before 11am.
       Overseas orders can take up to 2 weeks.
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            How Do I order an outreach ?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      Please send an email to info@medopticsltd.com detailing the proposed date,
       venue and expected number of people.
      </AccordionPanel>
    </AccordionItem>
  </Accordion>);
}



const AccordionDropperEducation = () => {
  return (
  <Accordion>
    <AccordionItem>
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
            What's the difference between an Optometrist and an Ophthalmologist
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      An Optometrist is the primary eye healthcare professional licensed to practice Optometry, which mainly involves performing eye exams and vision tests,
       prescribing and dispensing corrective lenses, detecting certain eye abnormalities, and prescribing medicines for eye diseases.

      An Ophthalmologist is a medical doctor who specializes in eye care and is licensed to practice medicine and surgery. 
      They can perform surgeries on the eye, diagnose all eye diseases in addition to prescribing and fitting eyeglasses and contact lenses.
      </AccordionPanel>
    </AccordionItem>
  
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            I can See Fine, do I need an eye test ?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      Our optometrists will check the health of both the inner and outer eye. Even if you think your vision is fine , eyes can show  early signs of 
      other diseases or conditions in the body such as diabetes or high blood pressure. So it is always worth getting them checked out  as part of a general overall health checkup.
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            How often should I get my eye test?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      If you are ordering lenses we have in stock your glasses can be ready same day if ordered before 11am.
       Overseas orders can take up to 2 weeks.
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            What does my Prescription mean?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      The three most common refractive errors are 

      Myopia – Near Sightedness
      Hyperopia –Far sightedness 
      Astigmatism – This is caused by an unevenness in the cornea which causes blurred vision at all distances 
      Presbyopia – This is simply the natural deterioration of the eye’s lens due to age. Typically it is noticeable by the time a person reaches their late 30’s as it is part of the natural ageing process.
      Prescriptions are written in units called diopters, they are measured in intervals of 0.25 steps and will either positive (+) or negative (-) 

      Sphere: If you suffer from Myopia( short sightedness) the prescription will be negative  (e.g -1.00, -1.25,-1.50), if you have hyperopia ( long sightedness)  the prescription will be positive (e.g +1.00, +1.25, +1.50). The higher the number the stronger the prescription. 

      Cylinder: If you have astigmatism, this simply denotes the amount of diopters (or degrees) between your corneas deepest and shallowest curves. 
      </AccordionPanel>
    </AccordionItem>
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            Can I use my glasses prescription to buy contact lenses?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      No the reason you will need two different prescriptions for spectacles and contact lenses is because of the way each works with the eye. Contact lenses are in contact with the eye and spectacles sit further away,
       the prescription may be different because of the way your eye focuses through each lens.
      </AccordionPanel>
    </AccordionItem>
  </Accordion>);
}




const AccordionDropperBuying = () => {
  return (
  <Accordion>
    <AccordionItem>
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
            What forms of payment does MedOptics accept?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      You can pay by Cash, Visa card, Mtn Momo pay or Airtel Money.
      </AccordionPanel>
    </AccordionItem>
  
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            How do I pay by card or mobile money?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      At the checkout page select the Pesapal payment option and follow the instructions.
</AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            How do I check the status of an order?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      Please send your inquiry on whatsapp  +256706131219 with your name and order number.
      </AccordionPanel>
    </AccordionItem>
  </Accordion>);
}



const AccordionDropperDeliveryAndReturns = () => {
  return (
  <Accordion>
    <AccordionItem>
      <h2>
        <AccordionButton >
          <Box flex='1' textAlign='left' >
            How much is a Consultation ?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      Consultation fee is 20,000 UGX, however if you want to take your 
      prescription away from the practice we charge 50,000 UGX.
      </AccordionPanel>
    </AccordionItem>
  
    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            How long is a Consultation ?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      A normal consultation will not exceed 20 mins,
       however more complicated eye defects which require more investigation may lengthen the  examination time to 30 mins.
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            How long will it take me to get my glasses ?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      If you are ordering lenses we have in stock your glasses can be ready same day if ordered before 11am.
       Overseas orders can take up to 2 weeks.
      </AccordionPanel>
    </AccordionItem>

    <AccordionItem>
      <h2>
        <AccordionButton>
          <Box flex='1' textAlign='left'>
            How Do I order an outreach ?
          </Box>
          <AccordionIcon />
        </AccordionButton>
      </h2>
      <AccordionPanel pb={4}>
      Please send an email to info@medopticsltd.com detailing the proposed date,
       venue and expected number of people.
      </AccordionPanel>
    </AccordionItem>
  </Accordion>);
}












const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (

    
    <Container maxW={{base: '1xl', md:'6xl'}} py={12}>
      <Head>
        <title>Frequently Asked Questions | MedOptics Ltd</title>
        <meta name="description" content="MedOptics Ltd Webpage" />
        {/* <link rel="shortcut icon" href="../public/favicon.ico"></link> */}
        <link rel="shortcut icon" href="../../../images/icon/medoptics-logo-mini-square.jpeg"></link>
      </Head>
      <Heading
       as={'h1'}
        mb={6}
        fontSize={{
          base: "5xl",
          md: "8xl",
        }}
        minHeight={'1vh'}
        fontWeight="bold"
        lineHeight="none"
        letterSpacing={{
          base: "normal",
          md: "tight",
        }}
        color="green.900"
        _dark={{
          color: "green.100",
        }}
      >
         {" "}
         <Text
          display={{
                base: "block",
                          // lg: "inline",
                      }}
                      w="full"
                      bgClip="text"
                      bgGradient='linear(to-r, green.600, green.300)'
                      fontWeight="extrabold"
                      transition="all .65s ease" _hover={{ transform: 'scale(1.005)', filter: "brightness(140%)", }}
                      >
          Frequently Asked Questions
        </Text>{" "}
        
      </Heading>


      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} pb={10}>
        <Stack spacing={4}>
          <Text color={'gray.500'} fontSize={{base:'xl', md:'2xl'}}>
          If you’re new to MedOptics or looking to learn more about Optometry,
           this guide will help you learn more about the our website, its features and our Services.
          </Text>

        </Stack>

        <Image
            w="full"
            rounded="lg"
            shadow="2xl"
            src={getCloudinaryImage('undraw_Searching.png')} 
            alt="Hellonext feedback boards software screenshot"
            width={793}
            height={675} 
            placeholder="blur"
            blurDataURL={getCloudinaryImageBlur('undraw_Searching.png')}
          />
      </SimpleGrid>

      <Heading
       as={'h3'}
        mb={6}
        fontSize={{
          base: "3xl",
          md: "5xl",
        }}
        minHeight={'1vh'}
        fontWeight="bold"
        lineHeight="none"
        letterSpacing={{
          base: "normal",
          md: "tight",
        }}
        color="green.900"
        _dark={{
          color: "green.100",
        }}
      >
         {" "}
        <Text
          display={{
            base: "block",
            // lg: "inline",
          }}
          w="full"
          bgClip="text"
          bgGradient='linear(to-r, green.500, green.300)'
          fontWeight="extrabold"
        >
          Basics 
        </Text>{" "}
        
      </Heading>
      
      <Box pb={10}>
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList>
            {/* Each tab is n accordion */}
            <Tab>Services</Tab> 
            <Tab>Education</Tab>
          </TabList>

          <Box shadow="xl">
          <TabPanels>
            <TabPanel>
              <AccordionDropperServices />
            </TabPanel>
            <TabPanel>
              <AccordionDropperEducation />
            </TabPanel>
          </TabPanels>
          </Box>
        </Tabs>
        </Box>

        <Heading
       as={'h3'}
        mb={6}
        fontSize={{
          base: "3xl",
          md: "5xl",
        }}
        minHeight={'1vh'}
        fontWeight="bold"
        lineHeight="none"
        letterSpacing={{
          base: "normal",
          md: "tight",
        }}
        pt={10}
        color="green.900"
        _dark={{
          color: "green.100",
        }}
      >
         {" "}
        <Text
          display={{
            base: "block",
            // lg: "inline",
          }}
          w="full"
          bgClip="text"
          bgGradient='linear(to-r, green.500, green.300)'
          fontWeight="extrabold"
        >
          Purchases 
        </Text>{" "}
        
      </Heading>
      
      <Box pb={10} >
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList>
            {/* Each tab is n accordion */}
            <Tab>Buying</Tab>
            <Tab>Delivery and Returns</Tab>
          </TabList>

          <Box shadow="xl"> 
          <TabPanels>
            <TabPanel>
              <AccordionDropperBuying />
            </TabPanel>
            <TabPanel>
              <AccordionDropperDeliveryAndReturns />
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
          </Box>
        </Tabs>
        </Box>


        <Heading
       as={'h3'}
        mb={6}
        fontSize={{
          base: "3xl",
          md: "5xl",
        }}
        minHeight={'1vh'}
        fontWeight="bold"
        lineHeight="none"
        letterSpacing={{
          base: "normal",
          md: "tight",
        }}
        color="green.900"
        _dark={{
          color: "green.100",
        }}
      >
         {" "}
        <Text
          display={{
            base: "block",
            // lg: "inline",
          }}
          w="full"
          bgClip="text"
          bgGradient='linear(to-r, green.500, green.300)'
          fontWeight="extrabold"
          pt={10}

        >
          Legal
        </Text>{" "}
        
      </Heading>

      <Box pb={10}> 
        <Tabs variant='soft-rounded' colorScheme='green'>
          <TabList>
            {/* Each tab is n accordion */}
            {/* <Tab>Delivery and Returns</Tab> */}
            <Tab>Privacy & Policy</Tab>

          </TabList>

          <Box shadow="xl">
          <TabPanels>
            <TabPanel>
              <AccordionDropperServices />
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>

          </TabPanels>
          </Box>
        </Tabs>
        </Box> 
    </Container>
  );
}