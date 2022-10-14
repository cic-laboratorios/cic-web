import Image from "next/image";

import styles from "@styles/components/our-allies/OurAllies.module.scss";

export default function OurLocations({ ourAllies }) {
  return (
    <div  className={styles.ourAlliesWrapper}>
      <div className={styles.ourAlliesHeading}>Nuestros Aliados</div>
      <div className={styles.ourAlliesListWrapper}>
        {ourAllies.map((allie, index) => (
          <div className={styles.ourAlliesListItem} key={index}>
            <div>
                <Image
                  src={allie.img}
                  alt="Logo"
                  width="97"
                  height="97">
                </Image>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
