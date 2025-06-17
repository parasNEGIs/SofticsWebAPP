'use client'

import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import Estimator from "@/components/estimator"

import { getThemeClasses } from "@/lib/theme"
import { Domain } from "@/lib/theme"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

interface ContactSectionProps {
  domain: Domain
}

export function ContactSection({ domain }: ContactSectionProps) {

  const theme = getThemeClasses(domain)
  const packages = domain === 'studio'
    ? [
        { name: 'Prototype Sprint', price: '$4k', description: '1–2 weeks – rapid proof-of-concept.' },
        { name: 'MVP Build', price: 'from $12k', description: '4–8 weeks – production-ready core product.' },
        { name: 'AI Partnership', price: '$3k/mo', description: 'Ongoing roadmap, monitoring & improvements.' },
      ]
    : []

  const contactContent = {
    studio: {
      title: "Let's Build Something Great",
      description: "Ready to transform your business with AI? Get in touch with our team.",
      cta: "Contact Sales",
      formFields: [
        { label: "Company Name", type: "text", required: true },
        { label: "Business Email", type: "email", required: true },
        { label: "Project Requirements", type: "textarea", required: true }
      ]
    },
    labs: {
      title: "Join the Innovation",
      description: "Interested in collaborating on cutting-edge AI research? Let's connect.",
      cta: "Join Labs",
      formFields: [
        { label: "Name", type: "text", required: true },
        { label: "Email", type: "email", required: true },
        { label: "Research Interests", type: "textarea", required: true }
      ]
    },
    main: {
      title: "Get in Touch",
      description: "Have questions about our services or want to learn more? Reach out to us.",
      cta: "Send Message",
      formFields: [
        { label: "Name", type: "text", required: true },
        { label: "Email", type: "email", required: true },
        { label: "Message", type: "textarea", required: true }
      ]
    }
  }[domain]

  return (
    <section id="contact" className="relative py-24 bg-background border-y border-border">
      <div className={theme.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={cn("text-3xl md:text-4xl font-bold mb-4", theme.heading)}>
            {contactContent.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {contactContent.description}
          </p>

          {domain === 'studio' && <Estimator />}

        </motion.div>

        {packages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {packages.map((pkg) => (
              <motion.div
                key={pkg.name}
                whileHover={{ scale: 1.05 }}
                className="border border-border rounded-xl p-6 bg-muted/40 backdrop-blur-sm"
              >
                <h3 className="text-xl font-semibold mb-2">{pkg.name}</h3>
                <p className="text-2xl font-bold text-[color:var(--purple-primary)] mb-1">{pkg.price}</p>
                <p className="text-muted-foreground text-sm">{pkg.description}</p>
              </motion.div>
            ))}
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <form className="space-y-6">
            {contactContent.formFields.map((field, index) => (
              <div key={field.label} className="space-y-2">
                <label className="text-sm font-medium">
                  {field.label}
                  {field.required && <span className="text-red-500">*</span>}
                </label>
                {field.type === 'textarea' ? (
                  <Textarea
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                    className="min-h-[100px]"
                  />
                ) : (
                  <Input
                    type={field.type}
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                  />
                )}
              </div>
            ))}
            <Button 
              type="submit"
              className={cn("w-full", theme.button)}
            >
              {contactContent.cta}
            </Button>
          </form>
        </motion.div>
      </div>

      <motion.div
        aria-hidden
        className="absolute left-1/2 top-0 h-72 w-72 -translate-x-1/2 blur-3xl opacity-50 pointer-events-none"
        initial={{ scale: 0.8, rotate: 0 }}
        animate={{ scale: [0.8, 1.1, 0.8], rotate: [0, 360] }}
        transition={{ repeat: Infinity, duration: 30, ease: 'linear' }}
        style={{ background: 'conic-gradient(var(--purple-primary), var(--saffron-orange), var(--purple-primary))' }}
      />

    </section>
  )
} 