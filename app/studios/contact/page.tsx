

import { Metadata } from 'next'

import { ContactSection } from '@/components/sections/contact'
import dynamic from 'next/dynamic'

const Estimator = dynamic(() => import('@/components/estimator'), { ssr: false })

export const metadata: Metadata = {
  title: 'Contact | Softics Studio',
  description: 'Get in touch with the Softics Studio team to discuss your AI project.',
}



export default function StudioContactPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-3xl text-center mx-auto mb-12">
        <h1 className="text-5xl md:text-6xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Get in Touch
        </h1>
        <p className="text-lg text-muted-foreground">
          Ready to build something remarkable with AI? Tell us about your idea and we’ll reach out within one business day.
        </p>
      </div>

            <Estimator />

            <ContactSection domain="studio" />
    </div>
  )
}
