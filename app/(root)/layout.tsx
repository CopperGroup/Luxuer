import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Montserrat } from "next/font/google";
import "../globals.css";
import Header from "@/components/shared/Header";
import Footer from "@/components/shared/Footer";
import StickyCart from "@/components/shared/StickyCart";
import Provider from "../Provider";
import { AppWrapper } from "./context";
import CartPage from "@/components/shared/CartPage";
import { SpeedInsights } from "@vercel/speed-insights/next"
import BannerHero from "@/components/banner/BannerHero";
import { getSession } from "@/lib/getServerSession";
import { fetchUserByEmail } from "@/lib/actions/user.actions";
import FacebookPixel from "@/components/pixel/FacebookPixel";
import PageView from "@/components/pixel/PageView";
import { Analytics } from "@vercel/analytics/react"


const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-cormorant-garamond",
  weight: ["300", "400", "500", "600", "700"],
})

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
})

export const metadata: Metadata = {
  title: "Luxe Jewels | Timeless Elegance",
  description:
    "Discover our exquisite collection of handcrafted, luxury jewelry. Where timeless elegance meets unparalleled craftsmanship.",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const email = await getSession();

  const user = await fetchUserByEmail(email);
  
  return (
      <html lang="en">
        <body className={`${cormorantGaramond.variable} ${montserrat.variable} font-sans`}>
          {/* <Analytics /> */}
          <FacebookPixel />
          <Provider>
              <Header email={email} user={JSON.stringify(user)}/>
              <AppWrapper>
                <PageView />
                <main className = "main-container">
                  <div className = "w-full max-w-[1680px] px-5">
                    {children}
                 </div>
                </main>
                <StickyCart/>
            </AppWrapper>
          <Footer/>
          </Provider>
          <SpeedInsights/>
        </body>
      </html>
  );
}