"use client"
import { CardList } from './components/CardList/CardList';

import { useFetch } from './components/hooks/useFetch';

import styles from './page.module.css';

export default function Home() {
  const url = '/api/commit';
  const [, data,] = useFetch(url);

  return (
    <main className={styles.main}>
      <h2>Commit History</h2>
      {data && <CardList data={data} />}
    </main>
  )
}
