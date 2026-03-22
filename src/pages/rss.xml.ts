import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { entryHref, site } from "../lib/site";

export async function GET(context: { site: URL | undefined }) {
  const [essays, blog] = await Promise.all([
    getCollection("essays", ({ data }) => !data.draft),
    getCollection("blog", ({ data }) => !data.draft),
  ]);

  const items = [...essays, ...blog]
    .sort((a, b) => ((b.data.date?.getTime() ?? 0) - (a.data.date?.getTime() ?? 0)))
    .map((entry) => ({
      title: entry.data.title,
      description: entry.data.description,
      pubDate: entry.data.date,
      link: entry.collection === "essays" ? entryHref("essays", entry.id) : entryHref("blog", entry.id),
    }));

  return rss({
    title: `${site.title} RSS`,
    description: site.description,
    site: context.site ?? site.url,
    items,
  });
}
