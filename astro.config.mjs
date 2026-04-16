// @ts-check
import mdx from '@astrojs/mdx';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    site: 'https://a3pi.netlify.app',
    integrations: [mdx()], // Removido o sitemap daqui
    output: 'static'
});