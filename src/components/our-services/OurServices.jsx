import Image from "next/image";

import styles from "@styles/components/our-services/OurServices.module.scss";

export default function OurServices({ ourServices }) {
  return (
    <div className={styles.ourServicesWrapper} id="our-services">
      <div className={styles.ourServicesHeading}>Nuestros servicios</div>
      <div className={styles.ourServicesListWrapper}>
        {ourServices.map((service, index) => (
          <div key={index}>
            <div>
                <Image
                  src={service.img}
                  alt="Service icon"
                  width="50"
                  height="50">
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
