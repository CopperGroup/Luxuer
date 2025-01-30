"use client"

import { log } from "console"
import { motion } from "framer-motion"
import { IoDiamondOutline } from "react-icons/io5"

const logos = [
  { name: "Brand 1", element: IoDiamondOutline },
  { name: "Brand 2", element: IoDiamondOutline },
  { name: "Brand 3", element: IoDiamondOutline },
  { name: "Brand 4", element: IoDiamondOutline },
  { name: "Brand 5", element: IoDiamondOutline },
  { name: "Brand 6", element: IoDiamondOutline },
]

export default function InfiniteLogoScroll() {
  return (
    <div className="bg-[#1a1a1a] py-16 overflow-hidden relative">
      {/* Grainy texture overlay */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%' height='100%' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundRepeat: "repeat",
          mixBlendMode: "overlay",
        }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative">
          <div className="flex overflow-x-hidden">
            <motion.div
              className="flex space-x-16 animate-marquee whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{
                x: {
                  repeat: Number.POSITIVE_INFINITY,
                  repeatType: "loop",
                  duration: 30,
                  ease: "linear",
                },
              }}
            >
              {logos.concat(logos).map((logo, index) => (
                <div key={`${logo.name}-${index}`} className="w-40 h-24 gap-2 flex items-center justify-center text-heading1-bold text-light-text">
                  <logo.element/>
                  <span>Luxe</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  )
}

