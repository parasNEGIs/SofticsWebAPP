"use client"

import React, { useEffect, useState, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { LabItem } from "@/app/labs/data";

// tag color utility
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

function statusClasses(status: string) {
  const normalized = status.toLowerCase();
  if (normalized === "active" || normalized === "ongoing")
    return "bg-green-600 text-white before:bg-green-400";
  if (normalized === "development") return "bg-amber-500 text-black before:bg-amber-300";
  if (normalized === "beta") return "bg-blue-600 text-white before:bg-blue-400";
  return "bg-gray-600 text-white";
}

interface LabsSlideshowProps {
  items: LabItem[];
}

const FILTERS: { label: string; value: "all" | "active" | "tool" | "study" | "dataset" | "model" }[] = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Tools", value: "tool" },
  { label: "Studies", value: "study" },
  { label: "Datasets", value: "dataset" },
  { label: "Models", value: "model" },
];

export function LabsSlideshow({ items }: LabsSlideshowProps) {
  const [filter, setFilter] = useState< typeof FILTERS[number]["value"] >("all");
  const [selected, setSelected] = useState(0);

  const filtered = items.filter((item) => {
    if (filter === "all") return true;
    if (filter === "active") return item.status !== "Completed";
    return item.type === filter;
  });

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "start" });

  // sync selected index & autoplay
  useEffect(() => {
    if (!emblaApi) return;
    const interval = setInterval(() => {
      emblaApi.scrollNext();
    }, 6000);
    return () => clearInterval(interval);
    emblaApi.on("select", () => setSelected(emblaApi.selectedScrollSnap()));
  }, [emblaApi]);

  // Reset to first slide on filter change
  useEffect(() => {
    if (emblaApi) emblaApi.scrollTo(0);
  }, [filter, emblaApi]);

  const renderSlide = useCallback(
    (item: LabItem) => (
      <div className="embla__slide shrink-0 basis-full p-4" key={item.slug}>
        <Card className="overflow-hidden bg-[#FFE5CC] text-black shadow-lg">
          {item.image && (
            <div className="relative w-full h-56 md:h-64">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 50vw"
                priority
              />
            </div>
          )}
          <CardHeader className="flex flex-row items-center justify-between space-y-0 p-4">
            <CardTitle className="text-lg md:text-xl">{item.title}</CardTitle>
            <Badge className={cn("relative pl-2 pr-3 py-0.5 text-xs font-semibold rounded-full before:content-[''] before:inline-block before:mr-1 before:w-2 before:h-2 before:rounded-full", statusClasses(item.status))}>{item.status}</Badge>
          </CardHeader>
          <CardContent className="space-y-3 p-4 pt-0">
            <p className="text-sm text-muted-foreground">{item.description}</p>
            <div className="flex flex-wrap gap-2">
              {item.tags.map((tag) => (
                <Badge key={tag} className={cn("text-xs lowercase px-2 py-0.5 rounded-full", tagClasses(tag))}>
                  {tag}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    ),
    []
  );

  const scrollPrev = () => emblaApi && emblaApi.scrollPrev();
  const scrollNext = () => emblaApi && emblaApi.scrollNext();

  return (
    <div className="relative">
      {/* Filter bar */}
      <div className="flex flex-wrap gap-3 justify-center mb-8">
        {FILTERS.map((f) => (
          <button
            key={f.value}
            onClick={() => setFilter(f.value)}
            className={cn(
              "px-4 py-2 text-sm rounded-full border transition-colors",
              filter === f.value
                ? "bg-[#FF9933] text-black border-[#FF9933]"
                : "bg-transparent text-gray-300 border-gray-600 hover:border-[#FF9933]"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Embla viewport */}
      <div className="embla overflow-hidden" ref={emblaRef}>
        <motion.div className="embla__container flex" initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          {filtered.map(renderSlide)}
        </motion.div>
      </div>

      {/* arrow buttons */}
      <button onClick={scrollPrev} aria-label="Prev" className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-[#FFB366] text-black shadow hover:bg-[#ffcd99]">
        ‹
      </button>
      <button onClick={scrollNext} aria-label="Next" className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full bg-[#FFB366] text-black shadow hover:bg-[#ffcd99]">
        ›
      </button>

      {/* dots */}
      <div className="flex justify-center gap-2 mt-4">
        {filtered.map((_, idx) => (
          <span
            key={idx}
            className={cn(
              "h-2 w-2 rounded-full",
              idx === selected ? "bg-[#FF9933]" : "bg-gray-500"
            )}
          />
        ))}
      </div>
    </div>
  );
}
