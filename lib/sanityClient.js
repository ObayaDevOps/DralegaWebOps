import {createClient} from '@sanity/client'

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID
const dataset = process.env.NEXT_PUBLIC_SANITY_DATASET

if (!projectId || !dataset) {
  throw new Error(
    'Missing Sanity env: NEXT_PUBLIC_SANITY_PROJECT_ID and NEXT_PUBLIC_SANITY_DATASET must be set',
  )
}

const baseConfig = {
  projectId,
  dataset,
  apiVersion: '2024-01-01',
  perspective: 'published',
}

export const client = createClient({...baseConfig, useCdn: true})

export const previewClient = ({token}) =>
  createClient({...baseConfig, useCdn: false, perspective: 'previewDrafts', token})
