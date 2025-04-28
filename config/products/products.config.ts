import { productData } from "./data";
const formatDate = (dateString: string) => {
  const [day, month, year] = dateString.split("-"); // Split the date
  return `${year}-${month}-${day}`; // Reformat to YYYY-MM-DD
};
export const getProducts = async ({
  page,
  limit,
  filter,
}: {
  page: number;
  limit: number;
  filter?: string;
}) => {
  const startIndex = (page - 1) * limit;
  const endIndex = startIndex + limit;
  let filteredData;
  if (filter === "expired") {
    filteredData = productData.filter(
      (product) => new Date(formatDate(product.expire)) < new Date()
    );
  } else if (filter === "out-of-stock") {
    filteredData = productData.filter((product) => product.stock === 0);
  } else {
    filteredData = productData;
  }

  const paginatedData = filteredData.slice(startIndex, endIndex);
  const totalRecords = filteredData.length;
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
export const getProductById = async (productId: number) => {
  const product = productData.find((product) => product.id === 1);

  if (!product) {
    return {
      status: "error",
      message: "Product not found",
    };
  }

  return {
    status: "success",
    message: "Successfully fetched product",
    data: product,
  };
};
