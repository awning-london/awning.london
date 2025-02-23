import type { Work } from "../types/work"
import worksData from "./works.json"

export async function getWorks(): Promise<Work[]> {
  return worksData
}

export async function getWork(id: string): Promise<Work | undefined> {
  const works = await getWorks()
  return works.find((caseStudy) => caseStudy.id === id)
}

export async function getAllWorksIds() {
  return worksData.map(caseStudy => caseStudy.id);
}
