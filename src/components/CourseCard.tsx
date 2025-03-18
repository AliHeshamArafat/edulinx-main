import styles from "./CourseCard.module.css";
import Link from "next/link";

interface CourseCardProps {
  id: number | string;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  price: number;
  image: string;
}

export default function CourseCard({
  id,
  title,
  instructor,
  rating,
  students,
  price,
  image,
}: CourseCardProps) {
  // Function to render stars based on rating
  const renderStars = (rating: number) => {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    const stars = [];

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <span key={`full-${i}`} className={styles.fullStar}>
          ★
        </span>
      );
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className={styles.halfStar}>
          ★
        </span>
      );
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(
        <span key={`empty-${i}`} className={styles.emptyStar}>
          ☆
        </span>
      );
    }

    return stars;
  };

  return (
    <div className={styles.courseCard}>
      <div className={styles.imageContainer}>
        <img src={image} alt={title} className={styles.courseImage} />
      </div>
      <div className={styles.courseContent}>
        <h3 className={styles.courseTitle}>{title}</h3>
        <p className={styles.instructor}>By {instructor}</p>
        <div className={styles.courseInfo}>
          <div className={styles.rating}>
            <span className={styles.ratingValue}>{rating.toFixed(1)}</span>
            <div className={styles.stars}>{renderStars(rating)}</div>
          </div>
          <div className={styles.students}>
            {students.toLocaleString()} students
          </div>
        </div>
        <div className={styles.courseFooter}>
          <span className={styles.price}>${price.toFixed(2)}</span>
          <Link href={`/courses/${id}`} className={styles.enrollBtn}>
            Enroll Now
          </Link>
        </div>
      </div>
    </div>
  );
}
