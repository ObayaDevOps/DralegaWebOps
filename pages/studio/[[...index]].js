import Head from "next/head";
import { NextStudio } from 'next-sanity/studio'
import { NextStudioHead } from 'next-sanity/studio/head'
import config from '../../sanity.config';
export default function Index() {
    return (
        <div style={{ minHeight: '100vh' }}>
            <Head>
                <title>Sanity Studio| MedOptics Ltd</title>
                  <meta name="description" content="MedOptics Ltd Webpage" />
                {/* <link rel="shortcut icon" href="../public/favicon.ico"></link> */}
                <link rel="shortcut icon" href="../../../images/icon/medoptics-logo-mini-square.jpeg"></link>
                <NextStudioHead />

            </Head>
            <NextStudio config={config} />
        </div>
    )
}