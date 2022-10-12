import Image from "next/image";
import Link from "next/link";

import styles from "@styles/components/information/Information.module.scss";

export default function Information({ data }) {
  return (
    <div className={`${styles.informationWrapper} ${data.layout == "reverse" ? styles.informationWrapperReverse : ""}`}>
      <div className={`${data.isMainInformation ? styles.isMainInformation : ""}`}>
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
      <div>
        <Image
          src={data.img.src}
          alt={data.img.alt}
          width={data.img.width}
          height={data.img.height}
        ></Image>
      </div>
    </div>
  );
}
