'use client'

// Wrapper around the existing generic <Navbar /> that pre-loads Labs-specific links.
// Keeps the exact same styling, animations and mobile behaviour as Studio’s navbar.
// Only the link set differs.

import { Navbar } from '@/app/components/layout/Navbar'
import type { NavItem } from '@/app/components/layout/Navbar'
import { usePathname } from 'next/navigation'

export function LabsNavbar() {
  const pathname = usePathname()
  const isSubPage = ['/labs/experiments', '/labs/experiments/sri', '/labs/join'].some(p => pathname?.startsWith(p))

  const items: NavItem[] = isSubPage
    ? [{ name: 'Home', href: '/labs#home' }]
    : [
        { name: 'Home', href: '#home' },
        { name: 'Experiments', href: '#experiments' },
        { name: 'Sri', href: '#sri' },
        { name: 'Suggestion', href: '#suggest' },
        { name: 'Blogs', href: '/blogs' },
      ]

  return <Navbar items={items} />
}
