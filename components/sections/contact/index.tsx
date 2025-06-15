import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
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
    <section id="contact" className="py-24 bg-background">
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
        </motion.div>

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
    </section>
  )
} 