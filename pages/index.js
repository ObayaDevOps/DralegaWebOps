import Head from 'next/head';
import Home from '../components/pageContent/home/Home';
import { client } from '../lib/sanityClient';
import { homePageQuery } from '../lib/queries/home';
import { HOME } from '../data/home';
import { PROJECTS } from '../data/projects';
import { mergeObj } from '../lib/cms/merge';
import { mergeLayoutProps } from '../lib/cms/withLayoutProps';

export async function getStaticProps() {
  let cms = null;
  try {
    cms = await client.fetch(homePageQuery);
  } catch (e) {
    cms = null;
  }
  const data = mergeObj(
    cms ? {hero: cms.hero, workSection: cms.workSection, studioSection: cms.studioSection, startSection: cms.startSection} : null,
    HOME,
  );
  const projects = cms && cms.featuredProjects && cms.featuredProjects.length
    ? cms.featuredProjects
    : PROJECTS;
  return mergeLayoutProps({props: {data, projects}, revalidate: 60});
}

export default function Index({ data, projects, siteSettings, navLinks }) {
  return (
    <>
      <Head>
        <title>{siteSettings?.studioName ? `${siteSettings.studioName} — ${siteSettings.tagline}` : 'twofivesix — Websites for Uganda’s most ambitious businesses'}</title>
        <meta name="description" content={siteSettings?.metaDescription || 'twofivesix is a studio building world-class websites for Uganda’s most ambitious businesses. Bank-grade engineering meets working-artist sensibility.'} />
      </Head>
      <Home data={data} projects={projects} siteSettings={siteSettings} navLinks={navLinks} />
    </>
  );
}

Index.noLayout = true;
