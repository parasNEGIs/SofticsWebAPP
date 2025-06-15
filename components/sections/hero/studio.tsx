"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { getThemeClasses } from "@/lib/theme"

export function StudioHero() {
  const [typingComplete, setTypingComplete] = useState(false)
  const tagline = "Enterprise AI Solutions"

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const theme = getThemeClasses('studio')

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0" style={{ backgroundImage: 'var(--studio-gradient)', opacity: 0.18 }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[color:var(--purple-primary)]/10 via-transparent to-transparent" />
      
      <div className={theme.container}>
        <motion.div 
          className="flex flex-col items-center text-center space-y-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-4 max-w-3xl">
            <motion.h1 
              className={cn("text-5xl md:text-7xl font-bold tracking-tighter", theme.heading)}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Softics Studio
            </motion.h1>
            
            <motion.p 
              className={cn(
                "text-xl md:text-2xl text-muted-foreground",
                typingComplete ? "opacity-100" : "typing-animation"
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {tagline}
            </motion.p>
            
            <motion.p
              className="text-muted-foreground max-w-[700px] mx-auto mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Professional AI development services for enterprise clients, delivering intelligent
              solutions that drive business growth and innovation.
            </motion.p>
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            <Button 
              size="lg" 
              className={cn("gap-2 group hover:scale-105 transition-transform", theme.button)}
              asChild
            >
              <motion.a 
                href="/studio/services"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Our Services
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline" 
              className="gap-2 group hover:scale-105 transition-transform"
              asChild
            >
              <motion.a 
                href="/studio/contact"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact Us
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
} 