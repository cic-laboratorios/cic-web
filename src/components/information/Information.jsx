import Image from "next/image";
import Link from "next/link";

import styles from "@styles/components/information/Information.module.scss";

export default function Information({ data }) {
  return (
    <div
      className={`${styles.informationWrapper} ${
        data.layout == "reverse" && styles.informationWrapperReverse
      }`}
    >
      <div className={`${styles.informationCopyWrapper} ${data.isMainInformation && styles.isMainInformation}`}>
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
        <div className="only-mobile">
          <div className={`${styles.informationWrapperMainImage} `}>
            <img
              src="/img/home/results-online.png"
              alt={data.img.alt}
            ></img>
          </div>
        </div>
      )}
      <div className={`${styles.informationImage} ${data.isMainInformation && "only-from-tablet"}`}>
        <div
          className={`${styles.informationWrapperImage} ${
            data.isMainInformation && "only-from-tablet"
          }`}
        >
          <img src={data.img.src} alt={data.img.alt} />
        </div>
      </div>
    </div>
  );
}
