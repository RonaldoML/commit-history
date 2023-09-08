"use client"
import { CardList } from './components/CardList/CardList';
import { Error } from './components/Error/Error';
import { Loading } from './components/Loading/Loading';

import { useFetch } from './components/hooks/useFetch';

import styles from './page.module.css';

export default function Home() {
  const url = '/api/commit';
  const [isLoading, data, error] = useFetch(url);

  return (
    <main className={styles.main}>
      <h2 className={styles.title}>Commit History</h2>
      {error && <Error error={error} />}
      {isLoading && <Loading />}
      {data && <CardList data={data} />}
    </main>
  )
}
