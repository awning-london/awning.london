import works from "@/lib/works.json";
import type { Work } from '../types/work'

export async function getWorks(): Promise<Work[]> {
  return works;
}

export async function getWork(id: string): Promise<Work | undefined> {
  return works.find((work) => work.id === id);
}

export async function getAllWorkIds(): Promise<string[]> {
  return works.map((work) => work.id)
}
