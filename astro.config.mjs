// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';
import pagefind from 'astro-pagefind';

// https://astro.build/config
export default defineConfig({
  build: {
    format: "file",
  },
  integrations: [preact(), pagefind()]
});