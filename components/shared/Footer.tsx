"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Facebook, Instagram, Twitter, Mail, Phone } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  }

  return (
    <footer className="bg-gradient-to-b from-[#FFF8F0] to-white text-gray-800 pt-16 pb-8 w-full min-w-[320px]">
      <motion.div
        className="max-w-7xl mx-auto px-4 lg:px-8 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <motion.div className="w-full" variants={itemVariants}>
            <h3 className="text-heading4-medium font-serif mb-4">Collections</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/collections/rings" className="text-base-regular hover:text-[#C2AD8F] transition-colors">
                  Rings
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/necklaces"
                  className="text-base-regular hover:text-[#C2AD8F] transition-colors"
                >
                  Necklaces
                </Link>
              </li>
              <li>
                <Link href="/collections/earrings" className="text-base-regular hover:text-[#C2AD8F] transition-colors">
                  Earrings
                </Link>
              </li>
              <li>
                <Link
                  href="/collections/bracelets"
                  className="text-base-regular hover:text-[#C2AD8F] transition-colors"
                >
                  Bracelets
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div className="w-full" variants={itemVariants}>
            <h3 className="text-heading4-medium font-serif mb-4">Customer Care</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/care/shipping" className="text-base-regular hover:text-[#C2AD8F] transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/care/warranty" className="text-base-regular hover:text-[#C2AD8F] transition-colors">
                  Warranty & Repairs
                </Link>
              </li>
              <li>
                <Link href="/care/sizing" className="text-base-regular hover:text-[#C2AD8F] transition-colors">
                  Ring Sizing Guide
                </Link>
              </li>
              <li>
                <Link href="/care/faq" className="text-base-regular hover:text-[#C2AD8F] transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div className="w-full" variants={itemVariants}>
            <h3 className="text-heading4-medium font-serif mb-4">About Us</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about/story" className="text-base-regular hover:text-[#C2AD8F] transition-colors">
                  Our Story
                </Link>
              </li>
              <li>
                <Link href="/about/craftsmanship" className="text-base-regular hover:text-[#C2AD8F] transition-colors">
                  Craftsmanship
                </Link>
              </li>
              <li>
                <Link href="/about/sustainability" className="text-base-regular hover:text-[#C2AD8F] transition-colors">
                  Sustainability
                </Link>
              </li>
              <li>
                <Link href="/about/blog" className="text-base-regular hover:text-[#C2AD8F] transition-colors">
                  Blog
                </Link>
              </li>
            </ul>
          </motion.div>

          <motion.div className="w-full" variants={itemVariants}>
            <h3 className="text-heading4-medium font-serif mb-4">Contact Us</h3>
            <p className="text-base-regular mb-2 flex items-center">
              <Phone size={18} className="mr-2" /> +1 (800) 123-4567
            </p>
            <p className="text-base-regular mb-4 flex items-center">
              <Mail size={18} className="mr-2" /> support@jewelrystore.com
            </p>
            <h4 className="text-body-semibold mb-2">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-800 hover:text-[#C2AD8F] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="text-gray-800 hover:text-[#C2AD8F] transition-colors">
                <Instagram size={24} />
              </a>
              <a href="#" className="text-gray-800 hover:text-[#C2AD8F] transition-colors">
                <Twitter size={24} />
              </a>
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="border-t border-gray-200 pt-8 mt-8 w-full">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <p className="text-small-regular text-gray-600 mb-4 lg:mb-0 text-center lg:text-left">
              © {currentYear} <span className="font-semibold">Jewelry Store</span>. All rights reserved.
            </p>
            <div className="flex space-x-4">
              <Link href="/privacy" className="text-small-regular text-gray-600 hover:text-[#C2AD8F] transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-small-regular text-gray-600 hover:text-[#C2AD8F] transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </footer>
  )
}

export default Footer

