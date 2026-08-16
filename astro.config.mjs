// @ts-check
import { defineConfig } from 'astro/config';

// Static output for S3 website hosting: every route builds to <route>/index.html
export default defineConfig({
  site: 'https://www.wireedmpro.com.au',
  output: 'static',
  build: {
    format: 'directory',
    assets: '_assets',
  },
});
