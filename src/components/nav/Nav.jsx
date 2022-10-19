import Image from "next/image";
import Link from "next/link";

import styles from "@styles/components/nav/Nav.module.scss";

const navLinks = [
  {
    link: "",
    label: "Inicio",
  },
  {
    link: "procedures",
    label: "Nuestras pruebas",
  },
  {
    link: "consultNow",
    label: "Consultar Ahora",
    isConsultNow: true
  },
];

export default function Nav() {
  return (
    <header className={styles.header}>
      <h1>
        <Image
          src="/img/logo-white.svg"
          alt="Ciclaboratorios"
          width="225"
          height="58">
        </Image>
      </h1>
      <nav className={styles.navbar}>
        {navLinks.map((navItem, index) => (
          <Link key={index} href={navItem.link}>
            <a className={`consultNow ${navItem.isConsultNow ? "active" : ""}`}>{navItem.label}</a>
          </Link>
        ))}
      </nav>
    </header>
  );
}
