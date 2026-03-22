import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

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

const research = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/research" }),
  schema: baseSchema.extend({
    venue: z.string().optional(),
    coauthors: z.array(z.string()).default([]),
    projectUrl: z.string().url().optional(),
    manuscriptUrl: z.string().url().optional(),
    codeUrl: z.string().url().optional(),
    dataUrl: z.string().url().optional(),
  }),
});

const papers = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/papers" }),
  schema: baseSchema.extend({
    paperType: z.enum(["explainer", "replication", "reading note", "method note"]),
  }),
});

const notes = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/notes" }),
  schema: baseSchema.extend({
    section: z.enum(["economics", "mathematics", "programming"]),
    order: z.number().default(0),
  }),
});

const essays = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/essays" }),
  schema: baseSchema,
});

const blog = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
  schema: baseSchema,
});

const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }),
  schema: baseSchema.extend({
    slug: z.string().optional(),
  }),
});

export const collections = {
  research,
  papers,
  notes,
  essays,
  blog,
  pages,
};
