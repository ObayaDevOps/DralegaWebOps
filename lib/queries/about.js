export const aboutPageQuery = `*[_id == "aboutPage"][0]{
  eyebrow,
  heading,
  headingEmphasis,
  "photo": photo{..., "url": asset->url, "lqip": asset->metadata.lqip},
  photoCaption,
  intro,
  body,
  closer,
  credentials,
  stack,
  clients,
  cta
}`
