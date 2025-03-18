import styles from "./FeaturedCourses.module.css";
import Link from "next/link";
import CourseCard from "./CourseCard";

interface Course {
  id: number | string;
  title: string;
  instructor: string;
  rating: number;
  students: number;
  price: number;
  image: string;
}

interface FeaturedCoursesProps {
  title: string;
  subtitle: string;
  courses: Course[];
  viewAllLink: string;
  viewAllText: string;
}

export default function FeaturedCourses({
  title,
  subtitle,
  courses,
  viewAllLink,
  viewAllText,
}: FeaturedCoursesProps) {
  return (
    <section className={styles.featuredCourses}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h2 className={styles.title}>{title}</h2>
          <p className={styles.subtitle}>{subtitle}</p>
        </div>

        <div className={styles.courseGrid}>
          {courses.map((course) => (
            <CourseCard
              key={course.id}
              id={course.id}
              title={course.title}
              instructor={course.instructor}
              rating={course.rating}
              students={course.students}
              price={course.price}
              image={course.image}
            />
          ))}
        </div>

        <div className={styles.viewAll}>
          <Link href={viewAllLink} className={styles.viewAllBtn}>
            {viewAllText}
          </Link>
        </div>
      </div>
    </section>
  );
}
