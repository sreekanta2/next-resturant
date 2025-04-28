import CustomImage from "@/components/Custom-image";
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
  // console.log({ blog });
  return (
    <div className="bg-card">
      <div className="w-full border rounded-md  p-4  ">
        <CustomImage
          src={blog?.image}
          alt={blog.name}
          aspectRatio="16/9"
          className="rounded-lg transform scale-100 group-hover:scale-110 transition-all duration-300"
        />
        <div className="flex gap-4 items-center my-2">
          <Badge className="text-xs  ">Health Tips</Badge>
          <div className="flex gap-2 h-fit items-center ">
            <Image
              src={blog?.author?.image || ""}
              width={32}
              height={32}
              alt={blog?.author?.name}
              className="rounded-full w-6 h-6 ring-1 ring-offset-1"
            />

            <Link href={`/doctors/${1}`}>
              <h1 className="hover:text-blue-400 ">{blog?.author?.name}</h1>
            </Link>
          </div>

          <div className="flex gap-2 items-start">
            <div className="w-4 h-4">
              <MessageCircle size={18} />
            </div>
            <h1 className="text-xs  ">{pagination?.totalRecords || 0}</h1>
          </div>

          <div className="flex gap-2 items-start">
            <div className="w-4 h-4">
              <CalenderCheck />
            </div>
            <h1 className="text-xs  ">
              {" "}
              {new Date(blog?.publishedAt).toDateString()}
            </h1>
          </div>
        </div>
        <div className="space-y-4 my-10">
          <h2 className="text-default-900 text-lg md:text-xl font-medium mt-1">
            {blog?.title}
          </h2>

          <p className=" text-default-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <p className=" text-default-700">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
            quae ab illo inventore veritatis et quasi architecto beatae vitae
            dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
            aspernatur aut odit aut fugit, sed quia consequuntur magni dolores
            eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est,
            qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit,
            sed quia non numquam eius modi tempora incidunt ut labore et dolore
            magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis
            nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut
            aliquid ex ea commodi consequatur? Quis autem vel eum iure
            reprehenderit qui in ea voluptate velit esse quam nihil molestiae
            consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla
            pariatur?
          </p>
          <p className=" text-default-700">
            At vero eos et accusamus et iusto odio dignissimos ducimus qui
            blanditiis praesentium voluptatum deleniti atque corrupti quos
            dolores et quas molestias excepturi sint occaecati cupiditate non
            provident, similique sunt in culpa qui officia deserunt mollitia
            animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis
            est et expedita distinctio. Nam libero tempore, cum soluta nobis est
            eligendi optio cumque nihil impedit quo minus id quod maxime placeat
            facere possimus, omnis voluptas assumenda est, omnis dolor
            repellendus. Temporibus autem quibusdam et aut officiis debitis aut
            rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint
            et molestiae non recusandae. Itaque earum rerum hic tenetur a
            sapiente delectus, ut aut reiciendis voluptatibus maiores alias
            consequatur aut perferendis doloribus asperiores repellat.
          </p>
        </div>
      </div>
    </div>
  );
}
