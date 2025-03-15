"use client"

import type React from "react"

import { useRouter, useSearchParams } from "next/navigation"
import { Check } from "lucide-react"

const colorOptions = [
  { name: "White", value: "#E0E1D3", type: "solid" },
  { name: "Pearl", value: "#AAAAA2", type: "solid" },
  { name: "Cream", value: "#D3C6A6", type: "solid" },
  { name: "Linen", value: "#BBAA8E", type: "solid" },
  { name: "Hemp Beige", value: "#9E8368", type: "solid" },
  { name: "Cacao", value: "#5B3522", type: "solid" },
  { name: "Brown", value: "#35261F", type: "solid" },
  { name: "Yellow", value: "#DF9E0E", type: "solid" },
  { name: "Orange", value: "#EA5211", type: "solid" },
  { name: "Salmon", value: "#CD5B5A", type: "solid" },
  { name: "Red", value: "#B52131", type: "solid" },
  { name: "Vermilion", value: "#941327", type: "solid" },
  { name: "Burgundy", value: "#681C28", type: "solid" },
  { name: "Mauve", value: "#624353", type: "solid" },
  { name: "Lilly", value: "#AEA7EA", type: "solid" },
  { name: "Turquoise", value: "#0C8598", type: "solid" },
  { name: "Blue", value: "#00367B", type: "solid" },
  { name: "Dark Blue", value: "#122D7A", type: "solid" },
  { name: "Admiral Blue", value: "#001741", type: "solid" },
  { name: "Pistachio", value: "#7B8E32", type: "solid" },
  { name: "Emerald", value: "#046157", type: "solid" },
  { name: "Green", value: "#005052", type: "solid" },
  { name: "Hunter", value: "#213124", type: "solid" },
  { name: "Forest Green", value: "#0B3028", type: "solid" },
  { name: "Nickel", value: "#545351", type: "solid" },
  { name: "Charcoal Grey", value: "#2E2D32", type: "solid" },
  { name: "Dark Grey", value: "#19191B", type: "solid" },
  {
    name: "Red & White Stripes",
    value: "stripe:#E63946:#FFFFFF",
    type: "stripe",
    colors: ["#E63946", "#FFFFFF"],
  },
  {
    name: "Blue & White Stripes",
    value: "stripe:#1D3557:#FFFFFF",
    type: "stripe",
    colors: ["#1D3557", "#FFFFFF"],
  },
  {
    name: "Green & White Stripes",
    value: "stripe:#2A9D8F:#FFFFFF",
    type: "stripe",
    colors: ["#2A9D8F", "#FFFFFF"],
  },
  {
    name: "Yellow & Navy Stripes",
    value: "stripe:#E9C46A:#1D3557",
    type: "stripe",
    colors: ["#E9C46A", "#1D3557"],
  },
  {
    name: "Orange & White Stripes",
    value: "stripe:#F4A261:#FFFFFF",
    type: "stripe",
    colors: ["#F4A261", "#FFFFFF"],
  },
  {
    name: "Beige & Brown Stripes",
    value: "stripe:#E9DAC1:#774936",
    type: "stripe",
    colors: ["#E9DAC1", "#774936"],
  },
]

export default function ColorPalette() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentColor = searchParams.get("color") || "#E63946"

  const handleColorSelect = (colorValue: string) => {
    const params = new URLSearchParams(searchParams.toString())
    params.set("color", colorValue)
    if (!params.has("style")) {
      params.set("style", "canopy")
    }
    router.push(`/color-palette?${params.toString()}`)
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
      {colorOptions.map((color) => {
        const swatchStyle: React.CSSProperties = {}

        if (color.type === "solid") {
          swatchStyle.backgroundColor = color.value
        } else if (color.type === "stripe") {
          swatchStyle.backgroundImage = `repeating-linear-gradient(0deg, 
            ${color.colors[0]} 0px, 
            ${color.colors[0]} 10px, 
            ${color.colors[1]} 10px, 
            ${color.colors[1]} 20px)`
        }

        return (
          <button
            key={color.value}
            className="flex flex-col items-center p-2 rounded-md hover:bg-slate-100 transition-colors"
            onClick={() => handleColorSelect(color.value)}
          >
            <div className="w-full aspect-square rounded-md mb-2 relative border border-slate-200" style={swatchStyle}>
              {currentColor === color.value && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <Check
                    className={`${color.type === "stripe" || color.value === "#FFFFFF" ? "text-black" : "text-white"} drop-shadow-md`}
                    size={24}
                  />
                </div>
              )}
            </div>
            <span className="text-sm text-center">{color.name}</span>
          </button>
        )
      })}
    </div>
  )
}

