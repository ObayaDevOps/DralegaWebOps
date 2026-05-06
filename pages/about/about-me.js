import {
  Container,
  SimpleGrid,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  UnorderedList,
  ListItem
} from '@chakra-ui/react';
import { SettingsIcon, InfoIcon, SearchIcon } from '@chakra-ui/icons';
import { ReactElement } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { getCloudinaryImage, getCloudinaryImageBlur } from '../../components/utils/cloudinaryImageRetreival';



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
      <Text fontWeight={550}>{text}</Text>
    </Stack>
  );
};

export default function SplitWithImage() {
  return (

    
    <Container maxW={'6xl'} py={12} minHeight={{md:'110vh'}}>
      <Head>
        <title>About Me | DralegaWebOps</title>
        <meta name="description" content="MedOptics Ltd Webpage" />
        {/* <link rel="shortcut icon" href="../public/favicon.ico"></link> */}
        <link rel="shortcut icon" href="../../../images/icon/medoptics-logo-mini-square.jpeg"></link>
      </Head>
      <Heading
       as={'h1'}
        mb={6}
        fontSize={{
          base: "6xl",
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
          bgGradient='linear(to-r, green.500, green.300)'
          fontWeight="extrabold"
        >
          About Me
        </Text>{" "}
        
      </Heading>


      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'green.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('green.50', 'green.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            My Story
          </Text>
          <Heading>A Computer Scientist with 6 Years Experience</Heading>
              <Text color={useColorModeValue('gray.800', 'gray.100')} fontSize={'lg'}>
                Tech Lead and Code Artist at Afropocene StudioLab {"\n"}
              </Text>
              <Text color={'gray.500'} fontSize={'lg'}>
                Founder and Beekeeper at Humble Beeing
              </Text>

              <Text color={'gray.500'} fontSize={'lg'}>
                I build random crypto-related trading bots - Optimus Dime, ArbiTriangle , Ftx-Auto-Compounding-Kit(FAcK) , TopsyTurvsy.
                I make random crypto-related art
              </Text>
              
              <Text color={'gray.500'} fontSize={'lg'}>
                Welcome to my website - a space for my personal musings and experiments ! Find me on Twitter
              </Text>

              <Text color={'gray.500'} fontSize={'lg'}>
              Background; I did CompSci at the University of Manchester, then did a summer internship at Credit Suisse London and then joined as a Technical Analyst after I graduated.

              I worked in Electronic Bond Trading, connecting CS to a new Brokerage using FIX, then moved to a Big-Data Team, doing real-time stream processing and dashboarding (Java, SpringBoot, React, Kafka, Cassandra) at terabytes-per-second scale for FX Risk Data.

              After a few years I got promoted to Assistant Vice President and moved to another CS Team, Equity Derivatives IT. Working in Scala, a functional language, on the Real-time pricing, taking in data from markets and risk engines to adjust prices for each derivative.

              Pandemic put things into perspective. Decided to resign and forge my own path.
              </Text>
          <Stack
            spacing={4}
            // divider={
            //   <StackDivider
            //     borderColor={useColorModeValue('gray.100', 'gray.700')}
            //   />
            // }
            
            >
            <Feature
              icon={
                <Icon as={SettingsIcon} color={'yellow.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Registered with the Optical Council UK '}
            />
            {/* <Feature
              icon={<Icon as={InfoIcon} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Member of the Association of Optometrists, UK'}
            />
            <Feature
              icon={
                <Icon as={SearchIcon} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Chairman of the Legislation Committee of Optometrist Association of Uganda,'}
            />
            <Feature
              icon={
                <Icon as={SearchIcon} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Former President of African Council of Optometry,Governing Board'}
            />
            <Feature
              icon={
                <Icon as={SearchIcon} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Member of World Council of Optometry'}
            />
            <Feature
              icon={
                <Icon as={SearchIcon} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Head of Department for Allied Health Department & Coordinator for the Optometry Program, Makerere University'}
            />
            <Feature
              icon={
                <Icon as={SearchIcon} color={'purple.500'} w={5} h={5} />
              }
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Accredited member of the Ultra Lase Eye-Care Co-management scheme: for pre and post laser operation screening, UK.'}
            /> */}

            
            
          </Stack>
        </Stack>
        <Image
            w="full"
            rounded="lg"
            shadow="2xl"
            src={getCloudinaryImage('obaya_oftggu.jpg')} 
            alt="Hellonext feedback boards software screenshot"
            width={500}
            height={500} 
            placeholder="blur"
            blurDataURL={getCloudinaryImageBlur('obaya_oftggu.jpg')}
          />
      </SimpleGrid>
    </Container>
  );
}