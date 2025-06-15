'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion } from 'framer-motion'
import { CommandMenu } from './CommandMenu'

interface NavigationBarProps {
  variant?: 'default' | 'labs'
}

export function NavigationBar({ variant = 'default' }: NavigationBarProps) {
  const pathname = usePathname()
  const isLabs = variant === 'labs' || pathname.startsWith('/labs')
  const navLinks = React.useMemo(() => {
    if (isLabs) {
      if (pathname === '/labs') {
        return [
          { href: '#home', label: 'Home' },
          { href: '#experiments', label: 'Experiments' },
          { href: '/blogs', label: 'Articles/Blogs' },
          { href: '/labs/sri', label: 'Sri' },
        ] as const
      }
      return [
        { href: '/labs', label: 'Experiments' },
        { href: '/labs/tools', label: 'Tools' },
        { href: '/labs/join', label: 'Join Labs' },
      ] as const
    }
    return [
      { href: '/studio', label: 'Studio' },
      { href: '/labs', label: 'Labs' },
      { href: '/blogs', label: 'Blogs' },
    ] as const
  }, [isLabs, pathname])
  
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-md ${
        isLabs ? 'bg-labs-background/80 border-labs-border' : 'bg-background/80 border-border'
      } border-b`}
    >
      <nav className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link 
          href={isLabs ? "/labs" : "/"}
          className={`text-xl font-bold ${
            isLabs ? 'text-labs-primary' : 'text-primary'
          }`}
        >
          Softics
        </Link>

        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`${isLabs ? 'hover:text-labs-primary' : 'hover:text-primary'} transition-colors`}
            >
              {link.label}
            </Link>
          ))}

        </div>

        <div className="flex items-center space-x-4">
          <CommandMenu variant={variant} />
          <button
            className={`px-4 py-2 rounded-full ${
              isLabs 
                ? 'bg-labs-primary text-labs-primary-foreground hover:bg-labs-primary/90' 
                : 'bg-primary text-primary-foreground hover:bg-primary/90'
            } transition-colors`}
          >
            Contact
          </button>
        </div>
      </nav>
    </motion.header>
  )
} 