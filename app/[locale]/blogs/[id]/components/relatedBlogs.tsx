'use client';
import SliderContainer from "@/components/ui/sliderContainer";
import BlogCard from "@/components/ui/blogCard";
import { Blog } from "@/types/blog";

interface RelatedBlogsProps {
  blogs: Blog[];
}

export default function RelatedBlogs({ blogs }: RelatedBlogsProps) {
  return (
    <SliderContainer<Blog>
      title="Related Blogs"
      items={blogs}
      renderItem={(blog) => <BlogCard blog={blog} />}
    />
  );
} 