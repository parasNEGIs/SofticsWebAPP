import { Domain } from '@/lib/theme'
import { StudioHero } from './studio'
import { LabsHero } from './labs'
import { MainHero } from './main'

interface HeroSectionProps {
  domain: Domain
  title?: string
  description?: string
  tagline?: string
}

export function HeroSection({ domain, ...props }: HeroSectionProps) {
  const components = {
    studio: StudioHero,
    labs: LabsHero,
    main: MainHero,
  }

  const Component = components[domain]
  return <Component {...props} />
} 