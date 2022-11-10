import Image from "next/image";

import styles from "@styles/components/our-services/OurServices.module.scss";

export default function OurServices({ ourServices }) {
  return (
    <div className={styles.ourServicesWrapper} id="our-services">
      <div className={styles.ourServicesHeading}>{ourServices.title}</div>
      <div className={styles.ourServicesListWrapper}>
        {ourServices.services.map((service, index) => (
          <div key={index}>
            <div>
                <Image
                  src={service.img}
                  alt={service.alt}
                  width={service.width}
                  height={service.height}>
                </Image>
            </div>
            <div className={styles.ourServicesListItemHeading}>
                {service.heading}
            </div>
            <div className={styles.ourServicesListItemCopy}>
                {service.copy}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
