import { getBlog } from "@/config/blogs/blogs.config";
import BlogsSidebar from "../components/blogs-sidebar";
import BlogDetails from "./components/blog-details";

import ShaaredLayout from "@/app/layout/shared-layout";
import PageHero from "@/components/page-hero";
import CommentForm from "./components/comment-form";
import Comments from "./components/comments";
import SocialShare from "./components/social-share";

export default async function SingleBlogsPage({
  params,
  searchParams,
}: {
  params: { blogId: string };
  searchParams: { page?: string };
}) {
  const page = parseInt(searchParams.page || "1", 10);
  const limit = 5;
  const { blogId } = params;
  const blog = await getBlog(1, page, limit);

  return (
    <ShaaredLayout>
      <PageHero
        title="blog"
        breadcrumbs={[{ href: "/blogs", label: "blogs" }, { label: blogId }]}
      />
      <div className="bg-background py-8">
        <div className="max-w-6xl mx-auto  ">
          <div className="  flex     flex-col md:flex-row gap-8 ">
            <div className="w-full max-w-5xl ">
              <div className=" flex flex-col gap-8  ">
                <BlogDetails blog={blog?.data} pagination={blog?.pagination} />
                <SocialShare />

                <Comments comments={blog?.data} pagination={blog?.pagination} />
                <CommentForm />
              </div>
            </div>
            <div className="w-full lg:max-w-sm  space-y-8   h-fit lg:sticky top-20 right-0 ">
              <BlogsSidebar />
            </div>
          </div>
        </div>
      </div>
    </ShaaredLayout>
  );
}
