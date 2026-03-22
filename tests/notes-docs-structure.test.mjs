import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

async function read(path) {
  return readFile(new URL(path, import.meta.url), "utf8");
}

const config = await read("../notes-docs/docusaurus.config.ts");
const intro = await read("../notes-docs/notes-content/intro.md");
const economics = await read("../notes-docs/notes-content/economics/spatial-equilibrium-foundations.md");
const programming = await read("../notes-docs/notes-content/programming/claude-code-setup.md");
const notesIndexHtml = await read("../dist/notes/index.html");

assert.match(config, /routeBasePath:\s*'\/'/u, "notes-docs should serve docs from the site root");
assert.match(config, /blog:\s*false/u, "notes-docs should disable the default blog");
assert.match(config, /notes-content/u, "notes-docs should read docs from the custom notes-content directory");
assert.match(config, /Back to main site/u, "notes-docs should expose a clear route back to the main site");
assert.match(intro, /# Notes Library/u, "notes-docs should include a notes landing page");
assert.match(economics, /# Spatial Equilibrium Foundations/u, "economics notes should be migrated");
assert.match(programming, /# Claude Code Setup for Research Work/u, "programming notes should be migrated");
assert.match(notesIndexHtml, /href="https:\/\/notes\.example\.com\/category\/economics"/u, "notes shelf links should point to Docusaurus category pages");
assert.match(notesIndexHtml, /href="https:\/\/notes\.example\.com\/programming\/claude-code-setup\/"/u, "note entries should point to Docusaurus document pages");

console.log("Notes docs structure verified.");
