"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"

export default function NewsLetterSignUp() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically handle the newsletter signup
    console.log("Newsletter signup for:", email)
    setEmail("")
  }

  return (
    <section className="bg-white py-16 px-4">
      <div className="max-w-4xl mx-auto">
        <motion.div
          className="bg-white text-black p-8 md:p-12 rounded-2xl shadow-lg relative overflow-hidden border-2 border-[#C2AD8F]"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Decorative elements */}
          <motion.div
            className="absolute top-0 right-0 w-24 h-24 border-4 border-dashed border-[#C2AD8F] rounded-full opacity-20"
            style={{ top: "-3rem", right: "-3rem" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 40, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />
          <motion.div
            className="absolute bottom-0 left-0 w-32 h-32 border-4 border-dashed border-[#C2AD8F] rounded-full opacity-20"
            style={{ bottom: "-4rem", left: "-4rem" }}
            animate={{ rotate: -360 }}
            transition={{ duration: 50, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
          />

          <div className="relative z-10">
            <motion.h2
              className="text-heading2-bold md:text-heading1-semibold text-[#C2AD8F] mb-4 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Subscribe to Our Newsletter
            </motion.h2>
            <motion.p
              className="text-body-normal text-gray-600 mb-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Stay updated with our latest collections, exclusive offers, and luxury insights.
            </motion.p>
            <motion.form
              onSubmit={handleSubmit}
              className="flex flex-col md:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <div className="flex-grow relative">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full py-3 px-4 bg-white text-black border-2 border-[#C2AD8F] rounded-lg focus:outline-none focus:border-[#E5D3B3] transition-colors duration-300"
                />
                <Mail className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[#C2AD8F]" size={20} />
              </div>
              <Button
                type="submit"
                className="bg-[#C2AD8F] text-white hover:bg-[#E5D3B3] hover:text-black transition-colors duration-300 py-3 px-6 rounded-lg text-base-semibold"
              >
                Subscribe
              </Button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

