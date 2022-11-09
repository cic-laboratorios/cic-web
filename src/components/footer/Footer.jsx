import Link from "next/link";

import styles from "@styles/components/footer/Footer.module.scss";
import SocialMedia from "@components/social-media/SocialMedia";

export default function Footer({ footerData }) {
  return (
    <footer className={styles.footerWrapper}>
      <div className={styles.footerNavigationWrapper}>
        <div className={styles.footerNavigationLogoWrapper}>
          <img src={footerData.logo} alt={footerData.logoAlt} />
        </div>
        <div className={styles.footerNavigation}>
          <div className={styles.footerNavigationByLink}>
            <nav className={styles.footerNavigationByLinkNavWrapper}>
              {footerData.navLinks.filter((navItem) => !navItem.isConsultNowButton).map((navItem, index) => (
                <Link href={navItem.link} key={index}>
                  <a>{navItem.label}</a>
                </Link>
              ))}
            </nav>
          </div>
          <div className={styles.footerNavigationBySocialMedia}>
            <SocialMedia
              color={footerData.socialMediaButtonsColors}
              socialMediaLinks={footerData.socialMediaLinks}
            ></SocialMedia>
          </div>
        </div>
      </div>
      <div className={styles.footerCopyright}>{footerData.copyright}</div>
    </footer>
  );
}
