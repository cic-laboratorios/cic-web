import Image from "next/image";

import styles from "@styles/components/our-allies/OurAllies.module.scss";

export default function OurLocations({ ourAllies }) {
  return (
    <div  className={styles.ourAlliesWrapper}>
      <div className={styles.ourAlliesHeading}>{ourAllies.title}</div>
      <div className={styles.ourAlliesListWrapper}>
        {ourAllies.allies.map((allie, index) => (
          <div className={styles.ourAlliesListItem} key={index}>
            <div>
                <Image
                  src={allie.img}
                  alt={allie.alt}
                  width={allie.width}
                  height={allie.height}>
                </Image>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
