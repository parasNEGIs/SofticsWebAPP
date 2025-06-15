"use client"

import type React from "react"

import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Github, Linkedin, Mail, MessageSquare, Send, Twitter } from "lucide-react"

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Form submitted:", formState)
    // Reset form
    setFormState({
      name: "",
      email: "",
      subject: "",
      message: "",
    })
    // Show success message
    alert("Thanks for your message! We'll get back to you soon.")
  }

  return (
    <section className="py-16 md:py-24 bg-secondary/50" id="contact">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter">Get in Touch</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Ready to start your AI journey? Let's discuss how we can help bring your ideas to life.
          </p>
        </div>
        <div ref={ref} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className={cn("space-y-6", inView ? "animate-slideUp opacity-0" : "opacity-0")}>
            <div>
              <h3 className="text-xl font-medium mb-2">Contact Information</h3>
              <p className="text-muted-foreground">
                Feel free to reach out through the form or via the contact methods below.
              </p>
            </div>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary" />
                <span>hello@softics.ai</span>
              </div>
              <div className="flex items-center gap-3">
                <MessageSquare className="h-5 w-5 text-primary" />
                <span>Chat with Sri</span>
              </div>
            </div>
            <div>
              <h3 className="text-xl font-medium mb-2">Connect</h3>
              <div className="flex gap-4 mt-4">
                <Button variant="outline" size="icon">
                  <Twitter className="h-5 w-5" />
                  <span className="sr-only">Twitter</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Github className="h-5 w-5" />
                  <span className="sr-only">GitHub</span>
                </Button>
                <Button variant="outline" size="icon">
                  <Linkedin className="h-5 w-5" />
                  <span className="sr-only">LinkedIn</span>
                </Button>
              </div>
            </div>
          </div>
          <div
            className={cn("space-y-6", inView ? "animate-slideUp opacity-0" : "opacity-0")}
            style={{ animationDelay: "0.3s" }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    placeholder="Your name"
                    value={formState.name}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="Your email"
                    value={formState.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">How can Sri help?</Label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a topic" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="ai-assistant">AI Assistant Development</SelectItem>
                    <SelectItem value="llm-app">LLM Application</SelectItem>
                    <SelectItem value="custom-solution">Custom AI Solution</SelectItem>
                    <SelectItem value="integration">AI Integration</SelectItem>
                    <SelectItem value="other">Other</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  placeholder="Tell us about your project or idea"
                  rows={5}
                  value={formState.message}
                  onChange={handleChange}
                  required
                />
              </div>
              <Button type="submit" className="w-full gap-2">
                Send Message
                <Send className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
