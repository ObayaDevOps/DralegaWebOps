import PageLayout from '../../layout/PageLayout';
import Hero from './sections/Hero';
import Work from './sections/Work';
import Studio from './sections/Studio';
import Start from './sections/Start';
import Marquee from './sections/Marquee';

export default function Home() {
  return (
    <PageLayout
      desktop={
        <>
          <Hero variant="desktop" />
          <Work variant="desktop" />
          <Studio variant="desktop" />
          <Start variant="desktop" />
        </>
      }
      mobile={
        <>
          <Hero variant="mobile" />
          <Marquee variant="mobile" />
          <Work variant="mobile" />
          <Studio variant="mobile" />
          <Start variant="mobile" />
        </>
      }
    />
  );
}
