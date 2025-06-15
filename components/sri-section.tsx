"use client"

import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageSquare } from "lucide-react"
import { SriFoxAvatar } from "@/components/sri-fox-avatar"

export function SriSection() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  return (
    <section className="py-16 md:py-24" id="sri">
      <div className="container px-4 md:px-6">
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className={cn("flex flex-col space-y-6", inView ? "animate-slideUp opacity-0" : "opacity-0")}>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Meet Sri</h2>
            <p className="text-xl text-muted-foreground">
              Your AI co-founder and assistant, ready to help with your AI projects.
            </p>
            <p className="text-muted-foreground">
              Sri combines technical expertise with cultural understanding to provide thoughtful assistance for your AI
              development needs. Ask about AI capabilities, get project recommendations, or explore new ideas together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <Button size="lg" className="gap-2">
                Chat with Sri
                <MessageSquare className="h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Learn More
              </Button>
            </div>
          </div>
          <div
            className={cn("flex justify-center", inView ? "animate-fadeIn opacity-0" : "opacity-0")}
            style={{ animationDelay: "0.3s" }}
          >
            <div className="relative w-full max-w-md aspect-square">
              <SriFoxAvatar />
              <Card className="absolute bottom-0 left-0 w-64 animate-float">
                <CardHeader className="p-4">
                  <CardTitle className="text-sm">Sri</CardTitle>
                  <CardDescription className="text-xs">AI Co-founder</CardDescription>
                </CardHeader>
                <CardContent className="p-4 pt-0">
                  <p className="text-sm">How can I help with your AI project today?</p>
                </CardContent>
                <CardFooter className="p-4 pt-0 text-xs text-muted-foreground">
                  Try: "/help", "/about", or "/capabilities"
                </CardFooter>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
