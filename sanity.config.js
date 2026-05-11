import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {schemaTypes} from './sanity/schemaTypes'

const SINGLETONS = [
  {id: 'siteSettings', title: 'Site Settings'},
  {id: 'homePage', title: 'Home Page'},
  {id: 'aboutPage', title: 'About Page'},
  {id: 'contactPage', title: 'Contact Page'},
  {id: 'servicesPage', title: 'Services Page'},
  {id: 'pricingPage', title: 'Pricing Page'},
  {id: 'workPage', title: 'Work Index Page'},
  {id: 'journalPage', title: 'Journal Index Page'},
]

const singletonIds = new Set(SINGLETONS.map((s) => s.id))

export default defineConfig({
  name: 'default',
  title: 'twofivesix',

  basePath: '/studio',

  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || '18hqvrp8',
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',

  plugins: [
    structureTool({
      structure: (S) =>
        S.list()
          .title('Content')
          .items([
            ...SINGLETONS.map(({id, title}) =>
              S.listItem()
                .title(title)
                .id(id)
                .child(S.document().schemaType(id).documentId(id))
            ),
            S.divider(),
            S.documentTypeListItem('project').title('Projects'),
            S.documentTypeListItem('journalPost').title('Journal'),
          ]),
    }),
  ],

  schema: {
    types: schemaTypes,
    templates: (templates) =>
      templates.filter(({schemaType}) => !singletonIds.has(schemaType)),
  },
})
