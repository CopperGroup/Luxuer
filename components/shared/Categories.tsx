"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Store } from "@/constants/store"

const categories = [
  { name: "Neckless", image: "/assets/1.jpg", href: "/catalog" },
  { name: "Rings", image: "/assets/ring.jpeg", href: "/catalog" },
  { name: "Bracelets", image: "/assets/bracelet.jpg", href: "/catalog" },
]

export default function LuxuryCategories() {
  const sectionRef = useRef<HTMLElement>(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  return (
    <motion.section
      ref={sectionRef}
      className="w-full min-h-screen relative flex flex-col items-center justify-center overflow-hidden py-24 bg-[#1C1C1C]"
    >
      {/* Spinning dashed circles */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-1/4 -left-1/4 w-1/2 h-1/2 border-2 border-dashed border-[#E5D3B3] rounded-full opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
        <motion.div
          className="absolute top-3/4 -right-1/4 w-1/2 h-1/2 border-2 border-dashed border-[#E5D3B3] rounded-full opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        />
      </div>

      <div className="w-full max-w-[1680px] flex flex-col items-center px-4 sm:px-8 relative z-10">
        <motion.div
          className="text-center space-y-8 mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-[#E5D3B3] font-serif italic text-heading4-medium tracking-wider">{Store.name}</h2>
          <h1 className="text-white font-serif text-heading1-semibold tracking-wide leading-tight">
            Product Categories
          </h1>
          <p className="text-[#E5E5E5] text-body-medium max-w-2xl mx-auto leading-relaxed">
            Explore our exquisite collection of luxury items, where timeless elegance meets contemporary design. Each
            category offers a unique experience of luxury and craftsmanship.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mb-16">
          {categories.map((category, index) => (
            <motion.div
              key={category.name}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
            >
              <Link href={category.href} className="group block">
                <div className="relative w-full h-[400px] overflow-hidden bg-[#2A2A2A]">
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70 transition-opacity duration-300 group-hover:opacity-80" />
                  <div className="absolute inset-0 flex flex-col items-center justify-end p-8">
                    <h3 className="text-heading3-bold text-white text-center mb-4 transform transition-transform duration-300 group-hover:translate-y-[-10px]">
                      {category.name}
                    </h3>
                    <span className="text-base-medium text-[#1C1C1C] bg-[#E5D3B3] px-6 py-2 opacity-0 transform translate-y-4 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0">
                      Explore
                    </span>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <Button
            asChild
            variant="outline"
            className="text-base-medium bg-transparent text-[#E5D3B3] hover:bg-[#E5D3B3] hover:text-[#1C1C1C] px-8 py-6 rounded-none border border-[#E5D3B3] transition-colors duration-300"
          >
            <Link href="/catalog">VIEW ALL CATEGORIES</Link>
          </Button>
        </motion.div>
      </div>
    </motion.section>
  )
}

