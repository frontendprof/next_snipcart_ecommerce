import Head from 'next/head';
import Image from 'next/image';
import Header from '@components/Header';

import styles from '@styles/Home.module.scss';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shoez Store</title>
        <meta name="description" content="Cheap and quality meet without compromise in our store" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <main className={styles.main}>
        <p className={styles.description}>
          Get started by editing <code className={styles.code}>pages/index.js</code>
        </p>
      </main>

      <footer className={styles.footer}>
        &copy; Sumayya's Shoez Store {new Date().getFullYear()}
      </footer>
    </div>
  );
}
