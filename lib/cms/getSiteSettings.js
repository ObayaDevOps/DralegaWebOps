import {client} from '../sanityClient'
import {siteSettingsQuery} from '../queries/siteSettings'
import {CONTACT} from '../../data/contact'
import {NAV_LINKS} from '../../data/navigation'
import {mergeObj} from './merge'

const fallback = {
  studioName: 'twofivesix',
  tagline: 'Websites for Uganda\'s most ambitious businesses.',
  metaDescription:
    'twofivesix is a studio building world-class websites for Uganda\'s most ambitious businesses.',
  email: CONTACT.email,
  altEmail: CONTACT.altEmail,
  whatsappLink: CONTACT.whatsappHref,
  whatsappProjectLink: CONTACT.whatsappProjectHref,
  calendlyLink: CONTACT.calendlyHref,
  instagramLink: CONTACT.instagramHref,
  linkedinLink: CONTACT.linkedinHref,
  location: CONTACT.location,
  city: CONTACT.city,
  coords: CONTACT.coords,
  navLocation: CONTACT.navLocation,
  studioLabel: CONTACT.studioLabel,
  copyright: CONTACT.copyright,
}

export async function getSiteSettings() {
  let cms = null
  try {
    cms = await client.fetch(siteSettingsQuery)
  } catch (e) {
    cms = null
  }
  const settings = mergeObj(cms, fallback)
  return {settings, navLinks: NAV_LINKS}
}
