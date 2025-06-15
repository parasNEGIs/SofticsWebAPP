import type { Metadata } from "next"
import { Inter } from "next/font/google"
import { SimpleNavBar } from "@/components/simple-navbar"

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
      <SimpleNavBar />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-8">
          <div className="gradient-bg absolute inset-0 -z-10" />
          {children}
        </div>
      </main>
    </div>
  )
} 