import styles from "./HeroSection.module.css";
import Link from "next/link";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  primaryBtnText: string;
  primaryBtnLink: string;
  secondaryBtnText?: string;
  secondaryBtnLink?: string;
  imageUrl: string;
  imageAlt: string;
}

export default function HeroSection({
  title,
  subtitle,
  primaryBtnText,
  primaryBtnLink,
  secondaryBtnText,
  secondaryBtnLink,
  imageUrl,
  imageAlt,
}: HeroSectionProps) {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.subtitle}>{subtitle}</p>
          <div className={styles.cta}>
            <Link href={primaryBtnLink} className={styles.primaryBtn}>
              {primaryBtnText}
            </Link>
            {secondaryBtnText && secondaryBtnLink && (
              <Link href={secondaryBtnLink} className={styles.secondaryBtn}>
                {secondaryBtnText}
              </Link>
            )}
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={imageUrl} alt={imageAlt} className={styles.heroImage} />
        </div>
      </div>
    </section>
  );
}
