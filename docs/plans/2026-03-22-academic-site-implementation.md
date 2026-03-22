# Academic Personal Website Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Build a polished Astro-based academic personal website from an empty workspace, following the approved Editorial Notebook design direction.

**Architecture:** Start from a fresh Astro project with content collections for research, papers, notes, essays, blog, and static pages. Use shared layouts, a restrained design token system, and Markdown/MDX-driven publishing so the site remains easy to extend as content grows.

**Tech Stack:** Astro, TypeScript, Astro Content Collections, Markdown/MDX, CSS variables, modern CSS layout, optional Astro integrations for sitemap and RSS

---

## Preconditions

- The current directory is empty.
- The current directory is not a Git repository.
- Package installation and Astro scaffolding will need to happen during implementation.
- Font choice may require either self-hosted assets or a hosted font loading strategy.

## Task 1: Initialize the project and tooling

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`
- Create: `src/`
- Create: `public/`
- Create: `.gitignore`

**Step 1: Scaffold Astro in the current directory**

Run:

```bash
npm create astro@latest . -- --template minimal --typescript strict
```

Expected:

- Astro project files are created in the current folder
- no example pages remain unless intentionally kept

**Step 2: Add core integrations needed for a content-first site**

Run:

```bash
npm install @astrojs/mdx @astrojs/rss @astrojs/sitemap
```

Expected:

- dependencies added to `package.json`

**Step 3: Wire integrations into Astro config**

Update `astro.config.mjs` to include:

```js
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com',
  integrations: [mdx(), sitemap()],
});
```

**Step 4: Verify the scaffold compiles**

Run:

```bash
npm run astro check
```

Expected:

- type/content checks complete without errors

**Step 5: Commit**

After Git is initialized:

```bash
git add .
git commit -m "chore: scaffold Astro site"
```

## Task 2: Define the content model

**Files:**
- Create: `src/content/config.ts`
- Create: `src/content/research/`
- Create: `src/content/papers/`
- Create: `src/content/notes/`
- Create: `src/content/essays/`
- Create: `src/content/blog/`
- Create: `src/content/pages/`

**Step 1: Create collection schemas**

Define collections for:

- `research`
- `papers`
- `notes`
- `essays`
- `blog`
- `pages`

Suggested schema shape:

```ts
import { defineCollection, z } from 'astro:content';

const baseSchema = z.object({
  title: z.string(),
  description: z.string(),
  date: z.coerce.date().optional(),
  updated: z.coerce.date().optional(),
  tags: z.array(z.string()).default([]),
  draft: z.boolean().default(false),
  featured: z.boolean().default(false),
  series: z.string().optional(),
  toc: z.boolean().default(true),
  status: z.string().optional(),
});
```

**Step 2: Specialize schemas where needed**

Examples:

- `research` may include `venue`, `coauthors`, `projectUrl`
- `papers` may include `paperType`
- `notes` may include `section`, `order`
- `pages` may include `slug`

**Step 3: Add minimal seed content**

Create one placeholder entry per collection so templates can be validated during implementation.

**Step 4: Verify content loading**

Run:

```bash
npm run astro check
```

Expected:

- content schema passes
- placeholder entries compile cleanly

**Step 5: Commit**

```bash
git add src/content
git commit -m "feat: define Astro content collections"
```

## Task 3: Build the site shell and design tokens

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/components/site/Header.astro`
- Create: `src/components/site/Footer.astro`
- Create: `src/styles/tokens.css`
- Create: `src/styles/global.css`

**Step 1: Define design tokens**

Create CSS variables for:

- colors
- spacing
- layout widths
- border styles
- font stacks
- transition timing

Representative token structure:

```css
:root {
  --color-bg: #f4f0e8;
  --color-surface: #f8f5ef;
  --color-text: #171614;
  --color-muted: #5a5d57;
  --color-rule: #cfc7ba;
  --color-accent: #58664b;
  --radius-sm: 4px;
  --radius-md: 8px;
  --content-width: 76rem;
}
```

**Step 2: Build global typographic rhythm**

Set:

- serif heading stack
- sans body stack
- comfortable line length
- consistent margins for prose
- restrained link styling

**Step 3: Build header and footer**

Header should contain:

- site title/name
- top navigation
- mobile navigation toggle if needed

Footer should contain:

- contact
- CV link
- scholar links
- RSS

**Step 4: Wrap pages in `BaseLayout`**

The layout should:

- inject metadata
- include global styles
- define the main frame
- support page title and description props

**Step 5: Verify the shell visually**

Run:

```bash
npm run dev
```

Expected:

- consistent header/footer
- no unstyled default Astro look

**Step 6: Commit**

```bash
git add src/layouts src/components src/styles
git commit -m "feat: add site shell and editorial design tokens"
```

## Task 4: Build the homepage

**Files:**
- Create: `src/pages/index.astro`
- Create: `src/components/home/IntroBand.astro`
- Create: `src/components/home/PrimaryIndex.astro`
- Create: `src/components/home/CurrentWriting.astro`
- Create: `src/components/home/NotebookStrip.astro`

**Step 1: Implement intro band**

Include:

- name
- role
- affiliation
- short statement
- research areas/current work metadata block

**Step 2: Implement primary index section**

Create three editorial entry blocks for:

- `Research`
- `Papers`
- `Notes`

Each block should include:

- title
- one-sentence description
- up to three representative links

**Step 3: Implement writing section**

Pull latest content from:

- `essays`
- `blog`

Display them in a way that distinguishes long-form essays from lighter posts.

**Step 4: Implement notebook strip**

Surface workflow-oriented areas such as:

- replications
- methods
- coding setup
- research tools

**Step 5: Verify layout balance**

Run:

```bash
npm run dev
```

Expected:

- homepage feels editorial and calm
- no oversized hero
- no startup-style CTA block

**Step 6: Commit**

```bash
git add src/pages/index.astro src/components/home
git commit -m "feat: build editorial notebook homepage"
```

## Task 5: Build section index pages

**Files:**
- Create: `src/pages/research/index.astro`
- Create: `src/pages/papers/index.astro`
- Create: `src/pages/notes/index.astro`
- Create: `src/pages/essays/index.astro`
- Create: `src/pages/blog/index.astro`
- Create: `src/pages/about.astro`
- Create: `src/components/listing/SectionHero.astro`
- Create: `src/components/listing/EntryList.astro`
- Create: `src/components/listing/EntryMeta.astro`

**Step 1: Build reusable listing primitives**

Listing components should support:

- title
- summary
- date
- tags
- status
- featured treatment

**Step 2: Implement research index**

Show projects and working papers with stronger project framing.

**Step 3: Implement papers index**

Support grouped display for explainers, replications, reading notes, and methods when data exists.

**Step 4: Implement notes index**

Present notes as a library/catalog, not a reverse-chronological blog.

**Step 5: Implement essays and blog indexes**

Use more date-forward layouts, while preserving the site's editorial tone.

**Step 6: Implement about page**

Add:

- bio
- affiliation
- research interests
- links

**Step 7: Verify navigation coverage**

Run:

```bash
npm run build
```

Expected:

- all top-level routes render
- no broken collection queries

**Step 8: Commit**

```bash
git add src/pages src/components/listing
git commit -m "feat: add section index pages"
```

## Task 6: Build content detail layouts

**Files:**
- Create: `src/layouts/ProseLayout.astro`
- Create: `src/layouts/ResearchLayout.astro`
- Create: `src/layouts/NotesLayout.astro`
- Create: `src/components/prose/TableOfContents.astro`
- Create: `src/components/prose/ProseHeader.astro`
- Create: `src/components/prose/ProseMeta.astro`

**Step 1: Create a shared prose layout**

It should handle:

- title
- description
- metadata
- optional table of contents
- typographic defaults for headings, lists, quotes, code, and tables

**Step 2: Create a research-specific layout**

Support:

- project status
- links to manuscript/code/data
- research metadata blocks

**Step 3: Create a notes layout**

Support:

- hierarchical breadcrumbs
- next/previous navigation
- book-like reading flow

**Step 4: Render collection entries with the proper layout**

For each collection, make sure route templates or content pages use the right layout.

**Step 5: Verify representative content pages**

Run:

```bash
npm run dev
```

Expected:

- note pages feel book-like
- essays feel magazine-like
- research pages feel project-oriented

**Step 6: Commit**

```bash
git add src/layouts src/components/prose
git commit -m "feat: add detail layouts for prose, notes, and research"
```

## Task 7: Add content utilities and publishing features

**Files:**
- Create: `src/lib/content.ts`
- Create: `src/pages/rss.xml.ts`
- Modify: `astro.config.mjs`

**Step 1: Add reusable content helpers**

Helpers should support:

- sorting by date
- filtering drafts
- picking featured entries
- grouping notes by domain

**Step 2: Add RSS**

Create an RSS feed that includes at least:

- `essays`
- `blog`

Optional later extension:

- selected `papers`

**Step 3: Add metadata polish**

Ensure page titles and descriptions are coherent across layouts and index pages.

**Step 4: Verify feed and metadata**

Run:

```bash
npm run build
```

Expected:

- RSS route builds
- metadata appears correctly in generated output

**Step 5: Commit**

```bash
git add src/lib src/pages/rss.xml.ts astro.config.mjs
git commit -m "feat: add content helpers and RSS feed"
```

## Task 8: Populate initial real content

**Files:**
- Modify: `src/content/research/*`
- Modify: `src/content/papers/*`
- Modify: `src/content/notes/*`
- Modify: `src/content/essays/*`
- Modify: `src/content/blog/*`
- Modify: `src/content/pages/about.md`

**Step 1: Draft homepage-supporting content**

Create enough real content so the homepage can show:

- one research item
- one papers item
- one notes item
- one essay
- one blog post

**Step 2: Draft About page**

Add:

- concise bio
- research areas
- affiliation
- links

**Step 3: Review voice and consistency**

Check that descriptions sound human, specific, and academically grounded.

**Step 4: Verify all listing pages with real content**

Run:

```bash
npm run build
```

Expected:

- no empty-state breakage
- homepage selections render correctly

**Step 5: Commit**

```bash
git add src/content
git commit -m "docs: add initial site content"
```

## Task 9: Final polish and launch readiness

**Files:**
- Modify: `public/`
- Modify: `src/styles/global.css`
- Modify: `src/layouts/BaseLayout.astro`

**Step 1: Add favicon and social preview assets**

Create:

- `public/favicon.*`
- `public/og-image.*`

**Step 2: Review responsive behavior**

Test:

- desktop reading width
- tablet navigation
- mobile typography

**Step 3: Review accessibility basics**

Check:

- heading hierarchy
- contrast
- visible focus states
- keyboard nav

**Step 4: Run final verification**

Run:

```bash
npm run astro check
npm run build
```

Expected:

- no type/content errors
- clean production build

**Step 5: Initialize Git if still missing**

Run:

```bash
git init
git add .
git commit -m "feat: launch first version of academic website"
```

**Step 6: Prepare deployment**

Choose a host such as:

- Vercel
- Netlify
- Cloudflare Pages

Record the final production URL in `astro.config.mjs`.

## Verification Checklist

Before calling the site complete, verify:

- all top-level routes build
- all collections validate
- homepage has balanced density
- notes feel distinct from blog posts
- no purple/pink/red gradient artifacts exist
- rounded corners remain restrained
- typography feels editorial rather than template-like
- mobile layout remains calm and readable

## Risks and decisions to watch

- Font hosting strategy may affect perceived polish and performance
- Empty content can make a strong design look weak, so initial copy matters
- The `Notes` hierarchy should stay intentionally curated to avoid turning into a generic wiki
- The homepage must stay selective; overpopulating it will erode the editorial effect
