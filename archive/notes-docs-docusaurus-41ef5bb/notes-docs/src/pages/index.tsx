import React from 'react';
import Layout from '@theme/Layout';
import styles from './index.module.css';

const shelves = [
  {
    title: 'Economics',
    href: '/economics/',
    description: 'Spatial economics, empirical strategy, and the frameworks that keep returning in applied work.',
  },
  {
    title: 'Mathematics',
    href: '/mathematics/',
    description: 'Reference notes for the mathematical tools I want close at hand while reading and working.',
  },
  {
    title: 'Programming',
    href: '/programming/',
    description: 'Workflow notes on assistants, reproducibility, environments, and practical research systems.',
  },
];

export default function Home(): React.JSX.Element {
  return (
    <Layout title="Notes Library" description="A library of economics, mathematics, and programming notes.">
      <main className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.eyebrow}>Notes Library</div>
          <h1 className={styles.title}>One site, three growing shelves.</h1>
          <p className={styles.lede}>
            The notes archive is organized as three separate documentation spaces so each subject can grow on its own timeline
            without turning a single sidebar into a hallway.
          </p>

          <div className={styles.grid}>
            {shelves.map((shelf) => (
              <a className={styles.card} href={shelf.href} key={shelf.title}>
                <h2 className={styles.cardTitle}>{shelf.title}</h2>
                <p className={styles.cardDescription}>{shelf.description}</p>
                <div className={styles.cardMeta}>Open shelf</div>
              </a>
            ))}
          </div>
        </div>
      </main>
    </Layout>
  );
}
