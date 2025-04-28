import CustomImage from "@/components/Custom-image";
import Pagination from "@/components/PaginationComponents";

export default function Comments({
  comments,
  pagination,
}: {
  comments: any;
  pagination: any;
}) {
  return (
    <div className="w-full border   rounded-md      bg-card pb-8  ">
      <h1 className="text-lg p-4">Comments({pagination?.totalRecords || 0})</h1>
      <hr />
      {comments?.comments?.map((comment: any) => (
        <div className="p-4" key={comment.id}>
          <div className="w-full    flex      items-start gap-4">
            <CustomImage
              src={comment?.image || ""}
              alt={comment.content}
              className="rounded-full"
              aspectRatio="1/1"
              containerClass="w-12 h-12"
            />

            <div className="space-y-2">
              <p className=" text-default-700 flex gap-4 items-center">
                <span className="font-medium"> {comment?.author}</span>{" "}
                <span className="text-xs ">
                  {" "}
                  {new Date(comment?.postedAt).toDateString()}
                </span>
              </p>
              <p className=" text-default-600">{comment.content}</p>
            </div>
          </div>
        </div>
      ))}
      {pagination?.totalRecords > pagination?.perPage && (
        <div className="mt-24">
          <Pagination
            currentPage={pagination?.currentPage}
            totalPages={pagination?.totalPages}
          />
        </div>
      )}
    </div>
  );
}
