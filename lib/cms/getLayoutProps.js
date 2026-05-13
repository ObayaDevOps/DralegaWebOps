import {getSiteSettings} from './getSiteSettings'

export async function getLayoutProps() {
  const {settings, navLinks} = await getSiteSettings()
  return {siteSettings: settings, navLinks}
}
