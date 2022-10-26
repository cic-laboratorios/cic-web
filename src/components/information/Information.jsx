import Link from "next/link";

import styles from "@styles/components/information/Information.module.scss";

export default function Information({ data }) {
  return (
    <div
      className={`
        ${styles.informationWrapper}
        ${ data.layout == "reverse" && styles.informationWrapperReverse}
        ${data.isMainInformation && styles.isMainInformation}
      `}
    >
      <div className={`${styles.informationCopyWrapper}`}>
        <h2 className={styles.informationTitle}>{data.title}</h2>
        <p className={styles.informationCopy}>{data.copy}</p>
        {data.link && (
          <Link href={data.link.href}>
            <a className={`${styles.informationConsultNow} consultNow active`}>
              {data.link.label}
            </a>
          </Link>
        )}
      </div>
      {data.isMainInformation && (
        <div className={`${styles.informationImageOnlyMobile} only-mobile`}>
          <div>
            <img
              src={data.img.src}
              alt={data.img.alt}
            ></img>
          </div>
        </div>
      )}
      <div className={`${styles.informationImage}`}>
        <div
          className={styles.informationWrapperBubble}
          style={{
            backgroundImage: `url(${data.img.src})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        >
        </div>
      </div>
    </div>
  );
}
