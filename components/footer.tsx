'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Twitter } from "lucide-react"
import { cn } from "@/lib/utils"
import { useTheme } from '@/app/lib/theme-context'

export function Footer() {
  const { theme } = useTheme()
  const isLabs = theme === 'labs'
  return (
    <footer className={cn(
      "border-t py-12 md:py-16 transition-colors",
      isLabs ? "bg-black text-white border-white/10" : "bg-background"
    )}>
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-2 space-y-4">
            <Link href="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl">Softics</span>
            </Link>
            <p className="text-sm text-gray-400 max-w-xs">
              Intelligent tools, thoughtful systems, and cultural code. An AI studio founded by Paras.
            </p>
            <div className="flex gap-4">
              <Button variant="ghost" size="icon">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Github className="h-5 w-5" />
                <span className="sr-only">GitHub</span>
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="h-5 w-5" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/#services" className="text-gray-400 hover:text-foreground transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-gray-400 hover:text-foreground transition-colors">
                  Labs
                </Link>
              </li>
              <li>
                <Link href="/#sri" className="text-gray-400 hover:text-foreground transition-colors">
                  Sri
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="text-gray-400 hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-medium">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-foreground transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-foreground transition-colors">
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-12 pt-6 border-t text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Softics. All rights reserved.</p>
          <p className="mt-1">Ship useful intelligence.</p>
        </div>
      </div>
    </footer>
  )
}
