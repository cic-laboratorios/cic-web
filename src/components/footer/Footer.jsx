import Link from "next/link";

import styles from "@styles/components/footer/Footer.module.scss";
import SocialMedia from "@components/social-media/SocialMedia";

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerNavigationWrapper}>
        <div className={styles.footerNavigationLogoWrapper}>
          <img src="/img/logo/logo-footer.png" alt="Ciclaboratorios" />
        </div>
        <div className={styles.footerNavigation}>
          <div className={styles.footerNavigationByLink}>
            <nav className={styles.footerNavigationByLinkNavWrapper}>
              <Link href="">
                <a>Inicio</a>
              </Link>
              <Link href="">
                <a>Portafolio</a>
              </Link>
            </nav>
          </div>
          <div className={styles.footerNavigationBySocialMedia}>
            <SocialMedia color="#FFFFFF"></SocialMedia>
          </div>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        © 2022 CIC Laboratorios. Todos derechos reservados
      </div>
    </footer>
  );
}
