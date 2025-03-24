import { GET_BLOG_BY_ID, GET_BLOGS } from "@/apis";
import dayjs from "dayjs";
import Hero from "../components/hero";
import { Blog } from "@/types/blog";
import RelatedBlogs from "./components/relatedBlogs";
import Breadcrumbs from "@/components/ui/Breadcrumbs";

export default async function BlogDetails({ params }: { params: { id: string } }) {
  const { id } = params;
  const response = await GET_BLOG_BY_ID({ id });
  const responseRelatedBlogs = await GET_BLOGS({});

  const blog = response.data as Blog;
  const relatedBlogs = responseRelatedBlogs.data.result as Blog[];

  const breadcrumbItems = [{ label: "Blogs", href: "/blogs" }, { label: blog.title_Localized }];

  return (
    <div className="main-container !my-10">
      {/* breadcrumbs */}
      <Breadcrumbs items={breadcrumbItems} />

      {/* hero image */}
      <Hero />

      {/* blog details */}
      <div className="flex flex-col gap-4">
        {/* title */}
        <h1 className="text-4xl font-bold">{blog.title_Localized}</h1>
        {/* date created */}
        <p className="text-gray-500">{dayjs(blog.dateCreated).format("MMMM D, YYYY")}</p>

        {/* description */}
        <div className="text-gray-500">{blog.description_Localized}</div>

        {/* brief */}
        <div className="text-gray-500">{blog.brief_Localized}</div>
      </div>

      {/* related blogs */}
      <RelatedBlogs blogs={relatedBlogs} />
    </div>
  );
}
