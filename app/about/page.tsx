export const metadata = {
  title: 'About | Softics',
  description: 'Learn about Softics – a solo AI development studio building intelligent tools, thoughtful systems, and cultural code.',
}

export default function AboutPage() {
  return (
    <section className="container mx-auto max-w-4xl px-4 py-12 space-y-16">
      {/* Hero */}
      <header className="space-y-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight">About Softics</h1>
        <p className="mx-auto max-w-2xl text-muted-foreground text-lg">
          Softics is where AI meets imagination. We don’t just automate—we <em>augment</em>. Our mission is to enhance human
          creativity and capability through intelligent technology.
        </p>
      </header>

      {/* Mission */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Mission Statement</h2>
        <p>
          Softics is a solo AI studio founded by Paras. Every tool we build, every system we design, and every line of code we
          write serves one purpose: empowering people through thoughtful, culturally-aware AI. We balance rigorous engineering
          with playful experimentation, always guided by our core values.
        </p>
      </section>

      {/* Core Values */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Core Values</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>
            <strong>🎨 Craft</strong> – Precision in every pixel, elegance in every algorithm.
          </li>
          <li>
            <strong>🌍 Culture</strong> – Global perspective, local context, human-centred design.
          </li>
          <li>
            <strong>🔍 Curiosity</strong> – Always exploring, experimenting, and learning.
          </li>
          <li>
            <strong>💻 Code</strong> – Clean, maintainable, purposeful development.
          </li>
        </ul>
      </section>

      {/* What makes us special */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">What Makes Us Special</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Professional + Experimental: balancing enterprise credibility with innovative features.</li>
          <li>Sri AI Integration: our in-house AI co-founder and studio assistant.</li>
          <li>Interactive Design: smooth animations, micro-interactions, and delightful UX.</li>
          <li>Cultural Intelligence: built with global accessibility and sensitivity.</li>
          <li>Open-Source Mindset: we share selected tools and insights with the community.</li>
        </ul>
      </section>

      {/* Tech stack */}
      <section className="space-y-6">
        <h2 className="text-2xl font-semibold">Technical Stack</h2>
        <p>
          Our primary toolkit includes Next.js 14 (App Router), TypeScript, Tailwind CSS, Framer Motion, and shadcn/ui. We deploy on
          Vercel with GitHub Actions providing CI/CD automation.
        </p>
      </section>

      {/* Call to action */}
      <section className="space-y-4 text-center">
        <h2 className="text-2xl font-semibold">Let’s Collaborate</h2>
        <p>
          Whether you’re looking to build an AI-powered product, explore experimental ideas in our Labs, or simply chat about the
          future of human-AI collaboration, we’d love to hear from you.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center rounded-md bg-purple-primary px-6 py-3 text-white hover:bg-purple-dark transition-colors"
        >
          Get in touch
        </a>
      </section>
    </section>
  )
}
