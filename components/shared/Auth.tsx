"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { useSession } from "next-auth/react"
import { signOut } from "next-auth/react"
import Image from "next/image"
import { LogOut, User } from "lucide-react"

const Auth = ({ email, user }: { email: string; user: string }) => {
  const { data: session, status } = useSession()
  const userInfo = JSON.parse(user)

  return (
    <>
      {status === "authenticated" ? (
        <Button
          onClick={() => signOut()}
          className="h-10 px-6 bg-transparent text-[#E5D3B3] border border-[#C2AD8F] rounded-full text-base-semibold transition-colors duration-300 hover:bg-[#C2AD8F] hover:text-black"
        >
          <LogOut className="w-5 h-5 mr-2"/>
          <span>Вийти</span>
        </Button>
      ) : (
        <Link href="/login">
          <Button className="h-10 px-6 bg-[#C2AD8F] text-black border border-[#C2AD8F] rounded-full text-base-semibold transition-colors duration-300 hover:bg-transparent hover:text-[#E5D3B3]">
            <User className="w-5 h-5 mr-2"/>
            <span>Увійти</span>
          </Button>
        </Link>
      )}
    </>
  )
}

export default Auth

