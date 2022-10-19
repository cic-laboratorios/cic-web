import Image from "next/image";

import styles from "@styles/components/slide-down/SlideDown.module.scss";

export default function SlideDown() {
  function goToOurServices() {
    const ourServicesWrapper = document.getElementById("our-services");

    if (ourServicesWrapper) {
      ourServicesWrapper.scrollIntoView({behavior: "smooth", block: "start"});
    }
  }

  return (
    <div className={styles.slideDownWrapper}>
      <div className={styles.slideDownCopy}>Desliza para ver más</div>
      <button onClick={goToOurServices} className={`${styles.slideDownIcon}`}>
        <Image
          src="/img/slide-down-icon.png"
          alt="slide down icon"
          aria-hidden="true"
          width="24"
          height="20"
        ></Image>
      </button>
    </div>
  );
}
