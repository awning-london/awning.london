import blogs from "@/lib/blogs.json"
import type { Blog } from "../types/blog";

export async function getBlogs(): Promise<Blog[]> {
  return blogs;
}

export async function getBlog(slug: string): Promise<Blog | undefined> {
  return blogs.find((blog) => blog.id === slug);
}

export async function getAllBlogIds() {
  return blogs.map((blog) => blog.id);
}
