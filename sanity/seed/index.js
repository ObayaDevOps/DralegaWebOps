require('dotenv').config({path: '.env.local'})
const {createClient} = require('@sanity/client')
const {SINGLETONS_SEED} = require('./data/singletons')
const {PROJECTS_SEED} = require('./data/projects')
const {JOURNAL_POSTS_SEED} = require('./data/journalPosts')

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  token: process.env.SANITY_API_WRITE_TOKEN,
  apiVersion: '2024-01-01',
  useCdn: false,
})

async function seed() {
  const all = [...SINGLETONS_SEED, ...PROJECTS_SEED, ...JOURNAL_POSTS_SEED]

  console.log(`Seeding ${all.length} documents...`)

  for (const doc of all) {
    await client.createOrReplace(doc)
    console.log(`✓ ${doc._type}: ${doc._id}`)
  }

  console.log('\nDone. Open /studio to verify.')
}

seed().catch((err) => {
  console.error(err)
  process.exit(1)
})
