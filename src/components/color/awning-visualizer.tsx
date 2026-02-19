"use client"

import { useEffect, useState } from "react"
import { useSearchParams } from "next/navigation"

type ColorInfo = {
  type: "solid" | "stripe"
  colors: string[]
  stripeWidth?: string
}

export default function AwningVisualizer() {
  const searchParams = useSearchParams()
  const [colorInfo, setColorInfo] = useState<ColorInfo>({
    type: "solid",
    colors: ["#E63946"],
  })

  const DEFUALT_COLOR = "Red"

  useEffect(() => {
    const paramColor = searchParams.get("color")
    const color = paramColor ?? DEFUALT_COLOR

    // setAwningColor(color)

    if (color.startsWith("stripe:")) {
      const parts = color.split(":")
      if (parts.length >= 3) {
        setColorInfo({
          type: "stripe",
          colors: [parts[1], parts[2]],
          stripeWidth: "40px",
        })
      }
    } else {
      setColorInfo({
        type: "solid",
        colors: [color],
      })
    }
  }, [searchParams])

  // Color utility functions
  const getDarkerShade = (color: string, amount = 30) => {
    const hex = color.replace("#", "")
    const rgb = Number.parseInt(hex, 16)
    const r = Math.max(0, (rgb >> 16) - amount)
    const g = Math.max(0, ((rgb >> 8) & 0x00ff) - amount)
    const b = Math.max(0, (rgb & 0x0000ff) - amount)
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`
  }

  const getLighterShade = (color: string, amount = 30) => {
    const hex = color.replace("#", "")
    const rgb = Number.parseInt(hex, 16)
    const r = Math.min(255, (rgb >> 16) + amount)
    const g = Math.min(255, ((rgb >> 8) & 0x00ff) + amount)
    const b = Math.min(255, (rgb & 0x0000ff) + amount)
    return `#${((r << 16) | (g << 8) | b).toString(16).padStart(6, "0")}`
  }

  return (
    <div className="relative w-full aspect-[4/3] md:aspect-[16/9] lg:h-[500px] bg-gradient-to-b from-sky-200 to-sky-100 rounded-lg overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-black/10"></div>
      <div className="absolute bottom-0 w-full h-[80%]">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-100 to-stone-200">
          <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(0deg,transparent_24px,black_25px),linear-gradient(90deg,transparent_24px,black_25px)] [background-size:25px_25px]"></div>
        </div>
        <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[min(250px,70%)]">
          <div className="absolute -left-2 -right-2 -top-2 h-[180px] bg-stone-300 transform -skew-x-1"></div>
          <div className="relative h-[min(175px,45vw)] bg-gradient-to-br from-sky-200 to-sky-100 border-4 border-stone-400">
            <div className="absolute inset-0 grid grid-cols-2">
              <div className="border-r-2 border-stone-400"></div>
            </div>
            <div className="absolute inset-0 bg-gradient-to-tr from-white/0 to-white/30"></div>
          </div>
          <div className="relative h-4 bg-stone-300 -mx-4">
            <div className="absolute inset-x-0 h-2 bottom-0 bg-stone-400 transform -skew-x-45"></div>
          </div>
        </div>
      </div>
      <div className="absolute top-[15%] left-1/2 -translate-x-1/2 w-[min(300px,85%)]">
        <div className="relative h-[min(1.5rem,4vw)]">
          <div className="absolute inset-x-0 h-full bg-stone-700"></div>
          <div className="absolute inset-x-0 bottom-0 h-2 bg-stone-900 transform -skew-x-45"></div>
        </div>
        <div className="relative">
          <div
            className="relative h-[min(60px,15vw)] transform preserve-3d"
            style={{
              transformStyle: "preserve-3d",
              transform: "perspective(1000px) rotateX(-5deg)",
              ...(colorInfo.type === "solid"
                ? {
                    background: `linear-gradient(to bottom, ${getLighterShade(colorInfo.colors[0], 20)}, ${colorInfo.colors[0]})`,
                  }
                : {
                    backgroundImage: `repeating-linear-gradient(0deg, 
                      ${colorInfo.colors[0]} 0px, 
                      ${colorInfo.colors[0]} 20px, 
                      ${colorInfo.colors[1]} 20px, 
                      ${colorInfo.colors[1]} 40px)`,
                  }),
            }}
          >
            {colorInfo.type === "solid" && (
              <div className="absolute inset-0">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div
                    key={i}
                    className="h-[min(10px,2.5vw)] w-full border-b border-black/10"
                    style={{
                      background: `linear-gradient(90deg, transparent, ${getDarkerShade(colorInfo.colors[0], 10)}, transparent)`,
                    }}
                  ></div>
                ))}
              </div>
            )}
            <div
              className="absolute -left-[min(1rem,2.5vw)] top-0 w-[min(1rem,2.5vw)] h-full"
              style={{
                background:
                  colorInfo.type === "solid"
                    ? getDarkerShade(colorInfo.colors[0], 40)
                    : getDarkerShade(colorInfo.colors[0], 40),
                transform: "rotateY(90deg) translateZ(-4px)",
              }}
            ></div>
            <div
              className="absolute -right-[min(1rem,2.5vw)] top-0 w-[min(1rem,2.5vw)] h-full"
              style={{
                background:
                  colorInfo.type === "solid"
                    ? getDarkerShade(colorInfo.colors[0], 40)
                    : getDarkerShade(colorInfo.colors[0], 40),
                transform: "rotateY(-90deg) translateZ(-4px)",
              }}
            ></div>
          </div>
          <div className="relative">
            <div
              className="w-full h-[min(20px,5vw)]"
              style={{
                clipPath:
                  "polygon(0 0, 5% 100%, 10% 0, 15% 100%, 20% 0, 25% 100%, 30% 0, 35% 100%, 40% 0, 45% 100%, 50% 0, 55% 100%, 60% 0, 65% 100%, 70% 0, 75% 100%, 80% 0, 85% 100%, 90% 0, 95% 100%, 100% 0)",
                filter: "drop-shadow(0 2px 2px rgba(0,0,0,0.2))",
                ...(colorInfo.type === "solid"
                  ? { background: getDarkerShade(colorInfo.colors[0], 20) }
                  : {
                      backgroundImage: `repeating-linear-gradient(0deg, 
                        ${colorInfo.colors[0]} 0px, 
                        ${colorInfo.colors[0]} 10px, 
                        ${colorInfo.colors[1]} 10px, 
                        ${colorInfo.colors[1]} 20px)`,
                    }),
              }}
            >
              <div
                className="absolute inset-0"
                style={{
                  background: "linear-gradient(to bottom, rgba(255,255,255,0.2), transparent)",
                }}
              ></div>
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <div className="absolute left-[15%] top-0 w-[min(8px,2vw)] h-[min(100px,25vw)]">
            <div className="absolute inset-0 bg-stone-700"></div>
            <div className="absolute inset-y-0 right-0 w-[min(2px,0.5vw)] bg-stone-900"></div>
            <div className="absolute bottom-0 -left-1 right-[-4px] h-3 bg-stone-800 transform skew-x-45"></div>
          </div>
          <div className="absolute right-[15%] top-0 w-[min(8px,2vw)] h-[min(100px,25vw)]">
            <div className="absolute inset-0 bg-stone-700"></div>
            <div className="absolute inset-y-0 right-0 w-[min(2px,0.5vw)] bg-stone-900"></div>
            <div className="absolute bottom-0 -left-1 right-[-4px] h-3 bg-stone-800 transform skew-x-45"></div>
          </div>
        </div>

        <div className="absolute -z-10 bottom-0 left-1/2 w-[90%] h-[min(1rem,3vw)] bg-black/20 blur-md rounded-full transform -translate-x-1/2"></div>
      </div>
      <div className="absolute bottom-2 md:bottom-4 right-2 md:right-4 bg-white/90 backdrop-blur-sm p-2 rounded-md shadow-lg flex items-center">
        {colorInfo.type === "solid" ? (
          <div
            className="w-4 md:w-6 h-4 md:h-6 rounded-full mr-2 shadow-inner"
            style={{ backgroundColor: colorInfo.colors[0] }}
          ></div>
        ) : (
          <div
            className="w-4 md:w-6 h-4 md:h-6 rounded-full mr-2 shadow-inner overflow-hidden"
            style={{
              backgroundImage: `linear-gradient(0deg, ${colorInfo.colors[0]} 50%, ${colorInfo.colors[1]} 50%)`,
            }}
          ></div>
        )}
        <span className="text-xs md:text-sm font-medium">
          {colorInfo.type === "solid" ? colorInfo.colors[0] : `${colorInfo.colors[0]} & ${colorInfo.colors[1]}`}
        </span>
      </div>
    </div>
  )
}

