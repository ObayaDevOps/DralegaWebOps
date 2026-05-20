// pages/_document.js

import NextDocument, { Html, Head, Main, NextScript } from 'next/document'

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang='en'>
        <Head>
        <meta name="description" content="twofivesix Web Agency Webpage" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Red+Hat+Display:ital,wght@0,300;0,400;0,500;1,300;1,400&family=Instrument+Serif:ital,wght@0,400;1,400&family=Inter:wght@300;400;500&family=IBM+Plex+Mono:wght@400;500&family=Tiny5&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap"
          rel="stylesheet"
        />
        </Head>
        
        <body>
<Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}