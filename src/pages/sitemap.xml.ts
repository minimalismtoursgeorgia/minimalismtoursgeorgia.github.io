import type { APIRoute } from 'astro';
import { TOURS } from '../data/tours';
import { absoluteUrl } from '../lib/urls';

interface SitemapEntry {
  path: string;
  priority: string;
  changefreq: string;
  hreflangPairs?: { lang: string; path: string }[];
}

export const GET: APIRoute = ({ site }) => {
  const today = new Date().toISOString().split('T')[0];

  const entries: SitemapEntry[] = [
    {
      path: '/',
      priority: '1.0',
      changefreq: 'weekly',
      hreflangPairs: [
        { lang: 'en', path: '/' },
        { lang: 'ka', path: '/ka/' },
        { lang: 'x-default', path: '/' },
      ],
    },
    {
      path: '/ka/',
      priority: '0.9',
      changefreq: 'weekly',
      hreflangPairs: [
        { lang: 'en', path: '/' },
        { lang: 'ka', path: '/ka/' },
        { lang: 'x-default', path: '/' },
      ],
    },
    { path: '/tours/', priority: '0.9', changefreq: 'weekly' },
    { path: '/destinations/', priority: '0.8', changefreq: 'monthly' },
    { path: '/partners/', priority: '0.85', changefreq: 'monthly' },
    { path: '/about/', priority: '0.7', changefreq: 'monthly' },
    { path: '/contact/', priority: '0.8', changefreq: 'monthly' },
    ...TOURS.map((tour) => ({
      path: `/tours/${tour.slug}/`,
      priority: '0.9',
      changefreq: 'weekly',
    })),
  ];

  const xmlRows = entries
    .map((entry) => {
      const loc = absoluteUrl(entry.path, site);
      const links = (entry.hreflangPairs || [])
        .map(
          (alt) =>
            `    <xhtml:link rel="alternate" hreflang="${alt.lang}" href="${absoluteUrl(alt.path, site)}" />`
        )
        .join('\n');

      return [
        '  <url>',
        `    <loc>${loc}</loc>`,
        `    <lastmod>${today}</lastmod>`,
        `    <changefreq>${entry.changefreq}</changefreq>`,
        `    <priority>${entry.priority}</priority>`,
        ...(links ? [links] : []),
        '  </url>',
      ].join('\n');
    })
    .join('\n');

  const xml = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">',
    xmlRows,
    '</urlset>',
    '',
  ].join('\n');

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
    },
  });
};
