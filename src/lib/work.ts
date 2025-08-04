import { client } from "@/sanity/lib/client";
import type { Work } from '../types/work'

export async function getWorks(): Promise<Work[]> {
  const query = `*[_type == "work"] | order(_createdAt desc) {
    _id,
    id,
    title,
    metaWork,
    desc,
    overview,
    benefit,
    featured,
    "imgurl": imgurl[].asset->url,
    reviewTitle,
    reviewDesc,
    from,
    score,
    "reviewImg": reviewImg.asset->url,
    email,
    slug
  }`
  return client.fetch(query)
}

export async function getWork(id: string): Promise<Work | undefined> {
  const query = `*[_type == "work" && id == $id][0] {
    _id,
    id,
    title,
    metaWork,
    desc,
    overview,
    benefit,
    featured,
    "imgurl": imgurl[].asset->url,
    reviewTitle,
    reviewDesc,
    from,
    score,
    "reviewImg": reviewImg.asset->url,
    email,
    slug
  }`
  return client.fetch(query, { id })
}

export async function getAllWorkIds(): Promise<string[]> {
  const query = `*[_type == "work"].id`
  return client.fetch(query)
}
