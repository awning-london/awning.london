import Image from "next/image"
import Link from "next/link"
import type { Blog } from "@/types/blog"

export default function BlogCard({ blog }: { blog: Blog }) {
  return (
    <Link href={`/blog/${blog.id}`} className="block">
      <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <Image
          src={blog.image1 || "/placeholder.svg"}
          alt={blog.title}
          width={400}
          height={225}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="truncate text-xl font-semibold mb-2">{blog.title}</h3>
          <p className="truncate text-gray-600">{blog.desc1}</p>
        </div>
      </div>
    </Link>
  )
}