"use client";

import {pages as allPages} from './config/home'
import styles from './page.module.css'
import { useMemo, useState } from "react";

export default function Home() {
  const [filterTag, setFilterTag] = useState<string | null>(null);

  const pages = useMemo(() => {
    return !filterTag
      ? allPages
      : allPages.filter((page) => page.tags?.includes(filterTag));
  }, [filterTag]);

  const pageDetails = pages.map((page) => {
      return (
        <div className={styles.card} key={page.slug}>
          <a href={`/pages/${page.slug}`}>{page.name}</a>
          <p>{page.description}</p>
        </div>
      )
      })

  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <h1>Playground</h1>
        <h2>Code snippet experiments with different libraries</h2>
      </div>

      <div className={styles.grid}>
          {pageDetails}
      </div>
    </main>
  )
}
