// @ts-check
import { defineConfig } from 'astro/config';

import mdx from "@astrojs/mdx";
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
export default defineConfig({
    output: 'static',
    site: 'https://penken-camera.github.io',
    integrations: [mdx(), tailwind()],
});