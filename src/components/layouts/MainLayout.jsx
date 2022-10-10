import Head from "next/head";

import Nav from "@components/nav/Nav";

export default function MainLayout({ children }) {
  return (
    <div>
      <Head>
        <title>CIC</title>
        <meta name="description" content="Pagina web CIC Laboratorios" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Nav></Nav>
      <main>{children}</main>
    </div>
  );
}
