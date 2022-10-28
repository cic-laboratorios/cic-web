import Image from "next/image";

import styles from "@styles/components/our-locations/OurLocations.module.scss";

export default function OurLocations({ ourLocations, showHeading }) {
  return (
    <div className={styles.ourLocationsWrapper}>
      {showHeading && (
        <div className={styles.ourLocationsHeading}>Nuestros Sedes</div>
      )}
      <div className={styles.ourLocationsListWrapper}>
        {ourLocations.map((location, index) => (
          <div className={styles.ourLocationsListItem} key={index}>
            <div className={styles.ourLocationsListItemImageHeading}>
              <div>
                <Image
                  src={location.img}
                  alt="Location icon"
                  width="24"
                  height="24"
                ></Image>
              </div>
              <div className={styles.ourLocationsListItemHeading}>
                {location.heading}
              </div>
            </div>
            <div className={styles.ourLocationsListItemCopy}>
              {location.copy}
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
