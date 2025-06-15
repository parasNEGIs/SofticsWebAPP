'use client'

import { LabsHero, ExperimentsSection, ToolsSection } from '@/components/sections/labs'
import { SuggestionsSection } from '@/components/sections/labs/join'
import { SriSection } from '@/components/sections/sri/labs'

export default function LabsPage() {
  return (
    <>
      <LabsHero />
      <ExperimentsSection />
      <ToolsSection />
      <SriSection />
      <SuggestionsSection />
    </>
  );
}