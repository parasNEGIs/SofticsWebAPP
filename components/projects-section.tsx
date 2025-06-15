"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Image from "next/image"

const projects = [
  {
    title: "Intelligent Document Assistant",
    description: "AI-powered document analysis and question answering system",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["RAG", "LangChain", "Next.js"],
    delay: "0s",
  },
  {
    title: "Cultural Insights Engine",
    description: "Analyzing cultural trends and generating insights from social data",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["NLP", "Data Visualization", "Python"],
    delay: "0.3s",
  },
  {
    title: "Sri - AI Co-founder",
    description: "Experimental AI assistant with personality and domain expertise",
    image: "/placeholder.svg?height=400&width=600",
    tech: ["GPT-4", "Three.js", "React"],
    delay: "0.6s",
  },
]

export function ProjectsSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 md:py-24 bg-secondary/50" id="projects">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Labs</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Experimental projects and case studies showcasing our capabilities.
          </p>
        </div>
        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.title}
              className={cn("overflow-hidden group", inView ? "animate-slideUp opacity-0" : "opacity-0")}
              style={{ animationDelay: project.delay }}
            >
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button variant="secondary" size="sm" className="gap-1">
                    View Project
                    <ArrowUpRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
              <CardHeader>
                <CardTitle>{project.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{project.description}</p>
              </CardContent>
              <CardFooter>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <Badge key={tech} variant="outline">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="flex justify-center mt-12">
          <Button variant="outline" size="lg">
            See More Projects
          </Button>
        </div>
      </div>
    </section>
  )
}
