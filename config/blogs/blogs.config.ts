import { blogsData } from "./data";

export const getBlogs = async ({
  page = 1,
  limit = 5,
}: {
  page: number;
  limit: number;
}) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;

  const paginatedData = blogsData.slice(startIndex, endIndex);
  const totalRecords = blogsData.length;
  const totalPages = Math.ceil(totalRecords / limit);

  return {
    status: "success",
    message: "Successfully fetched data",
    data: paginatedData,
    pagination: {
      totalRecords,
      totalPages,
      currentPage: page,
      perPage: limit,
      hasNextPage: endIndex < totalRecords,
      hasPrevPage: startIndex > 0,
    },
  };
};
export const getBlog = async (blogId: number, page: number, limit: number) => {
  const blog = blogsData.find((b) => b.id === 1);
  if (!blog) {
    return { status: "fail", message: "Blog not found" };
  }

  // Paginate comments
  const totalComments = blog.comments.length;
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  const paginatedComments = blog.comments.slice(startIndex, endIndex);

  return {
    status: "success",
    message: "Blog fetched successfully",
    data: {
      id: blog.id,
      title: blog.title,
      content: blog.content,
      publishedAt: blog.publishedAt,
      image: blog.image,
      author: blog.author,
      comments: paginatedComments,
    },
    pagination: {
      totalRecords: totalComments,
      totalPages: Math.ceil(totalComments / limit),
      currentPage: page,
      perPage: limit,
      hasNextPage: endIndex < totalComments,
      hasPrevPage: startIndex > 0,
    },
  };
};
