export const journalPageQuery = `*[_id == "journalPage"][0]{ heading, subheading }`

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
