"use client"

import { useRouter, useSearchParams } from "next/navigation"
import { Check } from "lucide-react"

const colorOptions = [
  { name: "White", value: "#E0E1D3" },
  { name: "Pearl", value: "#AAAAA2" },
  { name: "Cream", value: "#D3C6A6" },
  { name: "Linen", value: "#BBAA8E" },
  { name: "Hemp Beige", value: "#9E8368" },
  { name: "Cacao", value: "#5B3522" },
  { name: "Brown", value: "#35261F" },
  { name: "Yellow", value: "#DF9E0E" },
  { name: "Orange", value: "#EA5211" },
  { name: "Salmon", value: "#CD5B5A" },
  { name: "Red", value: "#B52131" },
  { name: "Vermillion", value: "#941327" },
  { name: "Burgundy", value: "#681C28" },
  { name: "Mauve", value: "#624353" },
  { name: "Lilly", value: "#AEA7EA" },
  { name: "Turquoise", value: "#0C8598" },
  { name: "Blue", value: "#00367B" },
  { name: "Dark Blue", value: "#122D7A" },
  { name: "Admiral Blue", value: "#001741" },
  { name: "Pistachio", value: "#7B8E32" },
  { name: "Emerald", value: "#046157" },
  { name: "Green", value: "#005052" },
  { name: "Hunter", value: "#213124" },
  { name: "Forest Green", value: "#0B3028" },
  { name: "Nickel", value: "#545351" },
  { name: "Charcoal Grey", value: "#2E2D32" },
  { name: "Dark Grey", value: "#19191B" },
]

export default function ColorPalette() {
  const router = useRouter()
  const searchParams = useSearchParams()

  const currentColor = searchParams.get("color") || "#E0E1D3"

  const handleColorSelect = (colorValue: string) => {
    router.push(`/color-palette?color=${encodeURIComponent(colorValue)}`)
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-3">
      {colorOptions.map((color) => (
        <button
          key={color.value}
          className="flex flex-col items-center p-2 rounded-md hover:bg-slate-100 transition-colors"
          onClick={() => handleColorSelect(color.value)}
        >
          <div
            className="w-full aspect-square rounded-md mb-2 relative border border-slate-200"
            style={{ backgroundColor: color.value }}
          >
            {currentColor === color.value && (
              <div className="absolute inset-0 flex items-center justify-center">
                <Check className="text-white drop-shadow-md" size={24} />
              </div>
            )}
          </div>
          <span className="text-sm text-center">{color.name}</span>
        </button>
      ))}
    </div>
  )
}

