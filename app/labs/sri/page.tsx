'use client'

import { motion } from "framer-motion"

// SEO metadata handled elsewhere
const features = [
  {
    title: "Studio Knowledge",
    description: "Deep understanding of Softics services and philosophy",
    icon: "🎯",
  },
  {
    title: "Project Assistance",
    description: "Helps with estimates, scheduling, and technical guidance",
    icon: "📊",
  },
  {
    title: "Creative Collaboration",
    description: "Brainstorming partner for new ideas and solutions",
    icon: "💡",
  },
  {
    title: "Cultural Intelligence",
    description: "Globally aware, culturally sensitive communication",
    icon: "🌍",
  },
]

export default function SriPage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <section className="text-center space-y-4">
        <motion.div
          className="text-6xl mb-4"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          🤖
        </motion.div>
        <motion.h1 
          className="text-4xl md:text-6xl font-bold tracking-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Meet Sri
        </motion.h1>
        <motion.p 
          className="text-xl text-muted-foreground max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Your AI co-founder and studio assistant. Born from our experiments in human-AI collaboration.
        </motion.p>
      </section>

      {/* Features Grid */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold text-center">Capabilities</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              className="group relative rounded-lg border p-6 hover:border-primary transition-colors"
              whileHover={{ y: -4 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="space-y-4">
                <div className="text-4xl">{feature.icon}</div>
                <div>
                  <h3 className="font-semibold">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Try Sri Section */}
      <section className="text-center space-y-4">
        <motion.div
          className="rounded-lg border p-8 max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Try Sri Now</h2>
          <p className="text-muted-foreground mb-6">
            Press <kbd className="px-2 py-1 bg-muted rounded text-sm">/</kbd> anywhere on the site to start chatting with Sri
          </p>
          <div className="text-sm text-muted-foreground">
            Sri is available 24/7 to assist you with any questions about Softics, our services, or AI development.
          </div>
        </motion.div>
      </section>
    </div>
  )
} 