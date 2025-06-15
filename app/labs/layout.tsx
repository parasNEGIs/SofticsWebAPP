import type { Metadata } from "next"
import { Inter } from "next/font/google"

import { LabsNavbar } from "@/components/layout/LabsNavbar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Labs | Softics",
  description: "Explore our experimental projects, tools, and innovations in AI development.",
}

export default function LabsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${inter.variable} font-sans antialiased`}>
      <div className="labs-theme min-h-screen bg-background">
        <LabsNavbar />
        <main className="relative">
          <div className="labs-gradient-bg fixed inset-0 -z-10" />
          <div className="container mx-auto px-4 py-8">
            {children}
          </div>
        </main>
      </div>
    </div>
  )
} 