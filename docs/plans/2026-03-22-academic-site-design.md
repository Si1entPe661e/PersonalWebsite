# Academic Personal Website Design

**Date:** 2026-03-22

## Project Goal

Build an English-language academic personal website in Astro that presents research, writing, notes, and workflow in a way that feels elegant, rigorous, and long-lived.

The site should not look like a startup landing page, a generic template blog, or an AI-generated portfolio. It should feel like an academic editorial front page with the quiet energy of an active research notebook.

## Core Direction

The approved direction is:

- `Editorial Research` for structure and tone
- `Modern Lab Notebook` for content depth and working style
- `Hybrid` identity, with research slightly ahead of writing/building

The chosen overall concept is:

`Editorial Notebook`

This means the homepage behaves like a curated editorial index, while the rest of the site supports deep notes, paper explainers, replications, essays, and research workflows.

## Site Architecture

Top-level navigation:

- `Home`
- `Research`
- `Papers`
- `Notes`
- `Essays`
- `Blog`
- `About`

Section responsibilities:

- `Home`: editorial front page and site index
- `Research`: research agenda, working papers, projects, ongoing work
- `Papers`: paper explainers, replications, reading notes, method notes
- `Notes`: economics, mathematics, programming, and other structured knowledge collections
- `Essays`: mature viewpoint writing, commentary, and longer-form reflection
- `Blog`: lighter updates, shorter posts, build logs, short reflections
- `About`: biography, affiliation, CV, contact, links

## Homepage Structure

The homepage should be `Index-led`, not portrait-led and not dominated by a hero image.

Recommended order:

1. Name, role, affiliation, concise statement
2. Research interests and current focus
3. Primary entry blocks for `Research`, `Papers`, and `Notes`
4. Latest writing from `Essays` and `Blog`
5. Research notebook strip for workflows, tools, replications, and setup notes
6. Footer with contact, CV, scholar links, GitHub, RSS

The homepage should feel like a serious scholar's public workbench rather than a personal brand page.

## Notes System

The `Notes` section will use a `Mixed` structure:

- the top-level notes page behaves like a documentation library
- individual note domains can behave like online books

Examples:

- `Economics`
- `Mathematics`
- `Programming`

Each domain should support hierarchy and long-term growth, such as:

- `notes/economics/...`
- `notes/math/...`
- `notes/coding/...`

## Content Model

The site should not collapse all writing into a single blog collection. Instead, it should use distinct content collections:

- `research`
- `papers`
- `notes`
- `essays`
- `blog`
- `pages`

Shared metadata should be standardized where useful:

- `title`
- `description`
- `date`
- `updated`
- `tags`
- `draft`
- `featured`
- `series`
- `status`
- `toc`

Suggested status examples for research-facing content:

- `ongoing`
- `working paper`
- `published`
- `replication`
- `reading note`

## Visual Language

The visual direction should be quietly authoritative and editorial.

Approved visual constraints:

- no purple, pink, or red AI-style gradients
- no glassmorphism
- no startup-like hero section
- no oversized rounded cards
- no overly playful interface shapes

Preferred palette direction:

- warm ivory background
- ink-black main text
- stone or slate secondary text
- muted olive accent
- restrained brass or tobacco for occasional emphasis

The palette should feel paper-based, calm, and mature.

## Typography

Typography should carry much of the site's sophistication.

Approved direction:

- serif for headings
- restrained sans-serif for body, navigation, and metadata

Preferred pairing:

- Headings: `Fraunces`
- Body/UI: `Source Sans 3`

Alternative acceptable pairings:

- `Cormorant Garamond` + `IBM Plex Sans`
- `Libre Baskerville` + `Source Sans 3`

The typographic mood should be literate, modern, and readable rather than ornamental.

## Layout and Components

The site should use:

- strong vertical rhythm
- clear editorial spacing
- fine border rules
- limited accent color
- minimal box shadow
- restrained hover states

Component principles:

- buttons should feel like editorial controls, not product CTAs
- cards, when used, should be sparse and structurally firm
- borders should be thin and intentional
- rounded corners should be minimal
- code blocks, references, quotes, and equations should feel integrated into a research notebook

## Atmosphere

The target feeling is:

`Make it feel like a serious scholar’s notebook edited by a literary journal.`

This atmosphere should hold across the homepage, section indexes, article pages, note pages, and research pages.

## Non-Goals

The project should avoid:

- product-marketing language
- loud interactions
- decorative gradients
- dashboard-like density
- generic template card grids
- excessive visual effects
- "AI aesthetic" cues

## Build Choice

Astro is the right choice for this project because it supports:

- content-first architecture
- long-lived static publishing
- excellent performance
- easy Markdown/MDX workflows
- clear content collections
- future additions like RSS, search, math rendering, and syntax highlighting

## Current Workspace Status

The current workspace is empty and is not yet a Git repository. This design document is therefore saved locally as a planning artifact and has not been committed.
