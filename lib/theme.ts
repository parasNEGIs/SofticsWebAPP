import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
import { Domain } from "./domain"

interface ThemeClasses {
  container: string
  heading: string
  subheading: string
  button: string
  card: string
  link: string
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getThemeClasses(domain: Domain): ThemeClasses {
  const baseClasses = {
    container: "container mx-auto px-4 sm:px-6 lg:px-8",
    heading: "text-foreground",
    subheading: "text-muted-foreground",
    button: "bg-purple-500 hover:bg-purple-600 text-white",
    card: "bg-card text-card-foreground rounded-lg border shadow-sm",
    link: "text-purple-500 hover:text-purple-600"
  }

  const domainSpecificClasses = {
    studio: {
      heading: "text-purple-500",
      button: "bg-purple-500 hover:bg-purple-600 text-white",
      link: "text-purple-500 hover:text-purple-600"
    },
    labs: {
      heading: "text-[color:var(--saffron-orange)]",
      button: "bg-[color:var(--saffron-orange)] hover:bg-[color:var(--saffron-dark)] text-white",
      subheading: "text-gray-300",
      link: "text-[color:var(--saffron-orange)] hover:text-[color:var(--saffron-dark)]"
    },
    main: {
      heading: "text-purple-500",
      button: "bg-purple-500 hover:bg-purple-600 text-white",
      link: "text-purple-500 hover:text-purple-600"
    }
  }

  return {
    ...baseClasses,
    ...domainSpecificClasses[domain]
  }
}

export function getDomainColor(domain: Domain): string {
  switch (domain) {
    case "studio":
      return "var(--purple-primary)"
    case "labs":
      return "var(--saffron-orange)"
    default:
      return "var(--purple-primary)"
  }
}

export function getDomainGradient(domain: Domain): string {
  switch (domain) {
    case "studio":
      return "from-purple-500 to-purple-600"
    case "labs":
      return "from-saffron-orange to-saffron-dark"
    default:
      return "from-purple-500 to-purple-600"
  }
}

export function getDomainAnimation(domain: Domain): string {
  switch (domain) {
    case "studio":
      return "animate-pulse"
    case "labs":
      return "animate-bounce"
    default:
      return "animate-pulse"
  }
} 