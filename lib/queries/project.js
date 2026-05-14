export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0]{
  _id,
  number,
  year,
  title,
  blurb,
  tags,
  span,
  placeholder,
  "slug": slug.current,
  "heroImage": heroImage{..., "url": asset->url, "lqip": asset->metadata.lqip, "dimensions": asset->metadata.dimensions},
  "tileImages": tileImages[]{"url": asset->url, "lqip": asset->metadata.lqip, alt},
  brief,
  approach,
  buildDetails,
  metrics,
  "gallery": gallery[]{
    caption,
    alt,
    "url": image.asset->url,
    "lqip": image.asset->metadata.lqip,
    "dimensions": image.asset->metadata.dimensions
  },
  liveUrl
}`

export const projectSlugsQuery = `*[_type == "project" && defined(slug.current)]{ "slug": slug.current }`
