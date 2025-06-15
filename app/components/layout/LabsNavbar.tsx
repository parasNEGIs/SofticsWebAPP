'use client'

import { Navbar } from '@/components/layout/Navbar'
import type { NavItem } from './Navbar'

const labsNavItems: NavItem[] = [
  { name: 'Home', href: '#home' },
  { name: 'Experiments', href: '#experiments' },
  { name: 'Articles/Blogs', href: '/blogs' },
  { name: 'Sri', href: '/labs/sri' },
]

export function LabsNavbar() {
  return <Navbar items={labsNavItems} />
}

export default LabsNavbar;
