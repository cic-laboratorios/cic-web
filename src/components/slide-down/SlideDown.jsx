import Image from "next/image";

import styles from "@styles/components/slide-down/SlideDown.module.scss";

export default function SlideDown({ slideDownData }) {
  function goToOurServices() {
    const ourServicesWrapper = document.getElementById("our-services");

    if (ourServicesWrapper) {
      ourServicesWrapper.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }

  return (
    <div className={styles.slideDownWrapper}>
      <div className={styles.slideDownCopy}>{slideDownData.label}</div>
      <button onClick={goToOurServices} className={`${styles.slideDownIcon}`}>
        <Image
          src={slideDownData.icon.src}
          alt={slideDownData.icon.alt}
          aria-hidden="true"
          width={slideDownData.icon.width}
          height={slideDownData.icon.height}
        ></Image>
      </button>
    </div>
  );
}
