import { getBlogs } from "@/config/blogs/blogs.config";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import ArticleCard from "./article-card";
import EventSection from "./event-selection";

export default function Blogs() {
  const [blogs, setBlogs] = useState<any>(null);
  const [loading, setLoading] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();

  // Get the current page from the URL or default to 1
  const page = parseInt(searchParams.get("apt-page") || "1", 10);
  const limit = 2; // Set your desired limit

  // Fetch invoices data based on page and limit
  const fetchInvoices = async () => {
    setLoading(true);
    try {
      const response = await getBlogs({ page, limit });
      setBlogs(response.data);
    } catch (error) {
      console.error("Failed to fetch invoices:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInvoices();
  }, [page, limit]);

  return (
    <div>
      {/* blogs card and filtering side bar */}
      <div className="bg-background py-8">
        <div className="container space-y-8 ">
          <div className="   grid grid-cols-1 lg:grid-cols-3 gap-4">
            <div className="w-full  lg:col-span-2 space-y-4 ">
              <h1 className=" text-xl lg:text-2xl font-medium text-primary">
                Latest News
              </h1>
              <div className=" flex flex-col gap-8">
                {blogs?.map((blog: any) => (
                  <ArticleCard key={`blogs-${blog.id}`} blog={blog} />
                ))}
              </div>
            </div>
            <EventSection />
          </div>
        </div>
      </div>
    </div>
  );
}
