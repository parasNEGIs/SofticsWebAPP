"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Brush, Globe, Lightbulb, Code } from "lucide-react"

const values = [
  {
    title: "Craft",
    description: "Precision in every pixel",
    icon: Brush,
    delay: "0s",
  },
  {
    title: "Culture",
    description: "Technology with context",
    icon: Globe,
    delay: "0.2s",
  },
  {
    title: "Curiosity",
    description: "Always exploring",
    icon: Lightbulb,
    delay: "0.4s",
  },
  {
    title: "Code",
    description: "Elegant solutions",
    icon: Code,
    delay: "0.6s",
  },
]

export function ValuesSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 md:py-24 bg-secondary/50" id="values">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Our Philosophy</h2>
          <p className="text-muted-foreground max-w-[700px]">
            AI should augment imagination, not just automate. We build tools that enhance human creativity and
            capability.
          </p>
        </div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={cn(
                "flex flex-col items-center text-center p-6 rounded-lg bg-background shadow-sm border transition-all hover:shadow-md",
                inView ? "animate-slideUp opacity-0" : "opacity-0",
              )}
              style={{ animationDelay: value.delay }}
            >
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <value.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-medium mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
