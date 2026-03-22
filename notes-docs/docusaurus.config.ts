import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const mainSiteUrl = process.env.MAIN_SITE_URL ?? 'https://example.com/';

const config: Config = {
  title: 'Li Zhicheng Notes',
  tagline: 'Economics, mathematics, and programming notes arranged as a durable working library.',
  favicon: 'img/favicon.ico',

  future: {
    v4: true,
  },

  url: 'https://notes.example.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  markdown: {
    hooks: {
      onBrokenMarkdownLinks: 'throw',
    },
  },

  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          path: './notes-content',
          routeBasePath: '/',
          sidebarPath: './sidebars.ts',
        },
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/docusaurus-social-card.jpg',
    colorMode: {
      defaultMode: 'light',
      disableSwitch: true,
      respectPrefersColorScheme: false,
    },
    navbar: {
      title: 'Notes',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'notesSidebar',
          position: 'left',
          label: 'Library',
        },
        {
          href: mainSiteUrl,
          label: 'Back to main site',
          position: 'right',
          className: 'navbar-main-site-link',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'Shelves',
          items: [
            {label: 'Economics', to: '/category/economics'},
            {label: 'Mathematics', to: '/category/mathematics'},
            {label: 'Programming', to: '/category/programming'},
          ],
        },
        {
          title: 'Reading paths',
          items: [
            {label: 'Reference notes', to: '/economics/spatial-equilibrium-foundations'},
            {label: 'Workflow notes', to: '/programming/claude-code-setup'},
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Li Zhicheng.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.github,
    },
    docs: {
      sidebar: {
        hideable: true,
        autoCollapseCategories: false,
      },
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
