import Link from 'next/link'

export const metadata = {
  title: 'Privacy Policy | Softics',
  description: 'Information on how Softics collects, uses, and protects your data.',
}

export default function PrivacyPage() {
  return (
    <section className="container mx-auto max-w-3xl px-4 pt-28 pb-12 space-y-8">
      <header className="space-y-2">
        <h1 className="text-4xl font-bold tracking-tight">Privacy Policy</h1>
        <p className="text-muted-foreground">Last updated: 16 June 2025</p>
      </header>

      <article className="prose prose-invert prose-lg dark:prose-invert">
        <h2>1. Introduction</h2>
        <p>
          Softics (“we”, “our”, “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect,
          use, disclose, and safeguard your information when you visit our website or use our Services.
        </p>

        <h2>2. Information We Collect</h2>
        <ul>
          <li><strong>Personal Information:</strong> Name, email address, and other contact details that you voluntarily provide.</li>
          <li><strong>Usage Data:</strong> Information automatically collected, such as IP address, browser type, and pages visited.</li>
          <li><strong>Cookies:</strong> Small data files stored on your device to improve user experience.</li>
        </ul>

        <h2>3. How We Use Your Information</h2>
        <ul>
          <li>To provide and maintain our Services.</li>
          <li>To improve and personalize user experience.</li>
          <li>To communicate with you about updates, promotions, and support.</li>
          <li>To analyze usage patterns and enhance performance.</li>
        </ul>

        <h2>4. Sharing of Information</h2>
        <p>
          We do not sell or rent your personal information. We may share information with trusted third-party providers who assist
          us in operating our Services, provided they agree to keep such information confidential.
        </p>

        <h2>5. Security</h2>
        <p>
          We implement reasonable administrative, technical, and physical safeguards designed to protect your information. However,
          no internet transmission is completely secure, and we cannot guarantee absolute security.
        </p>

        <h2>6. Your Rights</h2>
        <p>
          Depending on your jurisdiction, you may have rights to access, correct, or delete your personal information. To exercise
          these rights, contact us at <Link href="mailto:privacy@softics.co">privacy@softics.co</Link>.
        </p>

        <h2>7. Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy periodically. We will notify you of significant changes by posting the new policy on this
          page and updating the “Last updated” date.
        </p>

        <h2>8. Contact Us</h2>
        <p>
          If you have questions about this Privacy Policy, email us at <Link href="mailto:privacy@softics.co">privacy@softics.co</Link>.
        </p>
      </article>
    </section>
  )
} 