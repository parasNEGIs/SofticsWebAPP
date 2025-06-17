import type { Metadata } from 'next'
import { Navbar, type NavItem } from '../components/layout/Navbar'

export const metadata: Metadata = {
  title: 'About | Softics',
}

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Navbar items={[{ name: 'Home', href: '/' } as NavItem]} />
      <main className="container mx-auto px-4 py-8">{children}</main>
    </div>
  )
}
