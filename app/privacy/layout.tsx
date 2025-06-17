import { Navbar, type NavItem } from "../components/layout/Navbar"

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar items={[{ name: 'Home', href: '/' } as NavItem]} />
      {children}
    </>
  )
} 