import Link from "next/link";

import styles from "@styles/components/information/Information.module.scss";

export default function Information({ informationData }) {
  return (
    <div
      className={`
        ${styles.informationWrapper}
        ${informationData.layout == "reverse" && styles.informationWrapperReverse}
        ${informationData.isMainInformation && styles.isMainInformation}
      `}
    >
      <div className={`${styles.informationCopyWrapper}`}>
        <h2 className={styles.informationTitle}>{informationData.title}</h2>
        <p className={styles.informationCopy}>{informationData.copy}</p>
        {informationData.link && (
          <Link href={informationData.link.href}>
            <a
              className={`${styles.informationGeneralButton} generalButton isConsultNowButton`}
              target={informationData.link.target}
            >
              {informationData.link.label}
            </a>
          </Link>
        )}
      </div>
      <div className={`${styles.informationImageOnlyMobile} only-mobile`}>
        <img src={informationData.img.src} alt={informationData.img.alt}></img>
      </div>
      <div className="only-from-tablet">
        <div className={`${styles.informationImage}`}>
          <div
            className={styles.informationWrapperBubble}
            style={{
              backgroundImage: `url(${informationData.img.src})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
}
