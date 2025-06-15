'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

interface FooterProps {
  variant?: 'default' | 'labs'
}

export function Footer({ variant = 'default' }: FooterProps) {
  const isLabs = variant === 'labs'

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`py-12 ${
        isLabs ? 'bg-labs-background border-labs-border' : 'bg-background border-border'
      } border-t`}
    >
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className={`text-lg font-semibold ${
              isLabs ? 'text-labs-primary' : 'text-primary'
            }`}>
              Softics
            </h3>
            <p className={`text-sm ${
              isLabs ? 'text-labs-muted-foreground' : 'text-muted-foreground'
            }`}>
              Intelligent tools, thoughtful systems, and cultural code.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className={`font-medium ${
              isLabs ? 'text-labs-foreground' : 'text-foreground'
            }`}>
              Studio
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/studio/services" 
                  className={`text-sm hover:underline ${
                    isLabs ? 'text-labs-muted-foreground' : 'text-muted-foreground'
                  }`}
                >
                  Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/studio/projects" 
                  className={`text-sm hover:underline ${
                    isLabs ? 'text-labs-muted-foreground' : 'text-muted-foreground'
                  }`}
                >
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className={`font-medium ${
              isLabs ? 'text-labs-foreground' : 'text-foreground'
            }`}>
              Labs
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/labs" 
                  className={`text-sm hover:underline ${
                    isLabs ? 'text-labs-muted-foreground' : 'text-muted-foreground'
                  }`}
                >
                  Experiments
                </Link>
              </li>
              <li>
                <Link 
                  href="/labs/tools" 
                  className={`text-sm hover:underline ${
                    isLabs ? 'text-labs-muted-foreground' : 'text-muted-foreground'
                  }`}
                >
                  Tools
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className={`font-medium ${
              isLabs ? 'text-labs-foreground' : 'text-foreground'
            }`}>
              Connect
            </h4>
            <ul className="space-y-2">
              <li>
                <Link 
                  href="/blogs" 
                  className={`text-sm hover:underline ${
                    isLabs ? 'text-labs-muted-foreground' : 'text-muted-foreground'
                  }`}
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className={`text-sm hover:underline ${
                    isLabs ? 'text-labs-muted-foreground' : 'text-muted-foreground'
                  }`}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className={`mt-8 pt-8 border-t ${
          isLabs ? 'border-labs-border' : 'border-border'
        }`}>
          <p className={`text-sm text-center ${
            isLabs ? 'text-labs-muted-foreground' : 'text-muted-foreground'
          }`}>
            © {new Date().getFullYear()} Softics. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  )
} 