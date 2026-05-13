import {parseBody} from 'next-sanity/webhook'

const TYPE_TO_PATHS = {
  homePage: ['/'],
  workPage: ['/work'],
  contactPage: ['/contact'],
  servicesPage: ['/services'],
  pricingPage: ['/pricing'],
  aboutPage: ['/about'],
  journalPage: ['/journal'],
  siteSettings: ['/', '/work', '/contact', '/services', '/pricing', '/about', '/journal'],
}

export const config = {api: {bodyParser: false}}

export default async function handler(req, res) {
  try {
    const secret = process.env.SANITY_REVALIDATE_SECRET
    const {body, isValidSignature} = await parseBody(req, secret)
    if (secret && !isValidSignature) {
      return res.status(401).json({message: 'Invalid signature'})
    }
    if (!body?._type) return res.status(400).json({message: 'Missing _type'})

    const paths = new Set()
    const baseFor = TYPE_TO_PATHS[body._type]
    if (baseFor) baseFor.forEach((p) => paths.add(p))

    if (body._type === 'project') {
      paths.add('/')
      paths.add('/work')
      if (body.slug?.current) paths.add(`/work/${body.slug.current}`)
    }
    if (body._type === 'journalPost') {
      paths.add('/journal')
      if (body.slug?.current) paths.add(`/journal/${body.slug.current}`)
    }

    const results = await Promise.all([...paths].map(async (path) => {
      try {
        await res.revalidate(path)
        return {path, ok: true}
      } catch (e) {
        return {path, ok: false, error: e.message}
      }
    }))
    return res.json({revalidated: true, results})
  } catch (e) {
    return res.status(500).json({message: e.message})
  }
}
