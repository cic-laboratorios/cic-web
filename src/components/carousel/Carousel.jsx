import Image from "next/image";
import { useState } from "react";

import styles from "@styles/components/carousel/Carousel.module.scss";
import OurLocations from "@components/our-locations/OurLocations";

export default function Carousel({ carouselData }) {
  const [carouselIndex, setIndex] = useState(0);

  function previous() {
    setIndex((currentIndex) => {
      if (currentIndex > 0) {
        return currentIndex - 1;
      }

      return currentIndex;
    });
  }

  function next() {
    setIndex((currentIndex) => {
      if (currentIndex < carouselData.length - 1) {
        return currentIndex + 1;
      }

      return currentIndex;
    });
  }

  return (
    <div className={styles.carouselWrapper}>
      <div className={styles.carouselHeading}>Nuestros Sedes</div>
      <div className={styles.carouselContainer}>
        <button
          onClick={previous}
          className={`${styles.carouselAction} ${styles.carouselLeftButton}`}
        >
          <Image
            src="/img/carousel-left-icon.png"
            alt="Previous slide"
            width="6"
            height="12"
          ></Image>
        </button>
        <div
          style={{ transform: `translateX(-${carouselIndex * 100}%)` }}
          className={`${styles.carousel}`}
        >
          {carouselData.map((carouselItem, index) => (
            <div className={styles.carouselItem} key={index}>
              <OurLocations ourLocations={carouselItem.data}></OurLocations>
            </div>
          ))}
        </div>
        <button
          onClick={next}
          className={`${styles.carouselAction} ${styles.carouselRightButton}`}
        >
          <Image
            src="/img/carousel-right-icon.png"
            alt="Next slide"
            width="6"
            height="12"
          ></Image>
        </button>
      </div>
      <div className={styles.dotsWrapper}>
        {carouselData.map((carouselItem, index) => (
          <button
            className={`${styles.dotsItem} ${carouselIndex == index && styles.dotsItemActive}`}
            key={index}></button>
        ))}
      </div>
    </div>
  );
}
