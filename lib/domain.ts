export type Domain = 'studio' | 'labs' | 'main'

export function getCurrentDomain(): Domain {
  if (typeof window === 'undefined') {
    return 'main'
  }
  
  const pathname = window.location.pathname
  if (pathname.startsWith('/studio')) return 'studio'
  if (pathname.startsWith('/labs')) return 'labs'
  return 'main'
}

export function getDomain(): Domain {
  if (typeof window === "undefined") {
    return "main"
  }

  const hostname = window.location.hostname

  if (hostname.startsWith("studio.")) {
    return "studio"
  }

  if (hostname.startsWith("labs.")) {
    return "labs"
  }

  return "main"
}

export function getDomainUrl(domain: Domain): string {
  switch (domain) {
    case "studio":
      return "https://studio.softics.com"
    case "labs":
      return "https://labs.softics.com"
    default:
      return "https://softics.com"
  }
}

export function getDomainTitle(domain: Domain): string {
  switch (domain) {
    case "studio":
      return "Softics Studio - Enterprise AI Solutions"
    case "labs":
      return "Softics Labs - AI Research & Innovation"
    default:
      return "Softics - Intelligent Tools, Thoughtful Systems"
  }
}

export function getDomainDescription(domain: Domain): string {
  switch (domain) {
    case "studio":
      return "Building intelligent tools for enterprise. Transform your business with our AI solutions."
    case "labs":
      return "Pushing the boundaries of AI research. Join us in exploring the future of artificial intelligence."
    default:
      return "Softics is a solo AI development studio creating intelligent tools, thoughtful systems, and cultural code."
  }
}

export function getDomainPath(domain: Domain): string {
  switch (domain) {
    case 'studio':
      return '/studio'
    case 'labs':
      return '/labs'
    default:
      return ''
  }
}

export function getDomainConfig(domain: Domain) {
  return {
    studio: {
      name: 'Softics Studio',
      description: 'Enterprise AI Solutions',
      theme: 'studio',
      analyticsId: 'STUDIO_ANALYTICS_ID',
    },
    labs: {
      name: 'Softics Labs',
      description: 'Experimental AI Innovation',
      theme: 'labs',
      analyticsId: 'LABS_ANALYTICS_ID',
    },
    main: {
      name: 'Softics',
      description: 'Intelligent tools, thoughtful systems, and cultural code',
      theme: 'main',
      analyticsId: 'MAIN_ANALYTICS_ID',
    },
  }[domain]
} 