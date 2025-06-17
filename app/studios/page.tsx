'use client'

import Link from "next/link"
import { motion } from "framer-motion"
import { StudioHero } from "@/components/sections/hero/studio"
import { ServicesSection } from "@/components/sections/services"
import { ProjectsSection } from "@/components/sections/projects"
import { ContactSection } from "@/components/sections/contact"

// SEO metadata handled at route level
export default function StudioPage() {
  return (
    <>
      <StudioHero />
      <ServicesSection />
      <ProjectsSection domain="main" />
      <ContactSection domain="main" />
    </>
  )
} 