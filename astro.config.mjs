import { defineConfig } from "astro/config";
import react from "@astrojs/react";
import image from "@astrojs/image";

import vercel from "@astrojs/vercel/static";

// https://astro.build/config
export default defineConfig({
  integrations: [react(), image({
    serviceEntryPoint: '@astrojs/image/sharp'
  })],
  adapter: vercel()
});
