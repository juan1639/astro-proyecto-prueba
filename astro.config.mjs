import { defineConfig } from 'astro/config';

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  base: 'https://juan1639.github.io/astro-proyecto-prueba'
});