import Head from 'next/head';
import Home from '../components/pageContent/home/Home';

export default function Index() {
  return (
    <>
      <Head>
        <title>twofivesix — Websites for Uganda&rsquo;s most ambitious businesses</title>
        <meta name="description" content="twofivesix is a studio building world-class websites for Uganda's most ambitious businesses. Bank-grade engineering meets working-artist sensibility." />
      </Head>
      <Home />
    </>
  );
}

Index.noLayout = true;
