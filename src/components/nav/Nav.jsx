import Image from "next/image";
import Link from "next/link";

import styles from "@styles/components/nav/index.module.css"

const navLinks = [
  {
    link: '',
    label: 'Inicio'
  },
  {
    link: 'procedures',
    label: 'Nuestras pruebas'
  },
  {
    link: 'consult-now',
    label: 'Consultar Ahora'
  }
];

export default function Nav({ data, navItems }) {
  return (
    <header className={styles.header}>
      <h1>
        <Image
          src="/img/logo.png"
          alt="Ciclaboratorios"
          width="256"
          height="58">
        </Image>
      </h1>
      {navItems}
      <nav className={styles.navbar}>
        {
          navLinks.map((navItem, index) => (
            <Link
              key={index}
              href={navItem.link}>
              <a className={styles.navbarItem}>{navItem.label}</a>
            </Link>
          ))
        }
      </nav>
    </header>
  );
};
