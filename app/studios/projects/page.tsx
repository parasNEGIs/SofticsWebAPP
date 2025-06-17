'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"
import Image from "next/image"

export default function StudioProjectsPage() {
  return (
    <div className="pt-24 pb-16">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl text-center mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Projects
          </h1>
          <p className="text-lg text-muted-foreground">
            A curated selection of impactful AI products crafted with partners worldwide.
          </p>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate="visible"
          className="grid gap-10 md:grid-cols-2"
        >
          {[
            {
              title: 'VoiceOfCode',
              desc: 'AI-powered codebase assistant enabling natural-language queries for 20M+ LOC.',
              image: '/projects/voiceofcode.jpg',
              href: '#',
            },
            {
              title: 'RetailGPT',
              desc: 'Conversational agent driving 18% higher AOV for leading e-commerce brand.',
              image: '/projects/retailgpt.jpg',
              href: '#',
            },
            {
              title: 'HealthLens',
              desc: 'Computer-vision triage tool reducing radiology backlog by 32%.',
              image: '/projects/healthlens.jpg',
              href: '#',
            },
            {
              title: 'CultureGraph',
              desc: 'Knowledge graph surfacing cultural insights across 50k articles.',
              image: '/projects/culturegraph.jpg',
              href: '#',
            },
          ].map((proj) => (
            <motion.div
              key={proj.title}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="group overflow-hidden rounded-lg border border-border bg-background hover:border-[color:var(--saffron-orange)] transition-colors"
            >
              <div className="relative h-56 w-full overflow-hidden">
                <Image src={proj.image} alt={proj.title} fill className="object-cover group-hover:scale-105 transition-transform duration-300" />
              </div>
              <div className="p-6 space-y-3">
                <h3 className="text-xl font-semibold group-hover:text-[color:var(--saffron-orange)] transition-colors">
                  {proj.title}
                </h3>
                <p className="text-muted-foreground text-sm min-h-[48px]">{proj.desc}</p>
                <Link href={proj.href} className="inline-flex items-center text-sm font-medium text-[color:var(--saffron-orange)] hover:text-[color:var(--saffron-light)] transition-colors">
                  View case study
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
    </div>
  )
}