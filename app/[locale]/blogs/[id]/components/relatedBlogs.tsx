'use client';
import SliderContainer from "@/components/ui/sliderContainer";
import BlogCard from "@/components/ui/blogCard";
import { Blog } from "@/types/blog";
import { useTranslations } from "next-intl";
interface RelatedBlogsProps {
  blogs: Blog[];
}

export default function RelatedBlogs({ blogs }: RelatedBlogsProps) {
  const t = useTranslations("general");

  return (
    <SliderContainer<Blog>
      title={t("related_blogs")}
      items={blogs}
      renderItem={(blog) => <BlogCard blog={blog} />}
    />
  );
} 