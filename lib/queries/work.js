export const workPageQuery = `*[_id == "workPage"][0]{
  eyebrow,
  heading,
  subheading,
  cta,
  closingNote
}`

export const projectsQuery = `*[_type == "project"] | order(number asc){
  _id,
  number,
  year,
  title,
  blurb,
  tags,
  span,
  placeholder,
  "slug": slug.current,
  "tileImages": tileImages[0...3]{
    "url": asset->url,
    "lqip": asset->metadata.lqip,
    alt
  },
  "heroUrl": heroImage.asset->url
}`
