import LimitSelect from "@/components/limit-select";
import PageHero from "@/components/page-hero";
import Pagination from "@/components/PaginationComponents";
import { getProducts } from "@/config/products/products.config";
import ShaaredLayout from "../layout/shared-layout";
import ProductsCard from "./[pid]/components/product-card";

export default async function ProductPage({
  searchParams,
}: {
  searchParams: { [key: string]: string };
}) {
  const page = parseInt(searchParams.page || "1", 10);
  const limit = 8;
  const products = await getProducts({ page, limit });

  return (
    <ShaaredLayout>
      <PageHero title="Shops" breadcrumbs="shops" />

      <div className=" container  py-16">
        <div className="w-full flex flex-col sm:flex-row gap-4 justify-between my-4 sm:items-center">
          <h1>Showing 1–12 of 16 results</h1>
          <LimitSelect />
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  gap-4 justify-center md:justify-start">
          {products?.data?.length > 0 &&
            products?.data?.map((product: any) => (
              <ProductsCard key={product.id} product={product} />
            ))}
        </div>

        <div className=" flex justify-center mt-8">
          {products?.pagination?.totalRecords >
            products?.pagination?.perPage && (
            <Pagination
              currentPage={products?.pagination?.currentPage}
              totalPages={products?.pagination?.totalPages}
            />
          )}
        </div>
      </div>
    </ShaaredLayout>
  );
}
