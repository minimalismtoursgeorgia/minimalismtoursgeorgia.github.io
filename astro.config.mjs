import { defineConfig } from 'astro/config';

const rawSite = process.env.SITE_URL?.trim() || 'https://minimalismtoursgeorgia.github.io';
const rawBase = process.env.BASE_PATH?.trim() || '/';
const normalizedBase =
  rawBase === '/' ? '/' : `/${rawBase.replace(/^\/+|\/+$/g, '')}/`;

export default defineConfig({
  output: 'static',
  site: rawSite,
  base: normalizedBase,
  trailingSlash: 'always',
  build: {
    format: 'directory',
  },
});
