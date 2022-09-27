import Head from "next/head";

import styles from "@styles/pages/Home.module.scss";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>CIC</title>
        <meta name="description" content="Pagina web CIC Laboratorios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>Home page works</h1>
      </main>
    </div>
  );
}
