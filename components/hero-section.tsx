"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { ArrowRight, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { motion } from "framer-motion"

export function HeroSection() {
  const [typingComplete, setTypingComplete] = useState(false)
  const tagline = "intelligent tools, thoughtful systems, and cultural code"

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true)
    }, 3500)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0" style={{ backgroundImage: 'var(--brand-gradient)', opacity: 0.18 }} />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[color:var(--purple-primary)]/10 via-transparent to-transparent" />
      
      <div className="container px-4 md:px-6 relative z-10">
        <motion.div 
          className="flex flex-col items-center text-center space-y-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-4 max-w-3xl">
            <motion.h1 
              className="text-5xl md:text-7xl font-bold tracking-tighter bg-clip-text text-transparent"
              style={{ backgroundImage: 'var(--brand-gradient)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Softics
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
              An AI studio that balances professional credibility with experimental innovation, creating intelligent
              tools that augment imagination rather than just automate.
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
              className="gap-2 group hover:scale-105 transition-transform"
              asChild
            >
              <motion.a 
                href="#work"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Work
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
                href="#sri"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Meet Sri
                <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
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
