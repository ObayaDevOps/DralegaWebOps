export const homePageQuery = `*[_id == "homePage"][0]{
  hero,
  workSection,
  studioSection,
  startSection,
  "featuredProjects": *[_type == "project"] | order(number asc)[0...8]{
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
