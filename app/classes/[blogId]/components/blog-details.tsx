import { CalenderCheck } from "@/components/svg";
import { Badge } from "@/components/ui/badge";
import { MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function BlogDetails({
  blog,
  pagination,
}: {
  blog: any;
  pagination: any;
}) {
  return (
    <div className="bg-card">
      <div className="w-full border rounded-md p-4">
        {/* Fixed video section */}
        <div className="w-full aspect-video rounded-md overflow-hidden bg-gray-100 mb-4">
          <iframe
            src={`https://www.youtube.com/embed/dEnaGPapL9o`}
            className="w-full h-full"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        {/* Rest of your component remains the same */}
        <div className="flex gap-4 items-center my-2">
          <Badge className="text-xs">Health Tips</Badge>
          <div className="flex gap-2 h-fit items-center">
            <Image
              src={blog?.author?.image || ""}
              width={32}
              height={32}
              alt={blog?.author?.name}
              className="rounded-full w-6 h-6 ring-1 ring-offset-1"
            />
            <Link href={`/doctors/${1}`}>
              <h1 className="hover:text-blue-400">{blog?.author?.name}</h1>
            </Link>
          </div>
          <div className="flex gap-2 items-start">
            <MessageCircle size={18} />
            <h1 className="text-xs">{pagination?.totalRecords || 0}</h1>
          </div>
          <div className="flex gap-2 items-start">
            <CalenderCheck />
            <h1 className="text-xs">
              {new Date(blog?.publishedAt).toDateString()}
            </h1>
          </div>
        </div>
        <div className="space-y-4 my-10">
          <h2 className="text-default-900 text-lg md:text-xl font-medium mt-1">
            {blog?.title}
          </h2>
          <p className="text-default-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua...
          </p>
          {/* Rest of your content */}
        </div>
      </div>
    </div>
  );
}

// Helper function to extract YouTube ID from URL
function getYouTubeId(url: string) {
  const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
  const match = url.match(regExp);
  return match && match[2].length === 11 ? match[2] : null;
}
