import { SimpleNavBar } from "@/components/simple-navbar"

export default function PrivacyLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SimpleNavBar />
      {children}
    </>
  )
} 