export const homePageQuery = `*[_id == "homePage"][0]{
  hero,
  workSection,
  studioSection,
  startSection,
  "featuresSection": featuresSection{
    eyebrow,
    "layers": layers[]{
      label,
      heading,
      subheading,
      bullets,
      imageCaption,
      imageAlt,
      "image": image{
        "url": asset->url,
        "lqip": asset->metadata.lqip,
        alt
      }
    }
  },
  "featuredProjects": featuredProjects[]->{
    _id,
    number,
    year,
    title,
    blurb,
    tags,
    span,
    placeholder,
    "slug": slug.current,
    "tileImages": tileImages[]{
      "url": asset->url,
      "lqip": asset->metadata.lqip,
      alt
    },
    "heroUrl": heroImage.asset->url
  }
}`
