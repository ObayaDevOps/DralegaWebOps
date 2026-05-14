import PageLayout from '../../layout/PageLayout';
import Hero from './sections/Hero';
import Work from './sections/Work';
import Studio from './sections/Studio';
import Start from './sections/Start';
import FAQ from './sections/FAQ';
import Marquee from './sections/Marquee';
import { HOME } from '../../../data/home';
import { PROJECTS } from '../../../data/projects';

export default function Home({ data = HOME, projects = PROJECTS, siteSettings, navLinks }) {
  return (
    <PageLayout
      siteSettings={siteSettings}
      navLinks={navLinks}
      desktop={
        <>
          <Hero variant="desktop" hero={data.hero} />
          <Work variant="desktop" workSection={data.workSection} projects={projects} />
          <Studio variant="desktop" studioSection={data.studioSection} />
          <FAQ variant="desktop" faqSection={data.faqSection} />
          <Start variant="desktop" startSection={data.startSection} />
        </>
      }
      mobile={
        <>
          <Hero variant="mobile" hero={data.hero} />
          <Marquee variant="mobile" items={data.hero?.marqueeItems} />
          <Work variant="mobile" workSection={data.workSection} projects={projects} />
          <Studio variant="mobile" studioSection={data.studioSection} />
          <FAQ variant="mobile" faqSection={data.faqSection} />
          <Start variant="mobile" startSection={data.startSection} />
        </>
      }
    />
  );
}
