import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navbar } from "../components/layout/Navbar"

import { CommandMenu } from "@/components/command-menu"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Blog | Softics",
  description: "Insights, thoughts, and updates from Softics Studio.",
}

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${inter.variable} font-sans antialiased`}>
      <Navbar items={[{ name: 'Home', href: '/blogs' }, { name: 'Studios', href: '/studio' }, { name: 'Labs', href: '/labs' }, { name: 'About us', href: '/about' }]} />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="gradient-bg absolute inset-0 -z-10" />
          {children}
        </div>
      </main>
      
      <CommandMenu />
    </div>
  )
} 