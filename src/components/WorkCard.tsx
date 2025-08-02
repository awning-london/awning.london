import Image from "next/image"
import Link from "next/link"
import type { Work } from "@/types/work"

export default function WorkCard({ work }: { work: Work }) {
  return (
    <Link href={`/work/${work.id}`} className="block">
      <div className="bg-white rounded-3xl shadow-md overflow-hidden hover:shadow-lg transition-shadow">
        <Image
          src={work.imgurl[0] || "/placeholder.svg"}
          alt={work.title}
          width={400}
          height={225}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h3 className="truncate text-xl font-semibold mb-2">{work.title}</h3>
          <p className="truncate text-gray-600">{work.desc}</p>
        </div>
      </div>
    </Link>
  )
}