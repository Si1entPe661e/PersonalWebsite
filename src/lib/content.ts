import { getCollection, type CollectionEntry, type CollectionKey } from "astro:content";
import { titleCasePaperType, titleCaseSection } from "./site";

function sortByDateValue<T extends { data: { date?: Date; updated?: Date } }>(entries: T[]) {
  return [...entries].sort((a, b) => {
    const left = (a.data.updated ?? a.data.date)?.getTime() ?? 0;
    const right = (b.data.updated ?? b.data.date)?.getTime() ?? 0;
    return right - left;
  });
}

export async function getPublishedCollection<T extends CollectionKey>(collection: T) {
  const entries = await getCollection(collection, ({ data }) => !data.draft);
  return sortByDateValue(entries);
}

export function getFeaturedEntries<T extends { data: { featured?: boolean } }>(entries: T[], limit = 3) {
  return entries.filter((entry) => entry.data.featured).slice(0, limit);
}

export function groupNotesBySection(entries: CollectionEntry<"notes">[]) {
  const groups = new Map<string, CollectionEntry<"notes">[]>();
  const order = ["economics", "mathematics", "programming"];

  for (const entry of entries) {
    const key = entry.data.section;
    const items = groups.get(key) ?? [];
    items.push(entry);
    groups.set(key, items);
  }

  return Array.from(groups.entries())
    .sort(([left], [right]) => order.indexOf(left) - order.indexOf(right))
    .map(([section, items]) => ({
      section,
      title: titleCaseSection(section),
      items: [...items].sort((a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title)),
    }));
}

export function groupPapersByType(entries: CollectionEntry<"papers">[]) {
  const groups = new Map<string, CollectionEntry<"papers">[]>();
  const order = ["explainer", "replication", "reading note", "method note"];

  for (const entry of entries) {
    const key = entry.data.paperType;
    const items = groups.get(key) ?? [];
    items.push(entry);
    groups.set(key, items);
  }

  return Array.from(groups.entries())
    .sort(([left], [right]) => order.indexOf(left) - order.indexOf(right))
    .map(([paperType, items]) => ({
      paperType,
      title: titleCasePaperType(paperType, true),
      items: sortByDateValue(items),
    }));
}

export function getAdjacentNotes(entries: CollectionEntry<"notes">[], id: string) {
  const ordered = [...entries].sort((a, b) => {
    const sectionCompare = a.data.section.localeCompare(b.data.section);
    if (sectionCompare !== 0) return sectionCompare;
    return a.data.order - b.data.order || a.data.title.localeCompare(b.data.title);
  });

  const index = ordered.findIndex((entry) => entry.id === id);

  return {
    prev: index > 0 ? ordered[index - 1] : undefined,
    next: index >= 0 && index < ordered.length - 1 ? ordered[index + 1] : undefined,
  };
}
