'use client';
import { ThemeClassSetter } from './components/ThemeClassSetter';
import { HeroSection } from "@/components/sections/hero"
import { ValuesSection } from "@/components/sections/values"
import { ServicesSection } from "@/components/sections/services"
import { ProjectsSection } from "@/components/sections/projects"
import { ContactSection } from "@/components/sections/contact"
import { FooterSection } from "@/components/sections/footer"
import { getDomain } from "@/lib/domain"
import { Navbar } from './components/layout/Navbar'

export default function Home() {
  const domain = getDomain()

  return (
    <>
      <Navbar />
      <ThemeClassSetter />
      <div className="flex flex-col w-full">
        <HeroSection domain={domain} />
        <ValuesSection domain={domain} />
        <ServicesSection domain={domain} />
        <ProjectsSection domain={domain} />
        <ContactSection domain={domain} />
      </div>
    </>
  )
}
