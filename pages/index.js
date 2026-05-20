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
  const pageTitle = siteSettings?.studioName
    ? `${siteSettings.studioName} — ${siteSettings.tagline}`
    : `twofivesix — Websites for Uganda’s most ambitious businesses`;
  const pageDesc = siteSettings?.metaDescription ||
    `twofivesix is a studio building world-class websites for Uganda’s most ambitious businesses. Bank-grade engineering meets working-artist sensibility.`;
  return (
    <>
      <Head>
        <title>{pageTitle}</title>
        <meta name="description" content={pageDesc} />
        <meta property="og:site_name" content="twofivesix" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDesc} />
        <meta property="og:url" content="https://twofivesix.online" />
        <meta property="og:image" content="https://twofivesix.online/og-image.png" />
      </Head>
      <Home data={data} projects={projects} siteSettings={siteSettings} navLinks={navLinks} />
    </>
  );
}

Index.noLayout = true;
