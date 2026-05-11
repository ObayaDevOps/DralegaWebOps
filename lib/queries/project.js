export const projectBySlugQuery = `*[_type == "project" && slug.current == $slug][0]{
  _id,
  number,
  year,
  title,
  blurb,
  tags,
  span,
  "slug": slug.current,
  heroImage,
  brief,
  approach,
  buildDetails,
  metrics,
  gallery
}`

export const projectSlugsQuery = `*[_type == "project"]{ "slug": slug.current }`
