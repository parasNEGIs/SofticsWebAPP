import { Domain } from '@/lib/domain'
import { getDomainConfig } from '@/lib/domain'
import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'

interface HeaderProps {
  domain: Domain
}

export function Header({ domain }: HeaderProps) {
  const config = getDomainConfig(domain)
  
  const navigation = {
    studio: [
      { label: 'Services', href: '/studio/services' },
      { label: 'Projects', href: '/studio/projects' },
      { label: 'About', href: '/studio/about' },
      { label: 'Contact', href: '/studio/contact' },
    ],
    labs: [
      { label: 'Experiments', href: '/labs/experiments' },
      { label: 'Prototypes', href: '/labs/prototypes' },
      { label: 'Sri', href: '/labs/sri' },
      { label: 'Join', href: '/labs/join' },
    ],
    main: [
      { label: 'Studio', href: '/studio' },
      { label: 'Labs', href: '/labs' },
      { label: 'Blog', href: '/blogs' },
    ],
  }[domain]

  return (
    <header className={cn(
      "fixed top-0 w-full z-50 bg-background/80 backdrop-blur-sm border-b",
      `theme-${config.theme}`
    )}>
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <a href={`/${domain}`} className="text-xl font-bold">
          {config.name}
        </a>
        
        <nav className="hidden md:flex items-center space-x-6">
          {navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium hover:text-primary transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm">
            {domain === 'studio' ? 'Contact Us' : 'Join Labs'}
          </Button>
        </div>
      </div>
    </header>
  )
} 