import { client } from "@/sanity/lib/client";
import type { Blog } from "../types/blog";

export async function getBlogs(): Promise<Blog[]> {
  return client.fetch(`*[_type == "blog"]{
    id,
    href,
    date,
    title,
    metaWork,
    desc,
    heading1,
    desc1,
    "image1": image1.asset->url,
    optionheader,
    optiondesc,
    heading2,
    desc2,
    heading3,
    desc3,
    "image2": image2.asset->url
  }`);
}

export async function getBlog(slug: string): Promise<Blog | undefined> {
  return client.fetch(
    `*[_type == "blog" && id == $slug][0]{
      id,
      href,
      date,
      title,
      metaWork,
      desc,
      heading1,
      desc1,
      "image1": image1.asset->url,
      optionheader,
      optiondesc,
      heading2,
      desc2,
      heading3,
      desc3,
      "image2": image2.asset->url
    }`,
    { slug }
  );
}

export async function getAllBlogIds() {
  return client.fetch(`*[_type == "blog"].id`);
}
