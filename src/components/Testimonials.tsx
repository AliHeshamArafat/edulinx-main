// components/Testimonials.tsx
import styles from "./Testimonials.module.css";
import TestimonialCard from "./TestimonialCard";

interface Testimonial {
  id: number | string;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  avatar: string;
}

interface TestimonialsProps {
  title: string;
  subtitle: string;
  testimonials: Testimonial[];
}

export default function Testimonials({
  title,
  subtitle,
  testimonials,
}: TestimonialsProps) {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.testimonialGrid}>
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.id}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              testimonial={testimonial.testimonial}
              avatar={testimonial.avatar}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
