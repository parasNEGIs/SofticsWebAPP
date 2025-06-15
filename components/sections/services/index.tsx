"use client"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Bot, Brain, Code, Database, MessageSquare, Sparkles } from "lucide-react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const services = [
  {
    title: "AI Assistants & Chatbots",
    description: "Custom AI assistants that understand your business and customers",
    icon: Bot,
    tech: ["OpenAI", "LangChain", "Vector DB"],
    delay: "0s",
  },
  {
    title: "LLM Applications",
    description: "Specialized large language model applications for your domain",
    icon: Brain,
    tech: ["GPT-4", "Claude", "Llama"],
    delay: "0.2s",
  },
  {
    title: "Custom AI Solutions",
    description: "Bespoke AI solutions tailored to your specific needs",
    icon: Sparkles,
    tech: ["TensorFlow", "PyTorch", "Hugging Face"],
    delay: "0.4s",
  },
  {
    title: "AI Integration",
    description: "Seamlessly integrate AI capabilities into your existing systems",
    icon: Code,
    tech: ["REST API", "GraphQL", "WebSockets"],
    delay: "0.6s",
  },
  {
    title: "Conversational UX",
    description: "Design intuitive conversational experiences for your users",
    icon: MessageSquare,
    tech: ["UX Research", "Prompt Engineering", "Conversation Design"],
    delay: "0.8s",
  },
  {
    title: "Data & Knowledge Systems",
    description: "Build intelligent knowledge bases and data systems",
    icon: Database,
    tech: ["RAG", "Knowledge Graphs", "Embeddings"],
    delay: "1s",
  },
]

export function ServicesSection() {
  const [activeCard, setActiveCard] = useState<number | null>(null)
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 md:py-24" id="services">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Services</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Specialized AI development services to help you build intelligent tools and systems.
          </p>
          <div className="flex justify-center mt-4">
            <Link href="/studio/services">
              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                See all services
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <Link href="/studio/services" key={service.title} className="block group">
              <Card
                className={cn(
                  "transition-all duration-300 cursor-pointer border-2",
                  activeCard === index ? "border-primary shadow-lg" : "border-transparent",
                  inView ? "animate-slideUp opacity-0" : "opacity-0",
                )}
                style={{ animationDelay: service.delay }}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
              >
                <CardHeader>
                  <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div
                    className={cn("h-0 overflow-hidden transition-all duration-300", activeCard === index ? "h-20" : "")}
                  >
                    <p className="text-sm text-muted-foreground mb-4">
                      Let us help you leverage the power of AI to transform your business and create exceptional user
                      experiences.
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <div className="flex flex-wrap gap-2">
                    {service.tech.map((tech) => (
                      <Badge key={tech} variant="secondary">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardFooter>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 