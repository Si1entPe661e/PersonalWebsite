export const site = {
  title: "Li Zhicheng",
  description:
    "An academic homepage for research, paper explainers, notes, essays, and working methods.",
  url: "https://example.com",
  notesIndexUrl: "/notes/",
  notesDocsUrl: import.meta.env.PUBLIC_NOTES_DOCS_URL ?? import.meta.env.PUBLIC_NOTES_URL ?? "https://notes.example.com/",
  statement:
    "I study spatial economics, innovation, and the practical craft of doing research with code, notes, and careful reading.",
  role: "Researcher in Economics",
  affiliation: "Shanghai, China",
  researchAreas: [
    "Spatial economics",
    "Innovation and knowledge diffusion",
    "Research workflows and replication",
  ],
  currentFocus:
    "Current work centers on mobility, knowledge spillovers, and building a durable personal research system.",
};

export const primaryNav = [
  { href: "/", label: "Home" },
  { href: "/research/", label: "Research" },
  { href: "/papers/", label: "Papers" },
  { href: site.notesIndexUrl, label: "Notes" },
  { href: "/essays/", label: "Essays" },
  { href: "/blog/", label: "Blog" },
  { href: "/about/", label: "About" },
] as const;

export const footerLinks = [
  { href: "/about/", label: "About" },
  { href: "/workflow/", label: "Workflow" },
  { href: site.notesIndexUrl, label: "Notes" },
  { href: "/rss.xml", label: "RSS" },
  { href: "https://scholar.google.com", label: "Google Scholar", external: true },
  { href: "https://github.com", label: "GitHub", external: true },
] as const;

type RoutableCollection = "research" | "papers" | "notes" | "essays" | "blog";

export function entryPath(id: string) {
  return id.replace(/\.(md|mdx)$/u, "");
}

export function entryHref(collection: RoutableCollection, id: string) {
  if (collection === "notes") {
    const path = `${entryPath(id)}/`;
    return new URL(path, ensureTrailingSlash(site.notesDocsUrl)).toString();
  }

  return `/${collection}/${entryPath(id)}/`;
}

export function noteSectionHref(section: string) {
  return new URL(`${section}/`, ensureTrailingSlash(site.notesDocsUrl)).toString();
}

export function pageHref(slug: string) {
  return slug === "about" ? "/about/" : `/${slug}/`;
}

export function ensureTrailingSlash(url: string) {
  return url.endsWith("/") ? url : `${url}/`;
}

export function isExternalUrl(url: string) {
  return /^https?:\/\//u.test(url);
}

export function formatLongDate(date?: Date) {
  if (!date) return "";

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
}

export function formatShortDate(date?: Date) {
  if (!date) return "";

  return new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
  }).format(date);
}

export function titleCaseSection(section: string) {
  return {
    economics: "Economics",
    mathematics: "Mathematics",
    programming: "Programming",
  }[section] ?? section;
}

export function titleCasePaperType(paperType: string, plural = false) {
  const singular = {
    explainer: "Explainer",
    replication: "Replication",
    "reading note": "Reading Note",
    "method note": "Method Note",
  }[paperType];

  const pluralTitle = {
    explainer: "Explainers",
    replication: "Replications",
    "reading note": "Reading Notes",
    "method note": "Method Notes",
  }[paperType];

  return (plural ? pluralTitle : singular) ?? paperType;
}
