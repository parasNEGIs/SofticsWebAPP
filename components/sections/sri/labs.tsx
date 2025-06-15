"use client"

import { motion } from "framer-motion"
import { ArrowRight, Bot } from "lucide-react"
import { cn } from "@/lib/utils"
import { getThemeClasses } from "@/lib/theme"
import { Button } from "@/components/ui/button"

export function SriSection() {
  const theme = getThemeClasses('labs')

  return (
    <section id="sri" className="py-24">
      <div className={theme.container}>
        <motion.div
          className="grid lg:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* Text */}
          <div className="space-y-6">
            <h2 className={cn("text-3xl md:text-4xl font-bold", theme.heading)}>
              Meet Sri – Your AI Research Partner
            </h2>
            <p className="text-muted-foreground">
              Sri is an experimental conversational agent that helps you brainstorm ideas, explore code, and prototype AI solutions directly in the browser. Think of it as your on-call lab partner.
            </p>
            <ul className="space-y-3 list-disc list-inside ml-1 text-muted-foreground">
              <li>Explain ML papers in plain English</li>
              <li>Generate experiment blueprints</li>
              <li>Suggest tooling &amp; datasets</li>
            </ul>

            <Button size="lg" className={cn("gap-2 group", theme.button)} asChild>
              <motion.a href="#contact" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Try Sri <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </Button>
          </div>

          {/* Illustration */}
          <motion.div
            className="relative mx-auto h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[color:var(--saffron-orange)]/20 via-transparent to-transparent flex items-center justify-center"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Bot className="h-24 w-24 text-[color:var(--saffron-orange)] animate-float" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
