"use client"

import React from "react"
import { motion } from "framer-motion"
import Link from "next/link"
import { tools } from "@/app/labs/data"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function ToolsSection() {
  return (
    <section id="tools" className="py-24 bg-muted/40">
      <div className="container mx-auto px-4 md:px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-semibold text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Development Tools
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool, idx) => (
            <motion.div
              key={tool.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <Link href={tool.href} className="block group">
                <Card className="transition-shadow hover:shadow-xl">
                  <CardHeader className="flex flex-row items-start justify-between">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      {React.createElement(tool.icon, { className: "w-6 h-6 text-primary" })}
                    </div>
                    <Badge variant="secondary">{tool.status}</Badge>
                  </CardHeader>
                  <CardContent>
                    <CardTitle className="mb-2 group-hover:text-primary transition-colors">
                      {tool.title}
                    </CardTitle>
                    <p className="text-muted-foreground text-sm">
                      {tool.description}
                    </p>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
