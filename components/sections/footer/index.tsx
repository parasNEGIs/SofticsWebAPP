import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { getThemeClasses } from "@/lib/theme"
import { Domain } from "@/lib/theme"
import Link from "next/link"
import { Github, Twitter, Linkedin } from "lucide-react"

interface FooterSectionProps {
  domain: Domain
}

export function FooterSection({ domain }: FooterSectionProps) {
  const theme = getThemeClasses(domain)

  const footerContent = {
    studio: {
      title: "Softics Studio",
      description: "Building intelligent tools for enterprise",
      links: [
        { label: "Services", href: "/services" },
        { label: "Projects", href: "/projects" },
        { label: "About", href: "/about" },
        { label: "Contact", href: "/contact" }
      ]
    },
    labs: {
      title: "Softics Labs",
      description: "Pushing the boundaries of AI research",
      links: [
        { label: "Research", href: "/research" },
        { label: "Publications", href: "/publications" },
        { label: "Team", href: "/team" },
        { label: "Join Us", href: "/join" }
      ]
    },
    main: {
      title: "Softics",
      description: "Intelligent tools, thoughtful systems, and cultural code",
      links: [
        { label: "Studio", href: "https://studio.softics.com" },
        { label: "Labs", href: "https://labs.softics.com" },
        { label: "Blog", href: "/blog" },
        { label: "Contact", href: "/contact" }
      ]
    }
  }[domain]

  const socialLinks = [
    { icon: Github, href: "https://github.com/softics" },
    { icon: Twitter, href: "https://twitter.com/softics" },
    { icon: Linkedin, href: "https://linkedin.com/company/softics" }
  ]

  return (
    <footer className="bg-background border-t">
      <div className={theme.container}>
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <h3 className={cn("text-xl font-bold mb-4", theme.heading)}>
              {footerContent.title}
            </h3>
            <p className="text-muted-foreground mb-6">
              {footerContent.description}
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <Link
                  key={social.href}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <social.icon className="w-5 h-5" />
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerContent.links.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/privacy"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="py-6 border-t text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Softics. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
} 