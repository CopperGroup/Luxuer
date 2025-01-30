"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ChevronRight, Award, Users, Globe } from "lucide-react"
import Image from "next/image"
import { IoDiamondOutline } from "react-icons/io5";

export default function LuxuryAboutUsSection() {
  const stats = [
    { icon: Award, label: "Awards", value: "50+" },
    { icon: Users, label: "Happy Clients", value: "10k+" },
    { icon: Globe, label: "Countries", value: "30+" },
  ]

  return (
    <section className="relative bg-white px-4 py-20 md:py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image Column */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="aspect-[4/5] overflow-hidden rounded-2xl shadow-lg">
              <Image
                src="/assets/crafting.jpg"
                alt="Elegant jewelry craftsmanship"
                width={480}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
            <motion.div
              className="absolute -bottom-6 -right-6 w-32 h-32 bg-black rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <p className="text-[#E5D3B3] font-serif text-body-semibold text-center">
                Est.
                <br />
                1990
              </p>
            </motion.div>
            <motion.div
              className="absolute -top-4 -left-4 w-24 h-24 bg-[#E5D3B3] rounded-full flex items-center justify-center"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <IoDiamondOutline className="w-12 h-12 mt-1"/>
            </motion.div>
          </motion.div>

          {/* Content Column */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="font-serif text-heading2-bold md:text-heading1-semibold leading-tight tracking-tight text-black">
              Crafting Elegance Since 1990
            </h2>
            <p className="text-body-normal text-gray-600 leading-relaxed">
              For over three decades, we've been dedicated to creating exquisite jewelry that captures the essence of
              beauty and sophistication. Our passion for craftsmanship and attention to detail has made us a trusted
              name in the world of luxury accessories.
            </p>
            <p className="text-body-normal text-gray-600 leading-relaxed">
              Each piece in our collection is a testament to our commitment to quality and design excellence. We source
              only the finest materials and work with skilled artisans to bring our visions to life.
            </p>
            <div className="grid grid-cols-3 gap-4 py-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                >
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-[#C2AD8F]" />
                  <p className="text-heading3-bold text-black">{stat.value}</p>
                  <p className="text-small-regular text-gray-600">{stat.label}</p>
                </motion.div>
              ))}
            </div>
            <Button size="lg" className="group relative px-6 py-3 bg-transparent hover:bg-transparent">
              <span className="relative z-10 text-black text-base-semibold tracking-wide group-hover:text-white">
                Our Story
              </span>
              <span className="absolute inset-0 bg-black transform scale-x-0 transition-transform duration-300 ease-out group-hover:scale-x-100 origin-left"></span>
              <span className="absolute inset-0 border border-black"></span>
              <ChevronRight className="relative h-5 w-5 inline-block text-black z-[2] ml-2 group-hover:text-white" />
            </Button>
          </motion.div>
        </div>

        {/* Testimonial */}
        <motion.div
          className="mt-16 bg-black p-8 rounded-2xl shadow-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <blockquote className="italic text-body1-bold text-[#E5D3B3] text-center">
            "Their attention to detail and commitment to quality is unmatched. Every piece I've purchased has become a
            cherished part of my collection."
          </blockquote>
          <p className="mt-4 text-center text-base-regular text-white">- Sarah J., Loyal Customer</p>
        </motion.div>

        {/* Decorative elements */}
        <motion.div
          className="absolute top-12 right-4 w-24 h-24 border-4 border-dashed border-[#C2AD8F] rounded-full opacity-20"
          animate={{ rotate: 360 }}
          transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute bottom-12 left-4 w-32 h-32 border-4 border-dashed border-[#C2AD8F] rounded-full opacity-20"
          animate={{ rotate: -360 }}
          transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
        ></motion.div>
        <motion.div
          className="absolute top-1/4 -left-8 w-12 h-12"
          animate={{ rotate: [0, 15, -15, 0] }}
          transition={{ duration: 5, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        >
          <svg viewBox="0 0 24 24" className="w-full h-full text-[#C2AD8F] opacity-40">
            <path fill="currentColor" d="M12,2.6L9,9H2L7,13.4L5,20L12,16.6L19,20L17,13.4L22,9H15L12,2.6Z" />
          </svg>
        </motion.div>
      </div>
    </section>
  )
}

