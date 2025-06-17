'use client'

import { motion } from 'framer-motion'
import { Code, Cpu, Database, GitBranch, Terminal } from 'lucide-react'

// metadata handled at route level

const tools = [
  {
    title: 'Code Playground',
    description: 'Interactive environment for testing and prototyping AI models.',
    icon: Code,
    status: 'Alpha',
    link: '/labs/tools/playground',
  },
  {
    title: 'AI Model Hub',
    description: 'Repository of pre-trained models and custom implementations.',
    icon: Cpu,
    status: 'Development',
    link: '/labs/tools/model-hub',
  },
  {
    title: 'Data Pipeline',
    description: 'Streamlined tools for data processing and transformation.',
    icon: Database,
    status: 'Beta',
    link: '/labs/tools/data-pipeline',
  },
  {
    title: 'Version Control',
    description: 'AI-powered version control and collaboration system.',
    icon: GitBranch,
    status: 'Alpha',
    link: '/labs/tools/version-control',
  },
  {
    title: 'CLI Toolkit',
    description: 'Command-line interface for managing AI workflows.',
    icon: Terminal,
    status: 'Development',
    link: '/labs/tools/cli',
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

export default function ToolsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-4">

        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-labs-primary to-labs-secondary bg-clip-text text-transparent">
            Development Tools
          </h1>
          <p className="text-lg text-labs-muted-foreground">
            Experimental tools and utilities to accelerate AI development and research.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.title}
              variants={itemVariants}
              className="group relative bg-labs-background border border-labs-border rounded-lg p-6 hover:border-labs-primary transition-colors"
            >
              <div className="flex items-start justify-between mb-4">
                <div className="p-2 bg-labs-muted rounded-lg">
                  <tool.icon className="w-6 h-6 text-labs-primary" />
                </div>
                <span className="px-2 py-1 text-xs font-medium bg-labs-muted text-labs-muted-foreground rounded-full">
                  {tool.status}
                </span>
              </div>
              <h3 className="text-xl font-semibold mb-2 text-labs-foreground">
                {tool.title}
              </h3>
              <p className="text-labs-muted-foreground mb-4">
                {tool.description}
              </p>
              <a
                href={tool.link}
                className="inline-flex items-center text-sm font-medium text-labs-primary hover:text-labs-primary/80 transition-colors"
              >
                Learn more
                <svg
                  className="ml-2 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </a>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold mb-4 text-labs-foreground">
            Want to contribute?
          </h2>
          <p className="text-labs-muted-foreground mb-6">
            Join our community of developers and researchers to help shape the future of AI tools.
          </p>
          <a
            href="/labs/join"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-labs-primary text-labs-primary-foreground hover:bg-labs-primary/90 transition-colors"
          >
            Join Labs
          </a>
        </motion.div>
      </div>
    </div>
  )
} 