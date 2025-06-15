import { SimpleNavBar } from "@/components/simple-navbar"

export default function TermsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SimpleNavBar />
      {children}
    </>
  )
} 