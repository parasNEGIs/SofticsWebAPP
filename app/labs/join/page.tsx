'use client'

import { motion } from 'framer-motion'
import { Brain, Code, Lightbulb, Users } from 'lucide-react'

// metadata handled at route level

const benefits = [
  {
    title: 'Early Access',
    description: 'Be among the first to test and shape our experimental tools.',
    icon: Lightbulb,
  },
  {
    title: 'Collaboration',
    description: 'Work with like-minded developers and researchers.',
    icon: Users,
  },
  {
    title: 'Learning',
    description: 'Access to exclusive resources and knowledge sharing.',
    icon: Brain,
  },
  {
    title: 'Development',
    description: 'Contribute to cutting-edge AI tools and systems.',
    icon: Code,
  },
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.4,
    },
  },
}

export default function JoinPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-labs-primary to-labs-secondary bg-clip-text text-transparent">
            Join Softics Labs
          </h1>
          <p className="text-lg text-labs-muted-foreground">
            Be part of our community shaping the future of AI development.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16"
        >
          {benefits.map((benefit) => (
            <motion.div
              key={benefit.title}
              variants={itemVariants}
              className="bg-labs-background border border-labs-border rounded-lg p-6"
            >
              <div className="flex items-center space-x-4">
                <div className="p-2 bg-labs-muted rounded-lg">
                  <benefit.icon className="w-6 h-6 text-labs-primary" />
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2 text-labs-foreground">
                    {benefit.title}
                  </h3>
                  <p className="text-labs-muted-foreground">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="max-w-2xl mx-auto"
        >
          <div className="bg-labs-background border border-labs-border rounded-lg p-8">
            <h2 className="text-2xl font-semibold mb-6 text-labs-foreground">
              Apply to Join
            </h2>
            <form className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-labs-foreground mb-2"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg bg-labs-muted border border-labs-border text-labs-foreground focus:outline-none focus:ring-2 focus:ring-labs-primary"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-labs-foreground mb-2"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg bg-labs-muted border border-labs-border text-labs-foreground focus:outline-none focus:ring-2 focus:ring-labs-primary"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="background"
                  className="block text-sm font-medium text-labs-foreground mb-2"
                >
                  Background
                </label>
                <textarea
                  id="background"
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg bg-labs-muted border border-labs-border text-labs-foreground focus:outline-none focus:ring-2 focus:ring-labs-primary"
                  placeholder="Tell us about your experience and interests..."
                />
              </div>

              <div>
                <label
                  htmlFor="interests"
                  className="block text-sm font-medium text-labs-foreground mb-2"
                >
                  Areas of Interest
                </label>
                <textarea
                  id="interests"
                  rows={3}
                  className="w-full px-4 py-2 rounded-lg bg-labs-muted border border-labs-border text-labs-foreground focus:outline-none focus:ring-2 focus:ring-labs-primary"
                  placeholder="What aspects of AI development interest you most?"
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 rounded-full bg-labs-primary text-labs-primary-foreground hover:bg-labs-primary/90 transition-colors"
              >
                Submit Application
              </button>
            </form>
          </div>
        </motion.div>
      </div>
    </div>
  )
} 