import Image from "next/image";
import { useEffect, useState } from "react";

import styles from "@styles/components/carousel/Carousel.module.scss";
import OurLocations from "@components/our-locations/OurLocations";
import useDeviceSize from "@utils/WindowResize";

export default function Carousel({ carouselData }) {
  const [carouselIndex, setIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const minSwipeDistance = 50;
  const [width, height] = useDeviceSize();
  const [slidersItemsBySize, setSlidersItemsBySize] = useState([]);
  const mobileSize = 780;
  const largeScreenSize = 1440;

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      next();
    }

    if (isRightSwipe) {
      previous();
    }
  };

  const previous = () => {
    setIndex((currentIndex) => {
      if (currentIndex > 0) {
        return currentIndex - 1;
      }

      return currentIndex;
    });
  }

  const next = () => {
    setIndex((currentIndex) => {
      if (currentIndex < slidersItemsBySize.length - 1) {
        return currentIndex + 1;
      }

      return currentIndex;
    });
  }

  useEffect(() => {
    let totalBySize = 0;
    let totalSliders = 0;
    const sliders = [];

    if (width < mobileSize) {
      totalBySize = 4;
      setIndex(0);
    }

    if (width >= mobileSize) {
      totalBySize = 6;
      setIndex(0);
    }

    if (width >= largeScreenSize) {
      totalBySize = 10;
      setIndex(0);
    }

    totalSliders = carouselData.length / totalBySize;

    if (!Number.isInteger(totalSliders)) {
      totalSliders++;
      totalSliders = ~~totalSliders;
    }

    for(let startIndex = 0; startIndex<totalSliders; startIndex++) {
      const endIndex = startIndex + 1;

      sliders.push({
        data: carouselData.slice(startIndex*totalBySize, endIndex*totalBySize)
      });
    }

    setSlidersItemsBySize(sliders)
  }, [carouselData, width])

  return (
    <div className={styles.carouselWrapper} onTouchStart={onTouchStart} onTouchMove={onTouchMove} onTouchEnd={onTouchEnd}>
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
          {slidersItemsBySize.map((sliderItem, index) => (
            <div className={styles.carouselItem} key={index}>
              <OurLocations ourLocations={sliderItem.data}></OurLocations>
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
        {slidersItemsBySize.map((sliderItem, index) => (
          <button
            onClick={(event) => setIndex(index)}
            className={`${styles.dotsItem} ${
              carouselIndex == index && styles.dotsItemActive
            }`}
            key={index}
          ></button>
        ))}
      </div>
    </div>
  );
}
