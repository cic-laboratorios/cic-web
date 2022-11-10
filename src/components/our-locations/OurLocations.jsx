import Image from "next/image";

import styles from "@styles/components/our-locations/OurLocations.module.scss";

export default function OurLocations({ ourLocations }) {
  return (
    <div className={styles.ourLocationsWrapper}>
      <div className={styles.ourLocationsListWrapper}>
        {ourLocations.map((location, index) => (
          <div className={styles.ourLocationsListItem} key={index}>
            <div className={styles.ourLocationsListItemImageHeading}>
              <div>
                <Image
                  src={location.img}
                  alt={location.alt}
                  width={location.width}
                  height={location.height}
                ></Image>
              </div>
              <div className={styles.ourLocationsListItemHeading}>
                {location.heading}
              </div>
            </div>
            <div className={styles.ourLocationsListItemAddress}>
              {location.address}
            </div>
            <div className={styles.ourLocationsListItemCopy}>
              {location.copy}
            </div>
            <div className={styles.ourLocationsListItemCellPhoneNumber}>
              {location.cellPhoneNumber}
            </div>
            <div className={styles.ourLocationsListItemPhoneNumber}>
              {location.phoneNumber}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
