import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

async function read(path) {
  return readFile(new URL(path, import.meta.url), "utf8");
}

const astroConfig = await read("../notes-docs/astro.config.mjs");
const contentConfig = await read("../notes-docs/src/content.config.ts");
const packageJson = await read("../notes-docs/package.json");
const homepage = await read("../notes-docs/src/content/docs/index.mdx");
const economicsIntro = await read("../notes-docs/src/content/docs/economics/index.mdx");
const economics = await read("../notes-docs/src/content/docs/economics/spatial-equilibrium-foundations.md");
const mathematicsIntro = await read("../notes-docs/src/content/docs/mathematics/index.mdx");
const programming = await read("../notes-docs/src/content/docs/programming/claude-code-setup.md");
const notesIndexHtml = await read("../dist/notes/index.html");

assert.match(packageJson, /@astrojs\/starlight/u, "notes-docs should depend on Starlight");
assert.match(astroConfig, /starlight\(/u, "notes-docs should integrate Starlight");
assert.match(astroConfig, /Economics/u, "notes-docs should expose an Economics section in the Starlight sidebar");
assert.match(astroConfig, /Mathematics/u, "notes-docs should expose a Mathematics section in the Starlight sidebar");
assert.match(astroConfig, /Programming/u, "notes-docs should expose a Programming section in the Starlight sidebar");
assert.match(astroConfig, /Back to main site/u, "notes-docs should expose a clear route back to the main site");
assert.match(contentConfig, /docsLoader/u, "notes-docs should use the Starlight docs content loader");
assert.match(homepage, /One site, three growing shelves/u, "notes-docs should include a multi-section landing page");
assert.match(economicsIntro, /# Economics/u, "economics docs should include an intro page");
assert.match(mathematicsIntro, /# Mathematics/u, "mathematics docs should include an intro page");
assert.match(economics, /# Spatial Equilibrium Foundations/u, "economics notes should be migrated");
assert.match(programming, /# Claude Code Setup for Research Work/u, "programming notes should be migrated");
assert.match(notesIndexHtml, /href="https:\/\/notes\.example\.com\/economics\/"/u, "notes shelf links should point to Starlight section roots");
assert.match(notesIndexHtml, /href="https:\/\/notes\.example\.com\/programming\/claude-code-setup\/"/u, "note entries should point to Starlight document pages");

console.log("Notes docs structure verified.");
