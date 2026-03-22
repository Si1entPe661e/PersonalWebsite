---
title: Replicating a Spatial Equilibrium Table
description: A short replication note on rebuilding a core summary table and keeping track of every place where definitions start to drift.
date: 2026-03-15
tags:
  - replication
  - spatial equilibrium
  - data work
featured: true
paperType: replication
status: replication note
toc: true
---

## Why this replication is useful

Many replications fail quietly because the final estimates are close enough to the published result that the process is never documented. But the process often reveals where conceptual definitions are less stable than they first appear.

## What drifted

In this table rebuild, the biggest sources of drift came from:

- sample restrictions that looked trivial in prose but were consequential in code
- differences between geographical crosswalks across data vintages
- implicit cleaning choices that were never written as assumptions

## What I keep from this exercise

Replication notes are most valuable when they document definitions, not only results. When a table changes after a small data construction choice, that is not a nuisance detail. It is part of the paper's real empirical content.
