import React from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import FeaturedCourses from "@/components/FeaturedCourses";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function Home() {
  // Sample featured courses data
  const featuredCourses = [
    {
      id: 1,
      title: "Introduction to Computer Science",
      instructor: "Dr. Sarah Johnson",
      rating: 4.8,
      students: 1250,
      price: 49.99,
      image: "/course1.jpg",
    },
    {
      id: 2,
      title: "Web Development Bootcamp",
      instructor: "Michael Roberts",
      rating: 4.9,
      students: 2340,
      price: 59.99,
      image: "/course2.jpg",
    },
    {
      id: 3,
      title: "Data Science Fundamentals",
      instructor: "Emily Chen",
      rating: 4.7,
      students: 1835,
      price: 69.99,
      image: "/course3.jpg",
    },
  ];

  // Sample testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Emma Thompson",
      role: "UX Designer",
      company: "Creative Studios",
      testimonial:
        "Edulinx courses have been a game-changer for my career. The quality of instruction and course materials is exceptional. I went from a beginner to landing my dream job in just 6 months!",
      avatar: "/testimonial1.jpg",
    },
    {
      id: 2,
      name: "David Wilson",
      role: "Software Engineer",
      company: "Tech Innovations",
      testimonial:
        "I've taken several programming courses on Edulinx, and they've all been fantastic. The instructors are knowledgeable, and the platform makes learning complex topics manageable and engaging.",
      avatar: "/testimonial2.jpg",
    },
    {
      id: 3,
      name: "Sophia Garcia",
      role: "Marketing Manager",
      company: "Global Brands",
      testimonial:
        "What I love about Edulinx is the flexibility it offers. I could learn at my own pace while working full-time. The digital marketing certification helped me secure a promotion at work.",
      avatar: "/testimonial3.jpg",
    },
  ];

  // Footer links
  const footerColumns = [
    {
      id: 1,
      title: "Company",
      links: [
        { id: 1, text: "About Us", url: "/about" },
        { id: 2, text: "Careers", url: "/careers" },
        { id: 3, text: "Blog", url: "/blog" },
        { id: 4, text: "Partners", url: "/partners" },
      ],
    },
    {
      id: 2,
      title: "Courses",
      links: [
        { id: 1, text: "Web Development", url: "/courses/web-development" },
        { id: 2, text: "Data Science", url: "/courses/data-science" },
        { id: 3, text: "Design", url: "/courses/design" },
        { id: 4, text: "Business", url: "/courses/business" },
      ],
    },
    {
      id: 3,
      title: "Support",
      links: [
        { id: 1, text: "Help Center", url: "/help" },
        { id: 2, text: "Contact Us", url: "/contact" },
        { id: 3, text: "FAQ", url: "/faq" },
        { id: 4, text: "Resources", url: "/resources" },
      ],
    },
    {
      id: 4,
      title: "Legal",
      links: [
        { id: 1, text: "Terms of Service", url: "/terms" },
        { id: 2, text: "Privacy Policy", url: "/privacy" },
        { id: 3, text: "Cookie Policy", url: "/cookies" },
        { id: 4, text: "Accessibility", url: "/accessibility" },
      ],
    },
  ];

  return (
    <>
      <Header transparent={false} />

      <HeroSection
        title="Let's Find Your Course!"
        subtitle=""
        primaryBtnText="Explore Courses"
        primaryBtnLink="/courses"
        secondaryBtnText="Get Started"
        secondaryBtnLink="/signup"
        imageUrl="/hero-image.png"
        imageAlt="Students learning online"
      />

      <FeaturedCourses
        title="Featured Courses"
        subtitle="Explore our most popular courses to start your learning journey"
        courses={featuredCourses}
        viewAllLink="/courses"
        viewAllText="View All Courses"
      />

      <Testimonials
        title="What Our Students Say"
        subtitle="Hear from our community of learners about their experience"
        testimonials={testimonials}
      />

      <Footer
        logo="/logo.svg"
        description="Edulinx is an online learning platform dedicated to providing high-quality education to students worldwide."
        columns={footerColumns}
        copyright="© 2023 Edulinx. All rights reserved."
        socialLinks={{
          facebook: "https://facebook.com",
          twitter: "https://twitter.com",
          instagram: "https://instagram.com",
          linkedin: "https://linkedin.com",
        }}
      />
    </>
  );
}
