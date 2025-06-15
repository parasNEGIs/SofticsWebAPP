'use client'

// Wrapper around the existing generic <Navbar /> that pre-loads Labs-specific links.
// Keeps the exact same styling, animations and mobile behaviour as Studio’s navbar.
// Only the link set differs.

import { Navbar } from '@/app/components/layout/Navbar'
import type { NavItem } from '@/app/components/layout/Navbar'

const labsNavItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'Experiments', href: '#experiments' },
  { name: 'Articles/Blogs', href: '/blogs' },
  { name: 'Sri', href: '/labs/sri' },
]

export function LabsNavbar() {
  return <Navbar items={labsNavItems} />
}
