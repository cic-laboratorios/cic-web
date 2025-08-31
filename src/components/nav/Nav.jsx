import Link from "next/link";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

import { MENU } from "./constants/index";
import SocialMedia from "@components/social-media/SocialMedia";
import useScrollDirection from "@utils/NavScroll";

import styles from "@styles/components/nav/Nav.module.scss";

export default function Nav({
  navLinks,
  socialMediaButtonsColors,
  socialMediaLinks,
}) {
  const [isOpen, toggleIsOpen] = useState(false);
  const scrollDirection = useScrollDirection();
  const router = useRouter();

  function toggleMenu() {
    const body = document.querySelector("body");
    body.style.overflow = !isOpen ? "hidden" : "auto";

    toggleIsOpen(!isOpen);
  }

  useEffect(
    () => () => {
      const body = document.querySelector("body");
      body.style.overflow = "auto";
    },
    []
  );

  return (
    <header
      className={`${
        scrollDirection === "down"
          ? styles.mainNavHidden
          : styles.mainNavVisible
      } ${styles.header} ${styles.mainNav}`}
    >
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
        {isOpen && <div className={`${styles.sideNavWrapper} `}></div>}
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
            {navLinks
              .filter((navItem) => !navItem.onlyForDesktop)
              .map((navItem, index) => (
                <Link
                  key={index}
                  href={navItem.link}
                  className={`${
                    router.pathname === navItem.link && "menu-active"
                  }`}
                  target={navItem.target}
                >
                  {navItem.label}
                </Link>
              ))}
          </nav>
          <SocialMedia
            color={socialMediaButtonsColors}
            isMenu
            socialMediaLinks={socialMediaLinks}
          ></SocialMedia>
        </div>
        <nav className={styles.navbar}>
          {navLinks.map((navItem, index) => (
            <Link
              key={index}
              href={navItem.link}
              className={`generalButton ${
                navItem.isConsultNowButton && "isConsultNowButton"
              } ${router.pathname === navItem.link && "menu-active"}`}
              target={navItem.target}
            >
              {navItem.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}

