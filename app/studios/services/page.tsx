'use client'

import Link from "next/link"
import { Button } from "@/components/ui/button"




import { ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

export default function StudioServicesPage() {
  return (
    <div className="pt-24 pb-16">
      <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl text-center mx-auto mb-16"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            Services
          </h1>
          <p className="text-lg text-muted-foreground">
            End-to-end solutions from strategy to production, crafted for impact.
          </p>
        </motion.div>

        <motion.div
          variants={{ hidden: { opacity: 0 }, visible: { opacity: 1, transition: { staggerChildren: 0.1 } } }}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {[
            { title: 'Product Strategy', desc: 'Identify high-value AI opportunities aligned with your business goals.', icon: 'Target' },
            { title: 'Rapid Prototyping', desc: 'Validate ideas quickly with interactive proofs-of-concept.', icon: 'Rocket' },
            { title: 'Full-Stack Development', desc: 'Ship robust, scalable applications built with Next.js & TypeScript.', icon: 'Code' },
            { title: 'Model Training', desc: 'Fine-tune or build custom models with state-of-the-art techniques.', icon: 'BrainCircuit' },
            { title: 'Cloud Deployment', desc: 'Secure, cost-effective infrastructure on Vercel & AWS.', icon: 'Cloud' },
            { title: 'Ongoing Support', desc: 'Monitoring, maintenance, and iterative improvements.', icon: 'LifeBuoy' },
          ].map((svc) => (
            <motion.div
              key={svc.title}
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
              className="group relative bg-background border border-border rounded-lg p-6 hover:border-[color:var(--purple-primary)] transition-colors"
            >
              <div className="p-2 bg-muted rounded-lg w-fit mb-4">
                <ArrowRight className="w-6 h-6 text-[color:var(--purple-primary)]" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{svc.title}</h3>
              <p className="text-muted-foreground text-sm">{svc.desc}</p>
            </motion.div>
          ))}
        </motion.div>

        <div className="mt-20 text-center">
          <Link href="/studio/contact">
            <Button className="px-6 py-3 text-base font-semibold" variant="default">
              Request Proposal
            </Button>
          </Link>
        </div>
        </div>
  )
}