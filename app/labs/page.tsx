'use client'

import { LabsHero, ExperimentsSection } from '@/components/sections/labs'
import { SuggestionsSection } from '@/components/sections/labs/join'

export default function LabsPage() {
  return (
    <>
      <LabsHero />
      <ExperimentsSection />
      <SuggestionsSection />
    </>
  );
}