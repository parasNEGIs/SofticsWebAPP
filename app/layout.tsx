import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from './lib/theme-context'
import { NavigationBar } from "@/components/navigation-bar"
import { Footer } from "@/components/footer"
import { CommandMenu } from "@/components/command-menu"
import { Toaster } from "@/components/ui/toaster"
import { Navbar } from './components/layout/Navbar'

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })

export const metadata: Metadata = {
  title: "Softics | Intelligent Tools, Thoughtful Systems",
  description: "Softics is a solo AI development studio creating intelligent tools, thoughtful systems, and cultural code.",
  keywords: ["AI Development", "Software Studio", "Cultural Code", "Sri AI", "Softics"],
  authors: [{ name: "Paras", url: "https://softics.co" }],
  creator: "Softics Studio",
  publisher: "Softics Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head />
      <body className={`${inter.variable} font-sans antialiased`}>
        <ThemeProvider>
          <main className="min-h-screen">
            {children}
          </main>
          <Footer />
          <CommandMenu />
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}
