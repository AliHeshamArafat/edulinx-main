'use client';

import { useRouter } from 'next/navigation';
import ListPaginationComp from "@/components/functional/listPaginationComp";
import { Blog } from "@/types/blog";
import BlogCard from "@/components/ui/blogCard";

interface BlogListProps {
  data: {
    result: Blog[];
    totalCount: number;
  };
  currentPage: number;
  pageSize: number;
}

export default function BlogList({ data, currentPage, pageSize }: BlogListProps) {
  const router = useRouter();

  const handlePageChange = (page: number) => {
    router.push(`/blogs?page=${page}`);
  };

  return (
    <ListPaginationComp
      data={data}
      isLoading={false}
      renderItem={(blog: Blog) => <BlogCard blog={blog} />}
      onPageChange={handlePageChange}
      currentPage={currentPage}
      pageSize={pageSize}
      hideNumberOfResults={true}
    />
  );
} 