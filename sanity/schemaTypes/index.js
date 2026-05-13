import ctaButton from './objects/ctaButton'
import imageWithCaption from './objects/imageWithCaption'
import serviceItem from './objects/serviceItem'
import pricingTierItem from './objects/pricingTierItem'
import credentialCard from './objects/credentialCard'
import stackCategory from './objects/stackCategory'
import buildDetail from './objects/buildDetail'
import metric from './objects/metric'

import project from './documents/project'
import journalPost from './documents/journalPost'

import siteSettings from './singletons/siteSettings'
import homePage from './singletons/homePage'
import aboutPage from './singletons/aboutPage'
import contactPage from './singletons/contactPage'
import servicesPage from './singletons/servicesPage'
import pricingPage from './singletons/pricingPage'
import workPage from './singletons/workPage'
import journalPage from './singletons/journalPage'

export const schemaTypes = [
  // Objects
  ctaButton,
  imageWithCaption,
  serviceItem,
  pricingTierItem,
  credentialCard,
  stackCategory,
  buildDetail,
  metric,
  // Documents
  project,
  journalPost,
  // Singletons
  siteSettings,
  homePage,
  aboutPage,
  contactPage,
  servicesPage,
  pricingPage,
  workPage,
  journalPage,
]
