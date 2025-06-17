"use client";

import React from "react";
import { cn } from "@/lib/utils";

import Image from "next/image";
import { motion } from "framer-motion";
import { LabItem } from "@/app/labs/data";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const TYPE_TAGS = ["tool", "study", "dataset", "model"];
const DOMAIN_TAGS = ["ai", "assistant", "social", "nlp"];
const TECH_TAGS = ["git", "cli", "rag", "langchain", "next.js", "python", "data", "three.js", "react"];

function tagClasses(tag: string) {
  const lower = tag.toLowerCase();
  if (TYPE_TAGS.includes(lower)) return "bg-purple-600 text-white";
  if (DOMAIN_TAGS.includes(lower)) return "bg-green-600 text-white";
  if (TECH_TAGS.includes(lower)) return "bg-amber-600 text-black";
  return "bg-gray-700 text-white";
}

function renderCard(item: ShowcaseItem) {
  return (
    <Card className="overflow-hidden bg-[#FFE5CC] text-black shadow-lg h-full flex flex-col">
      {item.image && (
        <div className="relative w-full h-48">
          <Image src={item.image} alt={item.title} fill className="object-cover" sizes="(max-width:768px) 100vw, 25vw" />
        </div>
      )}
      <CardHeader className="flex flex-row items-center justify-between p-4">
        <CardTitle className="text-lg">{item.title}</CardTitle>
        {item.status && (
          <Badge className={cn("relative pl-2 pr-3 py-0.5 text-xs font-semibold rounded-full before:content-[''] before:inline-block before:mr-1 before:w-2 before:h-2 before:rounded-full", statusClasses(item.status))}>
            {item.status}
          </Badge>
        )}
      </CardHeader>
      <CardContent className="p-4 pt-0 flex-1">
        <p className="text-sm text-muted-foreground mb-2">{item.description}</p>
        <div className="flex flex-wrap gap-2 mt-auto">
          {item.tags.map((t) => (
            <Badge key={t} className={cn("text-xs lowercase px-2 py-0.5 rounded-full", tagClasses(t))}>
              {t}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}

function statusClasses(status: string) {
  const normalized = status.toLowerCase();
  if (normalized === "active") return "bg-green-600 text-white before:bg-green-400";
  if (normalized === "development") return "bg-amber-500 text-black before:bg-amber-300";
  if (normalized === "beta") return "bg-blue-600 text-white before:bg-blue-400";
  return "hidden"; // hide other statuses
}

interface ShowcaseItem extends LabItem { special?: boolean }

interface ShowcaseProps {
  items: ShowcaseItem[];
  title?: string;
}

export function ShowcaseCarousel({ items, title = "Showcase" }: ShowcaseProps) {
  return (
    <section className="mt-24">
      <motion.h3
        className="text-3xl md:text-4xl font-extrabold text-center mb-12 text-[#FF9933] drop-shadow-[0_0_4px_rgba(255,153,51,0.9)]"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        {title}
      </motion.h3>
      <div className="flex gap-6 overflow-x-auto justify-center py-2 px-1 whitespace-nowrap scrollbar-hide">
        {items.map((item) => (
          <div key={item.slug} className={cn("inline-block", item.special ? "w-[22rem]" : "w-72") }>
            {renderCard(item)}
          </div>
        ))}
      </div>
    </section>
  );
}
