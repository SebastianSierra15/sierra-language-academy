import { defineConfig } from "astro/config";

export default defineConfig({
  site: process.env.PUBLIC_SITE_URL ?? "https://sierra-language-academy.pages.dev",
  output: "static"
});
