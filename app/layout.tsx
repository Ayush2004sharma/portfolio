import type React from "react"
import type { Metadata } from "next"
import { Geist } from "next/font/google"
import { Manrope } from "next/font/google"
import "./globals.css"
import { BackgroundEffects } from "@/components/background-effects"
import { PageLoader } from "@/components/page-loader"
import { ScrollProgress } from "@/components/scroll-progress"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist",
})

const manrope = Manrope({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-manrope",
})

export const metadata: Metadata = {
  title: "G.O.A.T. Developer Portfolio",
  description: "Elite-tier portfolio showcasing the greatest web development work",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${geist.variable} ${manrope.variable} dark`}>
      <body>
        <PageLoader />
        <BackgroundEffects />
        <ScrollProgress />
        {children}
      </body>
    </html>
  )
}
