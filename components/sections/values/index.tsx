import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { getThemeClasses } from "@/lib/theme"
import { Domain } from "@/lib/theme"

interface ValuesSectionProps {
  domain?: Domain
}

export function ValuesSection({ domain = 'main' }: ValuesSectionProps) {
  const theme = getThemeClasses(domain)

  const values = [
    {
      title: "Craft",
      description: "Precision in every pixel - clean, maintainable code that stands the test of time.",
      icon: "🎨"
    },
    {
      title: "Culture",
      description: "Thoughtful user experience with cultural context, making technology accessible to all.",
      icon: "🌍"
    },
    {
      title: "Curiosity",
      description: "Always exploring - experimental features that push boundaries and inspire innovation.",
      icon: "🔬"
    },
    {
      title: "Code",
      description: "Elegant solutions - preferring readable over clever, maintainable over complex.",
      icon: "💻"
    }
  ]

  return (
    <section id="values" className="py-24 bg-background">
      <div className={theme.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={cn("text-3xl md:text-4xl font-bold mb-4", theme.heading)}>
            Our Values
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that guide our work and shape our culture
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <motion.div
              key={value.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={cn(
                "p-6 rounded-lg border",
                theme.card
              )}
            >
              <div className="text-4xl mb-4">{value.icon}</div>
              <h3 className={cn("text-xl font-semibold mb-2", theme.heading)}>
                {value.title}
              </h3>
              <p className="text-muted-foreground">
                {value.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
} 