import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

async function read(path) {
  return readFile(new URL(path, import.meta.url), "utf8");
}

const config = await read("../notes-docs/docusaurus.config.ts");
const economicsIntro = await read("../notes-docs/economics-docs/intro.md");
const economics = await read("../notes-docs/economics-docs/spatial-equilibrium-foundations.md");
const mathematicsIntro = await read("../notes-docs/mathematics-docs/intro.md");
const programming = await read("../notes-docs/programming-docs/claude-code-setup.md");
const homepage = await read("../notes-docs/src/pages/index.tsx");
const notesIndexHtml = await read("../dist/notes/index.html");

assert.match(config, /id:\s*'economics'/u, "notes-docs should configure an economics docs instance");
assert.match(config, /id:\s*'mathematics'/u, "notes-docs should configure a mathematics docs instance");
assert.match(config, /id:\s*'programming'/u, "notes-docs should configure a programming docs instance");
assert.match(config, /routeBasePath:\s*'economics'/u, "economics docs should have a dedicated route base path");
assert.match(config, /routeBasePath:\s*'mathematics'/u, "mathematics docs should have a dedicated route base path");
assert.match(config, /routeBasePath:\s*'programming'/u, "programming docs should have a dedicated route base path");
assert.match(config, /blog:\s*false/u, "notes-docs should disable the default blog");
assert.match(config, /Back to main site/u, "notes-docs should expose a clear route back to the main site");
assert.match(homepage, /One site, three growing shelves/u, "notes-docs should include a multi-instance landing page");
assert.match(economicsIntro, /# Economics/u, "economics docs should include an intro page");
assert.match(mathematicsIntro, /# Mathematics/u, "mathematics docs should include an intro page");
assert.match(economics, /# Spatial Equilibrium Foundations/u, "economics notes should be migrated");
assert.match(programming, /# Claude Code Setup for Research Work/u, "programming notes should be migrated");
assert.match(notesIndexHtml, /href="https:\/\/notes\.example\.com\/economics\/"/u, "notes shelf links should point to Docusaurus docs-instance roots");
assert.match(notesIndexHtml, /href="https:\/\/notes\.example\.com\/programming\/claude-code-setup\/"/u, "note entries should point to Docusaurus document pages");

console.log("Notes docs structure verified.");
