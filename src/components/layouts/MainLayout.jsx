import Head from "next/head";

import Nav from "@components/nav/Nav";
import Footer from "@components/footer/Footer";

import styles from "@styles/layouts/MainLayout.module.scss";

export default function MainLayout({ navLinks, mobileNavLinks, children, isFixedHeaderAndFooter }) {
  return (
    <div className={`${isFixedHeaderAndFooter && styles.fixedHeaderAndFooter}`}>
      <Head>
        <title>CIC - Web</title>
      </Head>
      <Nav navLinks={navLinks} mobileNavLinks={mobileNavLinks} isFixedHeaderAndFooter={isFixedHeaderAndFooter}></Nav>
      <main className={styles.mainWrapper}>{children}</main>
      <Footer></Footer>
    </div>
  );
}
