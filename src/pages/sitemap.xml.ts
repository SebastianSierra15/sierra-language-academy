import { seoRoutes } from "../data/seo";

export function GET({ site }: { site?: URL }) {
  const siteUrl = site?.toString() ?? "https://sierra-language-academy.pages.dev/";
  const now = new Date().toISOString();
  const urls = seoRoutes
    .map((route) => {
      const loc = new URL(route.path, siteUrl).toString();
      return [
        "  <url>",
        `    <loc>${loc}</loc>`,
        `    <lastmod>${now}</lastmod>`,
        `    <changefreq>${route.changefreq}</changefreq>`,
        `    <priority>${route.priority}</priority>`,
        "  </url>"
      ].join("\n");
    })
    .join("\n");

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
    urls,
    "</urlset>"
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8"
    }
  });
}
