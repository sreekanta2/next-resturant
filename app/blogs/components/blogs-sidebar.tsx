import CustomImage from "@/components/Custom-image";
import { Badge } from "@/components/ui/badge";
import { getBlogs } from "@/config/blogs/blogs.config";
import Link from "next/link";
const categories = [
  { id: 1, name: "Wellness", count: 62 },
  { id: 2, name: "Trainer", count: 27 },
  { id: 3, name: "Nutritions", count: 41 },
  { id: 4, name: "Fitness & Health", count: 16 },
  { id: 5, name: "Diet Plan", count: 55 },
  { id: 6, name: "Holistics", count: 0 }, // Assuming no count provided
];

export default async function BlogsSidebar() {
  const page = 1;
  const limit = 6;
  const blogs = await getBlogs({ page, limit });

  return (
    <>
      <div className="border  rounded-md">
        <h1 className="text-lg font-medium p-4">Latest Article</h1>
        <hr />
        {/* latest article */}
        <div className=" p-4 space-y-4 ">
          {blogs?.data?.length > 0 &&
            blogs?.data?.map((blog: any) => (
              <div
                key={blog.id}
                className="w-full     rounded-md   flex flex-col sm:flex-row   bg-card  items-start gap-4 p-2"
              >
                <CustomImage
                  src={blog.image}
                  alt={blog.name}
                  aspectRatio="1/1"
                  className="rounded-lg flex-1  "
                  containerClass="w-20 h-20   rounded-md "
                />
                <div className="w-full space-y-2 ">
                  <p className=" text-default-800">
                    <Link
                      href={`/blogs/${blog.id}`}
                      className="hover:text-blue-400"
                    >
                      {blog.title}
                    </Link>
                  </p>
                  <p className="text-xs text-default-600">4 Dec 2023</p>
                </div>
              </div>
            ))}
        </div>
      </div>
      {/* category */}

      <div className="border  rounded-md">
        <h1 className="text-lg font-medium p-4">Categories</h1>
        <hr />

        <div className=" p-4 space-y-2 ">
          {categories.map((cat, index) => (
            <div
              key={cat.id}
              className="w-full font-light       flex  justify-between items-center"
            >
              <h1>{cat.name}</h1>
              <span>({cat.count})</span>
            </div>
          ))}
        </div>
      </div>
      {/* tag */}
      <div className="border  rounded-md">
        <h1 className="text-lg font-medium p-4">Tags</h1>
        <hr />

        <div className=" p-4  flex gap-4 flex-wrap ">
          {categories.map((cat) => (
            <Badge key={cat.id}>{cat.name}</Badge>
          ))}
        </div>
      </div>
    </>
  );
}
