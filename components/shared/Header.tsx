"use client"

import { useRef } from "react"
import { motion, useInView } from "framer-motion"
import Link from "next/link"
import { usePathname } from "next/navigation"
import Image from "next/image"
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarTrigger } from "@/components/ui/menubar"
import { Button } from "@/components/ui/button"
import { Menu } from "lucide-react"
import Auth from "./Auth"
import AdminLink from "./AdminLink"
import { IoDiamond } from "react-icons/io5"
import BurgerMenu from "./BurgerMenu"

const infoNames = ["Контакти", "Доставка та оплата", "Гаратнія та сервіси", "Презентації"]

export default function LuxuryHeader({ email, user }: { email: string; user: string }) {
  const pathname = usePathname()
  const headerRef = useRef<HTMLElement>(null)
  const isInView = useInView(headerRef, { once: true })

  const userInfo = JSON.parse(user)

  const headerVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0 },
  }

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  }

  const Links = [
    { label: "Головна", href: "/" },
    { label: "Каталог", href: "/catalog" },
    { label: "Уподобані", href: `/liked/${userInfo?._id || ""}` },
    { label: "Мої замовлення", href: "/myOrders" },
    { label: "Інформація", href: "/info" },
  ]

  const handleLead = (label: string) => {
    // Implement tracking logic here
    console.log("Lead:", label)
  }

  return (
    <header
      ref={headerRef}
      className="w-full min-w-[320px] bg-black text-white"
    >
      <div className="max-w-[1680px] mx-auto px-4 sm:px-6 lg:px-8 h-20 flex justify-between items-center">
        <Link href="/" className="flex items-center space-x-2">
          <IoDiamond />
          <span className="text-[#E5D3B3] font-serif italic text-heading4-medium tracking-wider">Luxuer</span>
        </Link>

        <nav className="hidden lg:flex items-center gap-1">
          <AdminLink />
          {Links.map(({ label, href }, index) => {
            const isActive = (pathname.includes(href) && href.length > 1) || pathname === href

            if (["Уподобані", "Мої замовлення"].includes(label) && !email) {
              return null
            }

            if (label === "Інформація") {
              return (
                <Menubar key={label} className="bg-transparent border-none m-0 mt-0.5 p-0">
                  <MenubarMenu>
                    <MenubarTrigger
                      className={`text-[14px] font-medium px-3 py-2 rounded-full transition-colors ${isActive ? "bg-[#C2AD8F] text-black" : "text-[#E5D3B3] hover:bg-[#2A2A2A]"}`}
                    >
                      {label}
                    </MenubarTrigger>
                    <MenubarContent className="bg-black border border-[#C2AD8F] rounded-lg">
                      {["contacts", "delivery-payment", "warranty-services", "presentations"].map((subItem, index) => (
                        <MenubarItem
                          key={subItem}
                          className="text-small-medium text-[#E5D3B3] hover:bg-[#2A2A2A] cursor-pointer"
                        >
                          <Link href={`/info/${subItem}`} onClick={() => handleLead(`/info/${subItem}`)}>
                            {infoNames[index]}
                          </Link>
                        </MenubarItem>
                      ))}
                    </MenubarContent>
                  </MenubarMenu>
                </Menubar>
              )
            }

            return (
              <div key={label}>
                <Link
                  href={href}
                  className={`text-small-medium px-3 py-2 rounded-full transition-colors ${
                    isActive ? "bg-[#C2AD8F] text-black" : "text-[#E5D3B3] hover:bg-[#2A2A2A]"
                  }`}
                  onClick={() => handleLead(label)}
                >
                  {label}
                </Link>
              </div>
            )
          })}
        </nav>

        <div className="flex items-center space-x-4 max-lg:hidden">
          <Auth email={email} user={user} />

        </div>
        <div className="w-fit h-8 hidden mt-1 max-lg:flex" >
          <BurgerMenu email={email} user={user} />
        </div>
      </div>
    </header>
  )
}

