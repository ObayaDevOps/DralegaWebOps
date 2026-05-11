export const workPageQuery = `*[_id == "workPage"][0]{ heading, subheading }`

export const projectsQuery = `*[_type == "project"] | order(number asc){
  _id,
  number,
  year,
  title,
  blurb,
  tags,
  span,
  "slug": slug.current
}`
