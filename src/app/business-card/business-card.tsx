"use client"

import { useState } from "react"
import { Mail, Phone, Globe, Instagram } from "lucide-react"
import LogoV2 from "@/components/Logo"
import Image from "next/image"
import businessCard from "@/images/business-card.png";

export default function Component() {
  const [isFlipped, setIsFlipped] = useState(false)

  const handleFlip = () => {
    setIsFlipped(!isFlipped)
  }

  return (
    <div className="flex items-center justify-center p-28">
      <div className="perspective-1000">
        <div
          className={`relative w-80 h-96 cursor-pointer transition-transform duration-700 transform-style-preserve-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
          onClick={handleFlip}
          onMouseEnter={() => setIsFlipped(true)}
          onMouseLeave={() => setIsFlipped(false)}
        >
          {/* Front Side */}
          <div className="absolute inset-0 w-full h-full backface-hidden rounded-xl bg-[#BADDE6] shadow-xl p-6 flex flex-col justify-between text-sky-700">
            <div className="flex justify-between items-start">
              <div className="flex-1">
                <h1 className="text-2xl font-bold mb-1">Awning London</h1>
                <p className="text-sky-700 text-sm font-medium">Stylish, Durable Awnings for London.</p>
              </div>
            </div>
            <div className="flex justify-center items-center">
                <Image src={businessCard} height={200} width={150} alt="business-card" />
            </div>
            <div className="flex justify-between items-end">
              <div>
                {/* <p className="text-sky-700 text-sm">TechFlow Solutions</p> */}
                <p className="text-xs text-sky-700 mt-1">Innovation • Design • Excellence</p>
              </div>
              <div className="text-right">
                <p className="text-xs text-sky-500">Tap to flip</p>
              </div>
            </div>
          </div>

          {/* Back Side */}
          <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 rounded-xl bg-white shadow-xl p-6 flex flex-col justify-between">
            <div className="p-4 flex justify-center items-center">
                <LogoV2/>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3 text-gray-700">
                <div className="bg-blue-100 p-2 rounded-lg">
                  <Phone className="w-4 h-4 text-blue-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Phone</p>
                  <p className="font-medium">02035760992 / 07777602125</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-700">
                <div className="bg-purple-100 p-2 rounded-lg">
                  <Mail className="w-4 h-4 text-purple-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Email</p>
                  <p className="font-medium">awning.london@gmail.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-700">
                <div className="bg-green-100 p-2 rounded-lg">
                  <Globe className="w-4 h-4 text-green-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Website</p>
                  <p className="font-medium">www.awning.london</p>
                </div>
              </div>

              <div className="flex items-center space-x-3 text-gray-700">
                <div className="bg-orange-100 p-2 rounded-lg">
                  <Instagram className="w-4 h-4 text-orange-600" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-wide">Social Media</p>
                  <p className="font-medium">
                    Awning.london
                  </p>
                </div>
              </div>
            </div>

            <div className="text-center pt-4 border-t border-gray-100">
              <p className="text-xs text-gray-400">Tap to flip back</p>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        .perspective-1000 {
          perspective: 1000px;
        }
        .transform-style-preserve-3d {
          transform-style: preserve-3d;
        }
        .backface-hidden {
          backface-visibility: hidden;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
      `}</style>
    </div>
  )
}
