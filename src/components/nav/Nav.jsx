import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/router";

import { MENU } from "./constants/index";
import SocialMedia from "@components/social-media/SocialMedia";
import useScrollDirection from "@utils/NavScroll";

import styles from "@styles/components/nav/Nav.module.scss";

export default function Nav({ navLinks, mobileNavLinks }) {
  const [isOpen, toggleIsOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const router = useRouter();

  function toggleMenu() {
    const body = document.querySelector("body");
    const overflow = !isOpen ? "hidden" : "auto";
    body.style.overflow = overflow;

    toggleIsOpen(!isOpen);
  }

  return (
    <header className={`${scrollDirection === "down" ? styles.mainNavHidden : styles.mainNavVisible} ${styles.mainNav} ${styles.header}`}>
      <div className={styles.headerWrapper}>
        <h1>
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/img/logo/logo-white.svg"
            />
            <img
              src="/img/logo/logo-tablet-mobile.svg"
              alt={MENU.LOGO_ALT}
              className={styles.logo}
            />
          </picture>
        </h1>
        <button onClick={toggleMenu} className={styles.toggleMenu}>
          {MENU.LABEL}
        </button>
        {isOpen && (
          <div className={`${styles.sideNavWrapper} `}></div>
        )}
        <div className={`${styles.sideNav} ${isOpen && styles.sideNavOpened}`}>
          <div className={styles.sideNavCloseIcon}>
            <button onClick={toggleMenu} className={styles.toggleMenu}>
              <img
                src="/img/nav/close-menu.svg"
                width="22"
                height="22"
                alt=""
              ></img>
            </button>
          </div>
          <nav className={styles.navbarMobile}>
            {mobileNavLinks.map((navItem, index) => (
              <Link key={index} href={navItem.link}>
                <a>{navItem.label}</a>
              </Link>
            ))}
          </nav>
          <SocialMedia color="#BC1919" isMenu></SocialMedia>
        </div>
        <nav className={styles.navbar}>
          {navLinks.map((navItem, index) => (
            <Link key={index} href={navItem.link}>
              <a className={`generalButton ${navItem.isConsultNowButton && 'isConsultNowButton'} ${router.pathname === navItem.link && 'active'}`}>
                {navItem.label}
              </a>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
