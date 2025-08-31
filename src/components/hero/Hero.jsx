import Image from "next/image";
import Link from "next/link";
import styles from "@styles/components/hero/Hero.module.scss";

export default function Hero({ heroData }) {
  return (
    <section className={styles.heroWrapper}>
      <div className={styles.heroCopy}>
        <h2>{heroData.title}</h2>
        <p>{heroData.copy}</p>
        <Link
          href={heroData.link.href}
          className={`${styles.consultButton} generalButton isConsultNowButton test`}
          target={heroData.link.target}
          rel={heroData.link.target === "_blank" ? "noopener noreferrer" : undefined}
        >
          {heroData.link.label}
        </Link>
      </div>

      <div className={styles.heroImageWrapper}>
        <Image
          className={styles.heroImage}
          src={heroData.img.src}
          alt={heroData.img.alt}
          fill
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          style={{ objectFit: "cover" }}
        />
      </div>
    </section>
  );
}
