"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"
import { getThemeClasses } from "@/lib/theme"
import { cn } from "@/lib/utils"

export function SuggestionsSection() {
  const theme = getThemeClasses('labs')
  return (
    <section id="suggest" className="py-24">
      <div className="container mx-auto px-4 md:px-6 max-w-xl">
        <motion.h2
          className="text-4xl md:text-5xl font-extrabold mb-6 text-white text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Send Your Suggestions
        </motion.h2>
        <motion.p
          className="text-gray-300 mb-8 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Have an idea, feature request, or experiment concept? We’d love to hear from you.
        </motion.p>

        <motion.form
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Name <span className="text-red-500">*</span></label>
            <Input type="text" placeholder="Your name" required className="bg-transparent border border-white/30 focus:border-[color:var(--saffron-orange)] focus:ring-0 text-white placeholder-gray-500" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Email <span className="text-red-500">*</span></label>
            <Input type="email" placeholder="you@example.com" required className="bg-transparent border border-white/30 focus:border-[color:var(--saffron-orange)] focus:ring-0 text-white placeholder-gray-500" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-300">Suggestion <span className="text-red-500">*</span></label>
            <Textarea placeholder="Share your idea or feedback" className="min-h-[120px] bg-transparent border border-white/30 focus:border-[color:var(--saffron-orange)] focus:ring-0 text-white placeholder-gray-500" required />
          </div>
          <Button type="submit" className={theme.button}>
            Send Suggestion <ArrowRight className="h-4 w-4 ml-1" />
          </Button>
        </motion.form>
      </div>
    </section>
  )
}
