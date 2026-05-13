export const journalPageQuery = `*[_id == "journalPage"][0]{
  eyebrow,
  heading,
  headingEmphasis,
  subheading
}`

export const journalPostsQuery = `*[_type == "journalPost"] | order(date desc){
  _id,
  number,
  title,
  date,
  tags,
  blurb,
  readTime,
  "slug": slug.current
}`

export const journalPostBySlugQuery = `*[_type == "journalPost" && slug.current == $slug][0]{
  _id,
  number,
  title,
  date,
  tags,
  blurb,
  readTime,
  "slug": slug.current,
  body
}`

export const journalPostSlugsQuery = `*[_type == "journalPost" && defined(slug.current)]{ "slug": slug.current }`
