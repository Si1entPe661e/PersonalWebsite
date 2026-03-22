import { readFile } from "node:fs/promises";
import assert from "node:assert/strict";

async function readHtml(path) {
  return readFile(new URL(path, import.meta.url), "utf8");
}

const paperHtml = await readHtml("../dist/papers/replicating-a-spatial-equilibrium-table/index.html");
const noteHtml = await readHtml("../dist/notes/programming/claude-code-setup/index.html");

for (const [name, html] of [
  ["paper", paperHtml],
  ["note", noteHtml],
]) {
  assert.match(html, /docs-shell/u, `${name} page should render a docs shell wrapper`);
  assert.match(html, /docs-nav/u, `${name} page should render a left docs navigation`);
  assert.match(html, /docs-outline/u, `${name} page should render a right outline navigation`);
  assert.match(html, /Collapse navigation/u, `${name} page should include a left sidebar collapse control`);
  assert.match(html, /Collapse outline/u, `${name} page should include a right sidebar collapse control`);
}

console.log("Docs shell structure verified.");
