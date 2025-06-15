"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { getThemeClasses } from "@/lib/theme"

export function LabsHero() {
  const [typingComplete, setTypingComplete] = useState(false)
  const tagline = "Experimental AI Innovation"

  useEffect(() => {
    const timer = setTimeout(() => {
      setTypingComplete(true)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  const theme = getThemeClasses('labs')

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      {/* Diagonal saffron gradient */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            'var(--labs-gradient)',
          opacity: 0.18,
        }}
      />
      {/* Radial glow */}
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(ellipse_at_center,_rgba(255,153,51,0.25)_0%,_transparent_60%)]" />
      
      <div className={theme.container}>
        <motion.div 
          className="flex flex-col items-center text-center space-y-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="space-y-4 max-w-3xl">
            <motion.h1 
              className="text-5xl md:text-7xl font-extrabold tracking-tight text-white drop-shadow-[0_0_15px_rgba(255,153,51,0.6)]"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Softics Labs
            </motion.h1>
            
            <motion.p 
              className={cn(
                "text-2xl md:text-3xl text-[color:var(--saffron-orange)]",
                typingComplete ? "opacity-100" : "opacity-0"
              )}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {tagline}
            </motion.p>
            
            <motion.p
              className="text-gray-300 max-w-[700px] mx-auto mt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Pushing the boundaries of AI-human collaboration through experimental
              research, innovative prototypes, and cutting-edge tools.
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
              className={cn("gap-2 group transition-transform", theme.button)}
              asChild
            >
              <motion.a 
                href="#experiments"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View Experiments
                <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </motion.a>
            </Button>
            
            <Button 
              size="lg" 
              
              className={cn("gap-2 group transition-transform", theme.button)}
              asChild
            >
              <motion.a 
                href="#join"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Suggestion
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