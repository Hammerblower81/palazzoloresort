import type { APIRoute } from 'astro';
export const GET: APIRoute = ({ site }) => new Response(
  'User-agent: *\nAllow: /\n' + (import.meta.env.PUBLIC_INDEXABLE === 'true' ? `Sitemap: ${new URL('/sitemap.xml', site)}\n` : '# Preview: pages carry a noindex robots meta tag.\n'),
  { headers: { 'Content-Type': 'text/plain; charset=utf-8' } },
);
