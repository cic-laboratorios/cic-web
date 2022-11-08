import Image from "next/image";
import { useEffect, useState } from "react";

import { APP_CONSTANTS } from "@constants/index";
import useDeviceSize from "@utils/WindowResize";
import OurLocations from "@components/our-locations/OurLocations";

import styles from "@styles/components/carousel/Carousel.module.scss";

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
  };

  const next = () => {
    setIndex((currentIndex) => {
      if (currentIndex < slidersItemsBySize.length - 1) {
        return currentIndex + 1;
      }

      return currentIndex;
    });
  };

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

    totalSliders = carouselData.sliders.length / totalBySize;

    if (!Number.isInteger(totalSliders)) {
      totalSliders++;
      totalSliders = ~~totalSliders;
    }

    for (let startIndex = 0; startIndex < totalSliders; startIndex++) {
      const endIndex = startIndex + 1;

      sliders.push({
        data: carouselData.sliders.slice(
          startIndex * totalBySize,
          endIndex * totalBySize
        ),
      });
    }

    setSlidersItemsBySize(sliders);
  }, [carouselData, width]);

  return (
    <div
      className={styles.carouselWrapper}
      onTouchStart={onTouchStart}
      onTouchMove={onTouchMove}
      onTouchEnd={onTouchEnd}
    >
      <div className={styles.carouselHeading}>{carouselData.title}</div>
      <div className={styles.carouselContainer}>
        <button
          onClick={previous}
          className={`${styles.carouselAction} ${styles.carouselLeftButton}`}
        >
          <Image
            src={APP_CONSTANTS.HOME.CAROUSEL.NAV.PREVIOUS_ICON}
            alt={APP_CONSTANTS.HOME.CAROUSEL.NAV.PREVIOUS_ALT_ICON}
            width={APP_CONSTANTS.HOME.CAROUSEL.NAV.ICON_WIDTH}
            height={APP_CONSTANTS.HOME.CAROUSEL.NAV.ICON_HEIGHT}
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
            src={APP_CONSTANTS.HOME.CAROUSEL.NAV.NEXT_ICON}
            alt={APP_CONSTANTS.HOME.CAROUSEL.NAV.NEXT_ALT_ICON}
            width={APP_CONSTANTS.HOME.CAROUSEL.NAV.ICON_WIDTH}
            height={APP_CONSTANTS.HOME.CAROUSEL.NAV.ICON_HEIGHT}
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
