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
        docs: false,
        blog: false,
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'economics',
        path: './economics-docs',
        routeBasePath: 'economics',
        sidebarPath: './sidebarsEconomics.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'mathematics',
        path: './mathematics-docs',
        routeBasePath: 'mathematics',
        sidebarPath: './sidebarsMathematics.ts',
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'programming',
        path: './programming-docs',
        routeBasePath: 'programming',
        sidebarPath: './sidebarsProgramming.ts',
      },
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
        {to: '/economics/', label: 'Economics', position: 'left'},
        {to: '/mathematics/', label: 'Mathematics', position: 'left'},
        {to: '/programming/', label: 'Programming', position: 'left'},
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
          title: 'Docs',
          items: [
            {label: 'Economics', to: '/economics/'},
            {label: 'Mathematics', to: '/mathematics/'},
            {label: 'Programming', to: '/programming/'},
          ],
        },
        {
          title: 'Main site',
          items: [
            {label: 'Back to homepage', href: mainSiteUrl},
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
