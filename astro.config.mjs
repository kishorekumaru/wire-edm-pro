// @ts-check
import { defineConfig } from 'astro/config';

// Static output for S3 website hosting: every route builds to <route>/index.html
export default defineConfig({
  site: 'https://wireedmpro.com.au',
  output: 'static',
  build: {
    format: 'directory',
    assets: '_assets',
    // Site CSS is ~7 KB total: inlining removes render-blocking stylesheet
    // requests and lets fonts be discovered from the first HTML bytes
    inlineStylesheets: 'always',
  },
});
