import { NextRequest } from 'next/server';

/**
 * Generates an XML sitemap covering all current static pages of the site.
 * Add new paths here whenever you create a new `page.tsx` route.
 *
 * NOTE: For large / data-driven sites consider using a package such as
 * `next-sitemap` or generating at build-time from your CMS/database.
 */
export function GET(_req: NextRequest): Response {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'http://localhost:3000';

  // List all static & known dynamic top-level pages
  const routes: string[] = [
    '/',
    '/privacy',
    '/terms',
    '/about', // (planned – returns 404 until created)
    '/contact',
    // Labs
    '/labs',
    '/labs/sri',
    '/labs/join',
    '/labs/experiments',
    // Studio
    '/studio',
    '/studio/projects',
    '/studio/services',
    // Blogs
    '/blogs',
  ];

  const urlset = routes
    .map((path) => {
      return `  <url>\n    <loc>${baseUrl}${path}</loc>\n    <changefreq>weekly</changefreq>\n    <priority>${path === '/' ? '1.0' : '0.7'}</priority>\n  </url>`;
    })
    .join('\n');

  const xml = `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urlset}\n</urlset>`;

  return new Response(xml, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}
