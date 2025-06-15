export interface LabItem {
  title: string;
  description: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  status: string;
}

import { Brain, Code, Cpu, Database, GitBranch, Lightbulb, Terminal } from "lucide-react";

export const experiments: LabItem[] = [
  {
    title: "Sri AI Assistant",
    description: "Meet our AI co-founder and studio assistant",
    href: "/labs/sri",
    icon: Brain,
    status: "Active",
  },
  {
    title: "Intelligent Document Assistant",
    description: "AI-powered document analysis & Q&A",
    href: "/labs/experiments/document-assistant",
    icon: Database,
    status: "Beta",
  },
  {
    title: "Cultural Insights Engine",
    description: "Analyzing cultural trends from social data",
    href: "/labs/experiments/cultural-insights",
    icon: Lightbulb,
    status: "Research",
  },
];

export const tools: LabItem[] = [
  {
    title: "Code Playground",
    description: "Interactive coding environment for experiments",
    href: "/labs/tools/playground",
    icon: Code,
    status: "Alpha",
  },
  {
    title: "AI Model Hub",
    description: "Collection of fine-tuned AI models",
    href: "/labs/tools/model-hub",
    icon: Cpu,
    status: "Development",
  },
  {
    title: "Version Control",
    description: "AI-powered version control system",
    href: "/labs/tools/version-control",
    icon: GitBranch,
    status: "Alpha",
  },
  {
    title: "CLI Toolkit",
    description: "Command-line interface for AI workflows",
    href: "/labs/tools/cli",
    icon: Terminal,
    status: "Development",
  },
];
