import PageHero from "@/components/page-hero";
import Pagination from "@/components/PaginationComponents";
import { getBlogs } from "@/config/blogs/blogs.config";
import ShaaredLayout from "../layout/shared-layout";
import ClassesCard from "./components/classes-card";

export default async function ClassesPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  // If searchParams is a plain object, get the page param
  const page = parseInt(searchParams.page || "1", 10);
  const limit = 8;
  const blogs = await getBlogs({ page, limit });

  return (
    <ShaaredLayout>
      <PageHero title="Classes" breadcrumbs="classes" />
      <div className="container py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 justify-center md:justify-start">
          {/* Class card */}
          {blogs?.data?.map((item) => (
            <ClassesCard product={item} />
          ))}
        </div>
        {blogs?.pagination?.totalRecords > blogs?.pagination?.perPage && (
          <div className="mt-8">
            <Pagination
              currentPage={blogs?.pagination?.currentPage}
              totalPages={blogs?.pagination?.totalPages}
            />
          </div>
        )}
      </div>
    </ShaaredLayout>
  );
}
