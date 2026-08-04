import { seoRoutes } from "../data/seo";

export function GET({ site }: { site?: URL }) {
  const siteUrl = site?.toString() ?? "https://sierra-language-academy.sierralanguageacademy2026.workers.dev/";
  const sitemapUrl = new URL("/sitemap.xml", siteUrl).toString();
  const disallowed = ["/api", "/api/", "/admin", "/admin/"];
  const body = [
    "User-agent: *",
    "Allow: /",
    ...disallowed.map((path) => `Disallow: ${path}`),
    "",
    `Sitemap: ${sitemapUrl}`,
    "",
    `# Indexed routes: ${seoRoutes.length}`
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8"
    }
  });
}
