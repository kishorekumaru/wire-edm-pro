// Generates dist/sitemap.xml from the pages astro actually built.
// Pages carrying a robots noindex meta tag (the coming-soon home page) are excluded.
//
// lastmod comes from the git commit date of each page's own source, not the
// build date. Stamping "today" on all 22 URLs every deploy is a freshness claim
// Google learns to distrust and then ignores, which costs the signal entirely.
// When git history is unavailable (a shallow CI clone), lastmod is omitted
// rather than guessed: no date beats a wrong one.
import { execFileSync } from "node:child_process";
import { existsSync, readdirSync, readFileSync, writeFileSync } from "node:fs";
import { join, relative, dirname, resolve } from "node:path";

const SITE = "https://wireedmpro.com.au";
const ROOT = process.cwd();
const DIST = join(ROOT, "dist");
const PAGES = join(ROOT, "src", "pages");

function findPages(dir) {
  const out = [];
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...findPages(full));
    else if (entry.name === "index.html") out.push(full);
  }
  return out;
}

/** The .astro file that produced a built route, including dynamic routes. */
function pageSource(route) {
  if (route === "") return join(PAGES, "index.astro");
  for (const candidate of [join(PAGES, `${route}.astro`), join(PAGES, route, "index.astro")]) {
    if (existsSync(candidate)) return candidate;
  }
  // A dynamic route: find the [param].astro in the parent directory
  const parent = join(PAGES, dirname(route));
  if (existsSync(parent)) {
    const dynamic = readdirSync(parent).find((f) => f.startsWith("[") && f.endsWith(".astro"));
    if (dynamic) return join(parent, dynamic);
  }
  return null;
}

/** A page's source plus the local modules it imports, so data edits count. */
function sourcesFor(route) {
  const page = pageSource(route);
  if (!page) return [];
  const deps = [page];
  for (const [, spec] of readFileSync(page, "utf8").matchAll(/from\s+["'](\.[^"']+)["']/g)) {
    const base = resolve(dirname(page), spec);
    for (const candidate of [base, `${base}.ts`, `${base}.astro`]) {
      if (existsSync(candidate) && !deps.includes(candidate)) deps.push(candidate);
    }
  }
  return deps;
}

let gitAvailable = true;
function lastCommitDate(file) {
  if (!gitAvailable) return null;
  try {
    const out = execFileSync("git", ["log", "-1", "--format=%cs", "--", file], {
      cwd: ROOT,
      encoding: "utf8",
      stdio: ["ignore", "pipe", "ignore"],
    }).trim();
    return out || null;
  } catch {
    gitAvailable = false;
    return null;
  }
}

/** Newest commit date across a page and its data dependencies. */
function lastmodFor(route) {
  const dates = sourcesFor(route).map(lastCommitDate).filter(Boolean);
  return dates.length ? dates.sort().at(-1) : null;
}

const noindex = /<meta[^>]+name=["']robots["'][^>]+noindex/i;

const urls = findPages(DIST)
  .filter((file) => !noindex.test(readFileSync(file, "utf8")))
  .map((file) => {
    const route = relative(DIST, dirname(file)).replaceAll("\\", "/");
    const clean = route === "." ? "" : route;
    return {
      loc: clean === "" ? `${SITE}/` : `${SITE}/${clean}/`,
      lastmod: lastmodFor(clean),
    };
  })
  .sort((a, b) => a.loc.localeCompare(b.loc));

const xml = [
  '<?xml version="1.0" encoding="UTF-8"?>',
  '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">',
  ...urls.map(({ loc, lastmod }) =>
    lastmod
      ? `  <url><loc>${loc}</loc><lastmod>${lastmod}</lastmod></url>`
      : `  <url><loc>${loc}</loc></url>`,
  ),
  "</urlset>",
  "",
].join("\n");

writeFileSync(join(DIST, "sitemap.xml"), xml);
const dated = urls.filter((u) => u.lastmod).length;
console.log(`sitemap.xml: ${urls.length} URLs written, ${dated} with lastmod`);
