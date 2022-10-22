import Head from "next/head";

import Nav from "@components/nav/Nav";
import Footer from "@components/footer/Footer";

import styles from "@styles/layouts/MainLayout.module.scss";

export default function MainLayout({ navLinks, mobileNavLinks, children }) {
  return (
    <div>
      <Head>
        <title>CIC</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="Pagina web CIC Laboratorios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav navLinks={navLinks} mobileNavLinks={mobileNavLinks}></Nav>
      <main className={styles.mainWrapper}>{children}</main>
      <Footer></Footer>
    </div>
  );
}
