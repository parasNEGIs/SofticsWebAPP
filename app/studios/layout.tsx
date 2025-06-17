import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { Navbar, type NavItem } from "../components/layout/Navbar"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Studio | Softics",
  description: "Professional AI development services, projects, and solutions.",
}

export default function StudioLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={`${inter.variable} font-sans antialiased`}>
      <Navbar items={[
        { name: 'Home', href: '/' },
        { name: 'Services', href: '/studio/services' },
        { name: 'Projects', href: '/studio/projects' },
        { name: 'Contact', href: '/studio/contact' },
      ] as NavItem[]} />



        
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="gradient-bg absolute inset-0 -z-10" />
          {children}
        </div>
      </main>
    </div>
  )
} 