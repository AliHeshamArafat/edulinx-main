import { GET_BLOGS } from "@/apis";
import { redirect } from 'next/navigation';
import React from "react";
import Hero from "./components/hero";
import BlogList from "./components/blogList";

interface BlogsProps {
  searchParams: {
    page?: string;
  };
}

export default async function Blogs({ 
  searchParams: { page } 
}: BlogsProps) {
  const pageSize = 9;
  const currentPage = Number(page) || 1;

  const response = await GET_BLOGS({
    params: {
      pageNo: currentPage,
      rowCount: pageSize,
    },
  });

  // Calculate max pages
  const maxPages = Math.ceil(response.data.totalCount / pageSize);

  // Redirect if current page is greater than max pages
  if (currentPage > maxPages && maxPages > 0) {
    redirect(`/blogs?page=${maxPages}`);
  }

  return (
    <div className="main-container !my-10">
      <Hero />
      <BlogList 
        data={{
          result: response.data.result,
          totalCount: response.data.totalCount,
        }}
        currentPage={currentPage}
        pageSize={pageSize}
      />
    </div>
  );
}
