import CustomImage from "@/components/Custom-image";
import { CalenderCheck, User } from "@/components/svg";
import Link from "next/link";

export default function ArticleCard({ blog }: { blog: any }) {
  return (
    <div className="w-full border rounded-md  p-4  grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 bg-card  items-start gap-4">
      <CustomImage
        src={blog.image}
        alt={blog.name}
        aspectRatio="4/3"
        className=" rounded-sm w-full"
      />
      <div className="space-y-2 md:col-span-2">
        <div className="flex gap-4">
          <div className="flex gap-2 items-start">
            <div className="w-4 h-4">
              <User />
            </div>
            <h1 className="text-xs  ">{blog?.author?.name}</h1>
          </div>

          <div className="flex gap-2 items-start">
            <div className="w-4 h-4">
              <CalenderCheck />
            </div>
            <h1 className="text-xs">
              {new Date(blog?.publishedAt).toLocaleString()}
            </h1>
          </div>
        </div>
        <Link href={`/blogs/${blog.id}`}>
          <h2 className="text-default-900 font-medium mt-1 hover:text-blue-400">
            {blog.title}
          </h2>
        </Link>
        <p className=" text-default-400">{blog?.content}</p>
        <button className="border px-4 py-1 border-primary rounded-md hover:bg-primary">
          <Link href={`/blogs/${blog.id}`}>Read more</Link>
        </button>
      </div>
    </div>
  );
}
