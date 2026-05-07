import Head from 'next/head';
import HomePage from '../components/pageContent/home/HomePage';
import MobileHome from '../components/pageContent/home/MobileHome';

export default function Home() {
  return (
    <>
      <Head>
        <title>twofivesix — Websites for Uganda&rsquo;s most ambitious businesses</title>
        <meta name="description" content="twofivesix is a studio building world-class websites for Uganda's most ambitious businesses. Bank-grade engineering meets working-artist sensibility." />
      </Head>

      <div className="tfs-desktop-only">
        <HomePage />
      </div>
      <div className="tfs-mobile-only">
        <MobileHome />
      </div>
    </>
  );
}

Home.noLayout = true;
