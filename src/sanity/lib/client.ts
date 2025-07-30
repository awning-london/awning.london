import { createClient } from 'next-sanity'

import { dataset, projectId } from '../env'

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || projectId,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || dataset,
  apiVersion: "2024-07-30",
  useCdn: true, // Set to false if statically generating pages, using ISR or tag-based revalidation
})
