import Image from "next/image";
import Link from "next/link";

import styles from "@styles/components/footer/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerNavigationWrapper}>
        <Image
          src="/img/logo-footer.png"
          alt="Ciclaboratorios"
          width="225"
          height="58"
        ></Image>
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
            <nav className={styles.footerNavigationBySocialMediaNavWrapper}>
              <Link href="">
                <a>
                  <Image
                    src="/img/social-media/instagram-icon.png"
                    alt="Ciclaboratorios"
                    width="28"
                    height="28"
                  ></Image>
                </a>
              </Link>
              <Link href="">
                <a>
                  <Image
                    src="/img/social-media/facebook-icon.png"
                    alt="Ciclaboratorios"
                    width="28"
                    height="28"
                  ></Image>
                </a>
              </Link>
            </nav>
          </div>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        © 2022 CIC Laboratorios. Todos derechos reservados
      </div>
    </footer>
  );
}
