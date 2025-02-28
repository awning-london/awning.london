"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

export default function AwningVisualizer() {
  const searchParams = useSearchParams()
  const [awningColor, setAwningColor] = useState("#E63946")

  useEffect(() => {
    const color = searchParams.get("color")
    if (color) {
      setAwningColor(color)
    }
  }, [searchParams])

  return (
    <div className="relative w-full h-[400px] bg-slate-100 rounded-lg overflow-hidden">
      <div className="absolute bottom-0 w-full h-[300px] bg-stone-200 border-t-2 border-stone-300">
        <div className="absolute top-[50px] left-1/2 -translate-x-1/2 w-[200px] h-[150px] bg-sky-100 border-2 border-stone-400">
          <div className="grid grid-cols-2 h-full">
            <div className="border-r border-stone-400"></div>
          </div>
        </div>
      </div>
      <div className="absolute top-[50px] left-1/2 -translate-x-1/2 w-[250px]">
        <div className="h-4 w-full bg-stone-700"></div>
        <div
          className="w-full h-[80px] relative"
          style={{
            background: awningColor,
            clipPath: "polygon(0 0, 100% 0, 85% 100%, 15% 100%)",
            boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
          }}
        >
          <div className="absolute inset-0 opacity-10">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="h-[10px] w-full border-b border-black"></div>
            ))}
          </div>
        </div>
        <div
          className="w-full h-[20px] bg-black opacity-20"
          style={{
            clipPath: "polygon(15% 0, 85% 0, 80% 100%, 20% 100%)",
          }}
        ></div>
      </div>
      <div className="absolute bottom-4 right-4 bg-white p-2 rounded-md shadow-md flex items-center">
        <div className="w-6 h-6 rounded-full mr-2" style={{ backgroundColor: awningColor }}></div>
        <span className="text-sm font-medium">{awningColor}</span>
      </div>
    </div>
  )
}

