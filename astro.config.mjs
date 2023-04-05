import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import image from "@astrojs/image";
import mdx from "@astrojs/mdx";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), image(), mdx({
    syntaxHighlight: "shiki",
    shikiConfig: {
      theme: "dracula"
    },
    remarkPlugins: [remarkToc],
    rehypePlugins: [rehypeMinifyHtml],
    remarkRehype: {
      footnoteLabel: "Footnotes"
    },
    gfm: false
  })],
  output: "server",
  adapter: vercel()
});