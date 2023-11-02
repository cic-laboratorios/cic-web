import Image from "next/image";
import Link from "next/link";

import styles from "@styles/components/hero/Hero.module.scss";

export default function Hero({heroData}) {
  console.log(heroData);
  return(
    <section className={`${styles.heroWrapper}`}>
      <div className={`${styles.heroCopy}`}>
        <h2>{heroData.title}</h2>
        <p>{heroData.copy}</p>
        <Link href={heroData.link.href}>
            <a
              className={`${styles.consultButton} generalButton isConsultNowButton test`}
              target={heroData.link.target}
            >
              {heroData.link.label}
            </a>
          </Link>
      </div>
      <div className={`${styles.heroImageWrapper}`}>
        <Image
          className={`${styles.heroImage}`}
          src={heroData.img.src} 
          width={700}
          height={444}
          layout="responsive"
          alt={heroData.img.alt}>
        </Image>
      </div>

    </section>
  )
}