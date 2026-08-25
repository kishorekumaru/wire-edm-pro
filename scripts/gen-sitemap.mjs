// Generates dist/sitemap.xml from the pages astro actually built.
// Pages carrying a robots noindex meta tag (the coming-soon home page) are excluded.
import { readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, relative, dirname } from "node:path";

const SITE = "https://wireedmpro.com.au";
const DIST = join(process.cwd(), "dist");

function findPages(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...findPages(full));
    else if (entry.name === "index.html") out.push(full);
  }
  return out;
}

const noindex = /<meta[^>]+name=["']robots["'][^>]+noindex/i;
const lastmod = new Date().toISOString().slice(0, 10);

const urls = findPages(DIST)
  .filter((file) => !noindex.test(readFileSync(file, "utf8")))
  .map((file) => {
    const dir = relative(DIST, dirname(file)).replaceAll("\\", "/");
    return dir === "" || dir === "." ? `${SITE}/` : `${SITE}/${dir}/`;
  })
  .sort();

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map((loc) => `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`),
  "</urlset>",
  "",
].join("\n");

writeFileSync(join(DIST, "sitemap.xml"), xml);
console.log(`sitemap.xml: ${urls.length} URLs written`);
