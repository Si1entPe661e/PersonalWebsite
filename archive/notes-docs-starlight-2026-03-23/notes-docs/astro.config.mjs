// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

const mainSiteUrl = process.env.MAIN_SITE_URL ?? 'https://example.com/';
const notesSiteUrl = process.env.NOTES_SITE_URL ?? 'https://notes.example.com';

export default defineConfig({
  site: notesSiteUrl,
  integrations: [
    starlight({
      title: 'Notes',
      customCss: ['./src/styles/custom.css'],
      sidebar: [
        {
          label: 'Library',
          items: [
            { label: 'Notes Home', slug: 'index' },
            { label: 'Back to main site', link: mainSiteUrl },
          ],
        },
        {
          label: 'Economics',
          autogenerate: { directory: 'economics' },
        },
        {
          label: 'Mathematics',
          autogenerate: { directory: 'mathematics' },
        },
        {
          label: 'Programming',
          autogenerate: { directory: 'programming' },
        },
      ],
    }),
  ],
});
