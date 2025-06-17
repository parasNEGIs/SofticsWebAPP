import Link from 'next/link'

export const metadata = {
  title: 'Terms of Service | Softics',
  description: 'The legal terms and conditions governing the use of Softics products, services, and website.',
}

export default function TermsPage() {
  return (
    <section className="container mx-auto max-w-3xl px-4 pt-28 pb-12 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Terms of Service</h1>
        <p className="text-muted-foreground">Last updated: 16 June 2025</p>
      </header>

      <article className="prose prose-invert prose-lg dark:prose-invert">
        <h2>1. Introduction</h2>
        <p>
          Welcome to Softics (“we”, “our”, “us”). These Terms of Service (“Terms”) govern your access to and use
          of our website, products, and services (collectively, the “Services”). By accessing or using the Services,
          you agree to be bound by these Terms.
        </p>

        <h2>2. Acceptance of Terms</h2>
        <p>
          If you do not agree to these Terms, you must not use our Services. We may revise these Terms at any time by
          posting the updated version on this page. Your continued use constitutes acceptance of the revised Terms.
        </p>

        <h2>3. Services Description</h2>
        <p>
          Softics provides AI–powered software tools, experimentation spaces (“Labs”), consulting services (“Studio”),
          and related digital content. Specific features may change or be discontinued without notice.
        </p>

        <h2>4. Intellectual Property</h2>
        <p>
          Unless otherwise stated, all content, code, and materials on the Services are the property of Softics and are
          protected by intellectual-property laws. You may not reproduce, distribute, or create derivative works without
          prior written permission.
        </p>

        <h2>5. User Responsibilities</h2>
        <ul>
          <li>Provide accurate information and maintain the confidentiality of your credentials.</li>
          <li>Use the Services only for lawful purposes and in compliance with all applicable laws.</li>
          <li>Respect the rights of other users and third parties.</li>
        </ul>

        <h2>6. Termination</h2>
        <p>
          We reserve the right to suspend or terminate your access to the Services at our discretion, without notice, for
          conduct that we believe violates these Terms or is harmful to other users or Softics.
        </p>

        <h2>7. Disclaimer of Warranties</h2>
        <p>
          The Services are provided “as is” and “as available.” We disclaim all warranties, express or implied, including
          merchantability, fitness for a particular purpose, and non-infringement.
        </p>

        <h2>8. Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, Softics shall not be liable for any indirect, incidental, consequential,
          or punitive damages arising out of or relating to your use of the Services.
        </p>

        <h2>9. Governing Law</h2>
        <p>
          These Terms are governed by and construed in accordance with the laws of India, without regard to its conflict
          of law principles.
        </p>

        <h2>10. Contact</h2>
        <p>
          Questions about these Terms? Email us at <Link href="mailto:legal@softics.co">legal@softics.co</Link>.
        </p>
      </article>
    </section>
  )
} 