import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Blog } from "@/types/blog";
import { getImageUrl } from "@/services/general";

interface BlogCardProps {
  blog: Blog;
}

export default function BlogCard({ blog }: BlogCardProps) {
  const fallbackImage = "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2000&auto=format&fit=crop";

  return (
    <Link href={`/blogs/${blog.uuid}`}>
      <div className="bg-white h-[400px] rounded-lg overflow-hidden shadow-sm border p-4 border-gray-100 hover:shadow-md transition-shadow">
        {/* Image Section */}
        <div className="relative h-[240px] w-full">
          <Image src={getImageUrl(blog?.photo || "") || fallbackImage} alt={blog.title_Localized} fill className="object-cover rounded-xl" />
          {/* Category Badge */}
          {/* <div className="absolute top-3 left-3">
            <span className="bg-purple-100 text-primary px-3 py-1 rounded-full text-sm">
              {blog.fieldName}
            </span>
          </div> */}
        </div>

        {/* Content Section */}
        <div className="pt-4">
          {/* Title */}
          <h3 className="text-xl font-semibold mb-2 line-clamp-2">{blog.title_Localized}</h3>

          {/* Description */}
          <p className="text-gray-600 text-sm mb-4 line-clamp-3">{blog.brief_Localized}</p>

          {/* Footer */}
          <div className="flex items-center justify-between">
            {/* Date */}
            <span className="text-sm text-gray-500">
              {new Date(blog.dateCreated).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>

            {/* Author - if you have author data */}
            {/* <div className="flex items-center gap-2">
              <div className="text-sm text-gray-600">
                By Ahmed Hamed
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </Link>
  );
}
