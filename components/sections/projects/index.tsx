import { motion } from "framer-motion"
import { cn } from "@/lib/utils"
import { getThemeClasses } from "@/lib/theme"
import { Domain } from "@/lib/theme"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

interface ProjectsSectionProps {
  domain: Domain
}

export function ProjectsSection({ domain }: ProjectsSectionProps) {
  const theme = getThemeClasses(domain)

  const projects = {
    studio: [
      {
        title: "Enterprise AI Platform",
        description: "Custom AI solution for enterprise data processing",
        image: "/projects/enterprise-ai.jpg",
        tags: ["AI", "Enterprise", "Integration"]
      },
      {
        title: "AI-Powered Analytics",
        description: "Advanced analytics platform with AI insights",
        image: "/projects/analytics.jpg",
        tags: ["Analytics", "AI", "Data"]
      },
      {
        title: "Smart Automation",
        description: "Intelligent automation for business processes",
        image: "/projects/automation.jpg",
        tags: ["Automation", "AI", "Process"]
      }
    ],
    labs: [
      {
        title: "Neural Architecture",
        description: "Experimental neural network architecture",
        image: "/projects/neural.jpg",
        tags: ["Research", "Neural Networks", "AI"]
      },
      {
        title: "AI Art Generator",
        description: "Creative AI for artistic expression",
        image: "/projects/art.jpg",
        tags: ["Creative AI", "Art", "Innovation"]
      },
      {
        title: "Quantum AI",
        description: "Exploring quantum computing in AI",
        image: "/projects/quantum.jpg",
        tags: ["Quantum", "AI", "Research"]
      }
    ],
    main: [
      {
        title: "Studio Projects",
        description: "Professional AI solutions for enterprises",
        image: "/projects/studio.jpg",
        tags: ["Enterprise", "AI", "Solutions"]
      },
      {
        title: "Labs Experiments",
        description: "Cutting-edge AI research and innovation",
        image: "/projects/labs.jpg",
        tags: ["Research", "Innovation", "AI"]
      },
      {
        title: "Sri AI Assistant",
        description: "Intelligent AI assistant for productivity",
        image: "/projects/sri.jpg",
        tags: ["AI Assistant", "Productivity", "Innovation"]
      }
    ]
  }[domain]

  return (
    <section id="work" className="py-24 bg-background">
      <div className={theme.container}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className={cn("text-3xl md:text-4xl font-bold mb-4", theme.heading)}>
            {domain === 'studio' ? 'Our Projects' : 
             domain === 'labs' ? 'Experiments & Prototypes' : 
             'Featured Work'}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {domain === 'studio' ? 'Enterprise AI solutions that drive results' :
             domain === 'labs' ? 'Pushing the boundaries of AI innovation' :
             'A showcase of our work across Studio and Labs'}
          </p>
          {(domain === 'main' || domain === 'studio') && (
            <div className="flex justify-center mt-4">
              <Link href="/studio/projects">
                <Button className="bg-primary text-primary-foreground hover:bg-primary/90 gap-2">
                  See all projects
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          )}
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link href="/studio/projects" key={project.title} className="block group">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={cn(
                  "group relative overflow-hidden rounded-lg border",
                  theme.card
                )}
              >
                <div className="aspect-video relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                  {/* Add actual images later */}
                  <div className="absolute inset-0 bg-muted" />
                </div>
                
                <div className="p-6">
                  <h3 className={cn("text-xl font-semibold mb-2", theme.heading)}>
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map(tag => (
                      <span
                        key={tag}
                        className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="ghost" 
                    className="p-0 h-auto hover:bg-transparent"
                  >
                    View project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
} 