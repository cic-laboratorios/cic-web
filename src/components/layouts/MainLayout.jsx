import Head from "next/head";

import Nav from "@components/nav/Nav";
import Footer from "@components/footer/Footer";

import styles from "@styles/layouts/MainLayout.module.scss";

export default function MainLayout({
  navLinks,
  children,
  isOurTestPage,
  footerData
}) {
  return (
    <div className={`${isOurTestPage && styles.isOurTestPage}`}>
      <Head>
        <title>CIC - Web</title>
      </Head>
      <Nav navLinks={navLinks}></Nav>
      <main className={styles.mainWrapper}>{children}</main>
      <Footer footerData={footerData}></Footer>
    </div>
  );
}
