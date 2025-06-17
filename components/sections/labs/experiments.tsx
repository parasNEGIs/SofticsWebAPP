"use client";

import React from "react";
import { motion } from "framer-motion";
import { experiments, tools, type LabItem } from "@/app/labs/data";
import { projects } from "@/components/projects-section";
import { LabsSlideshow } from "./slideshow";
import { Card, CardHeader, CardContent, CardTitle } from "@/components/ui/card";
import Link from "next/link"
import { ArrowRight, Bot } from "lucide-react";
import { Badge } from "@/components/ui/badge";

import { ShowcaseCarousel } from "./showcase";

export function ExperimentsSection() {
  const items = [...experiments, ...tools];
  const mappedProjects = projects.map(p => ({
    slug: p.title.toLowerCase().replace(/\s+/g, "-"),
    href: "#", // placeholder
    title: p.title,
    description: p.description,
    image: p.image,
    status: "Completed" as const,
    type: "tool" as const,
    tags: (p.tech ?? []) as string[],
    featured: true,
  }));
  const sriItem = items.find(i=>i.slug==='sri')!;
  const extraCard = {
    slug: "ai-lab-ide",
    href: "#",
    title: "AI Lab IDE",
    description: "In-browser IDE optimised for AI experiments",
    image: "/placeholder.svg",
    status: "Completed" as const,
    type: "tool" as const,
    tags: ["ide", "react"],
    featured: true,
  } satisfies LabItem;

  const showcaseItems = [...items.filter(i => i.featured && i.slug !== 'sri'), ...mappedProjects, extraCard];

  return (
    <section id="experiments" className="py-24">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#FF9933] drop-shadow-[0_0_4px_rgba(255,153,51,0.9)]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experiments &amp; Tools
        </motion.h2>
          <div className="my-8 flex justify-center">
          <Link href="/labs/experiments" className="inline-flex items-center gap-2 bg-[#FF9933] hover:bg-[#E6851A] text-black font-medium rounded-md px-6 py-2 transition-colors">
            <span>View All Experiments</span>
            <ArrowRight className="h-4 w-4" />
          </Link>
          </div>

        {/* main slideshow */}
        <LabsSlideshow items={items} />

        {/* Showcase of featured projects */}
        <ShowcaseCarousel items={showcaseItems} />

        {/* Sri static card */}
        {sriItem && (
          <div id="sri" className="mt-8 px-2">
            <div className="max-w-4xl mx-auto">
              <Card className="overflow-hidden bg-[#FFE5CC] text-black shadow-lg flex flex-col lg:flex-row items-center">
                {/* Sri icon */}
                  <div className="relative w-full lg:w-1/3 h-56 md:h-72 flex items-center justify-center bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[color:var(--saffron-orange)]/20 via-transparent to-transparent">
                    <Bot className="h-24 w-24 text-black drop-shadow-[0_0_6px_rgba(255,153,51,0.8)] animate-float" />
                  </div>
                <div className="flex-1 flex flex-col"> 
                <CardHeader className="flex flex-col items-start gap-3 p-6 pb-0">
                  <CardTitle className="text-2xl md:text-3xl font-bold leading-snug">Meet Sri – Your AI Research Partner</CardTitle>
                  <Badge className="relative pl-2 pr-3 py-0.5 text-sm font-semibold rounded-full before:content-[''] before:inline-block before:mr-1 before:w-2 before:h-2 before:rounded-full bg-green-600 text-white before:bg-green-400">Active</Badge>
                  </CardHeader>
                <CardContent className="p-6 pt-0 flex flex-col gap-6">
                  <div className="space-y-4">
                    <p className="max-w-prose">
                      Sri is an experimental conversational agent that helps you brainstorm ideas, explore code, and prototype AI solutions directly in the browser. Think of it as your on-call lab partner.
                    </p>
                    <ul className="list-disc list-inside space-y-2">
                      <li>Explain ML papers in plain English</li>
                      <li>Generate experiment blueprints</li>
                      <li>Suggest tooling & datasets</li>
                    </ul>
                  </div>
                  <div className="flex flex-col gap-4">
                    <a href="/labs/experiments/sri" className="inline-flex items-center gap-2 self-start bg-[#FF9933] hover:bg-[#E6851A] text-black font-medium rounded-md px-6 py-2 transition-colors">
                      <span>Try Sri</span>
                      <ArrowRight className="h-4 w-4" />
                    </a>
                    <div className="flex flex-wrap gap-3">
                      {sriItem.tags.map(t => (
                        <Badge key={t} className="bg-purple-600 text-white text-sm px-3 py-0.5 rounded-full lowercase">
                          {t}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
                </div>
              </Card>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}