import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import WithSubnavigation from '../components/utils/navbar'
import FooterLargeWithNewsletterAdvanced from '../components/utils/footerAdvanced'

import theme from '../components/utils/theme'
import { Analytics } from '@vercel/analytics/react';


function MyApp({ Component, pageProps }) {
  const noLayout = Component.noLayout;
  return (
    <ChakraProvider theme={theme}>
      {!noLayout && <WithSubnavigation />}
      <Component {...pageProps} />
      {!noLayout && <FooterLargeWithNewsletterAdvanced />}
      <Analytics />
    </ChakraProvider>
  );
}

export default MyApp
