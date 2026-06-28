import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { unified } from '@astrojs/markdown-remark';
import { externalLinks } from './src/plugins/external-links';

export default defineConfig({
  site: 'https://yatharthx.com',
  trailingSlash: 'always',
  markdown: {
    processor: unified({
      rehypePlugins: [externalLinks],
    }),
  },
  integrations: [
    mdx(),
    react(),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
