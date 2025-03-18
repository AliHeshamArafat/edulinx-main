import styles from "./TestimonialCard.module.css";

interface TestimonialCardProps {
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar: string;
}

export default function TestimonialCard({
  name,
  role,
  company,
  testimonial,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className={styles.testimonialCard}>
      <div className={styles.testimonialContent}>
        <p className={styles.quote}>"{testimonial}"</p>
      </div>
      <div className={styles.testimonialFooter}>
        <div className={styles.avatarContainer}>
          <img src={avatar} alt={name} className={styles.avatar} />
        </div>
        <div className={styles.testimonialInfo}>
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.role}>
            {role}, {company}
          </p>
        </div>
      </div>
    </div>
  );
}
