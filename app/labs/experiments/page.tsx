"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { allExperiments } from 'contentlayer/generated';
import type { Experiment } from 'contentlayer/generated';
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { getThemeClasses } from "@/lib/theme";

export default function ExperimentsLibraryPage() {
  // Color mapping for experiment types
  // Base colors for each type
  const typeBase: Record<string, {border: string; fill: string; text?: string}> = {
    tool:   { border: "border-blue-500 text-blue-500",   fill: "bg-blue-600 hover:bg-blue-700 text-white" },
    dataset: { border: "border-purple-500 text-purple-500", fill: "bg-purple-600 hover:bg-purple-700 text-white" },
    model:   { border: "border-green-500 text-green-500",  fill: "bg-green-600 hover:bg-green-700 text-white" },
    study:   { border: "border-yellow-500 text-yellow-500", fill: "bg-yellow-500 hover:bg-yellow-600 text-black" },
  };

  const theme = getThemeClasses("labs");
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState<string>("all");

  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  const filtered = useMemo<Experiment[]>(() => {
    return allExperiments.filter((exp) => {
      const matchesQuery = [exp.title, exp.description, ...exp.tags]
        .join(" ")
        .toLowerCase()
        .includes(query.toLowerCase());
      const matchesFilter = filter === "all" || exp.type === filter;
      const matchesTags =
        selectedTags.length === 0 || selectedTags.every((t) => exp.tags.includes(t));
      return matchesQuery && matchesFilter && matchesTags;
    });
  }, [query, filter, selectedTags]);

  const types = Array.from(new Set(allExperiments.map((e) => e.type)));
  const tags = Array.from(new Set(allExperiments.flatMap((e) => e.tags)));

  const toggleTag = (t: string) => {
    setSelectedTags((prev) =>
      prev.includes(t) ? prev.filter((x) => x !== t) : [...prev, t]
    );
  };

  return (
    <main className="pb-32">
      {/* Hero */}
      <section className="relative py-24 flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ backgroundImage: "var(--labs-gradient)", opacity: 0.18 }}
        />
        <h1 className="relative z-10 text-4xl md:text-5xl font-extrabold text-white drop-shadow-[0_0_8px_rgba(255,153,51,0.6)]">
          Experiments Library
        </h1>
      </section>

      {/* Search Full Width */}
      <div className="px-4 sm:px-6 lg:px-8 mt-6">
        <Input
          placeholder="Search experiments…"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full bg-transparent border border-white/30 focus:border-[color:var(--saffron-orange)] focus:ring-0 text-white placeholder-gray-400"
        />
      </div>

      {/* Layout */}
      <section className="mt-12 flex gap-10 px-4 sm:px-6 lg:px-8">
        {/* Sidebar */}
        <aside className="w-full md:w-60 lg:w-72 flex-shrink-0 space-y-8">

          {/* Type Filter */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-200">Type</h3>
            <div className="flex flex-wrap gap-2">
              <Button
                size="sm"
                variant={filter === "all" ? "default" : "outline"}
                onClick={() => setFilter("all")}
                className="text-white border-white/30"
              >
                All
              </Button>
              {types.map((t) => {
                const key = t.toLowerCase();
                const active = filter === t;
                const colorSet = typeBase[key];
                return (
                  <Button
                    key={t}
                    size="sm"
                    variant="outline"
                    onClick={() => setFilter(t)}
                    className={cn(
                      "capitalize px-3 py-1 text-xs rounded-md transition-colors",
                      active ? colorSet?.fill : colorSet?.border,
                    )}
                  >
                    {t}
                  </Button>
                );
              })}
            </div>
          </div>

          {/* Tag Filter */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-200">Tags</h3>
            <div className="flex flex-wrap gap-2">
              {tags.map((t) => (
                <Button key={t} size="sm" variant={selectedTags.includes(t) ? "default" : "outline"} onClick={() => toggleTag(t)} className="lowercase text-white">
                  {t}
                </Button>
              ))}
            </div>
          </div>

          {/* Legend */}
          <div className="space-y-3">
            <h3 className="font-semibold text-gray-200">Status</h3>
            <div className="flex flex-col gap-2 text-sm text-gray-200">
              {([
                { label: "Active", color: "bg-green-600" },
                { label: "Development", color: "bg-blue-600" },
                { label: "Beta", color: "bg-yellow-500 text-black" },
              ] as const).map((s) => (
                <Button
                  key={s.label}
                  size="sm"
                  variant="default"
                  className={cn(
                    "flex items-center gap-2 px-2 py-0.5 text-xs rounded-md hover:bg-transparent", 
                    s.color,
                    s.color.includes("text-black") ? "text-black hover:text-white" : "text-white"
                  )}
                >
                  <span className={cn("w-2 h-2 rounded-full", s.color.replace(" text-black", ""))} />
                  {s.label}
                </Button>
              ))}
            </div>
          </div>
        </aside>

        {/* Grid */}
        <div className="flex-1">
          {filtered.length === 0 && (
            <p className="text-center text-gray-400">No experiments found.</p>
          )}
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filtered.map((exp) => (
              <Link
                key={exp.slug}
                href={`/labs/experiments/${exp.slug}`}
                className="group rounded-lg overflow-hidden bg-[#FFE5CC]/5 border border-white/15 hover:border-[#FF9933] transition-colors"
              >
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={exp.image}
                    alt={exp.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 flex flex-col gap-3">
                  <div className="flex items-center gap-2">

                    <h3 className="text-xl font-semibold tracking-tight text-white group-hover:text-[#FF9933] transition-colors">
                      {exp.title}
                    </h3>
                  </div>
                  <p className="text-sm text-gray-300 line-clamp-2 min-h-[40px]">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    <Badge className="capitalize bg-[#FF9933] text-black">{exp.status}</Badge>
                    {exp.tags.map((t) => (
                      <Badge
                        key={t}
                        variant="outline"
                        className="lowercase border-white/30 text-gray-300"
                      >
                        {t}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      </main>
  );
}
