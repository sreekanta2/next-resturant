import ShaaredLayout from "@/app/layout/shared-layout";
import CustomImage from "@/components/Custom-image";
import PageHero from "@/components/page-hero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Rating } from "@/components/ui/rating";
import { getProductById } from "@/config/products/products.config";
import { cn } from "@/lib/utils";
import { ShieldCheck } from "lucide-react";

export default async function ProductPage({
  params,
}: {
  params: { pid: string }; // Ensure it's a string
}) {
  const product = await getProductById(1);

  if (!product?.data) {
    return (
      <div className="container py-10 text-center">
        <h1 className="text-2xl font-bold text-red-500">Product Not Found</h1>
      </div>
    );
  }

  return (
    <ShaaredLayout>
      <PageHero
        title="Product"
        breadcrumbs={[
          { label: "products", href: "/products" },
          { label: product.data.name || "Product" },
        ]}
      />
      <div className="bg-background py-8">
        <div className="container">
          {/* Product Overview */}
          <div className="border bg-card rounded-md flex flex-col md:flex-row gap-6 md:gap-10 p-4">
            <CustomImage
              src={"/images/product/product1.png"}
              alt={product.data.name}
              aspectRatio="1/1"
              containerClass=" w-full max-w-sm border rounded-md"
              className="rounded-md shrink-0"
            />
            <div className="w-full space-y-2">
              {/* Product Header */}
              <div className="border-b pb-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-xl md:text-2xl font-bold text-default-900 mb-2">
                      {product.data.name}
                      <span className="ml-2 text-sm font-normal text-default-500">
                        {/* (Generic: Paracetamol) */}
                      </span>
                    </h1>
                    <p className="text-sm text-default-500">
                      Manufactured by{" "}
                      <span className="font-medium">
                        {product.data.manufacturer}
                      </span>
                    </p>
                  </div>
                </div>

                {/* Trust Badges */}
                <div className="flex items-center gap-4 mt-4">
                  <div className="flex items-center">
                    <Rating
                      className="gap-x-.5 max-w-[100px]"
                      value={Math.floor(product.data?.ratings)}
                    />
                    <span className="ml-1 text-sm font-medium">
                      {product?.data?.ratings.toFixed(1)}
                    </span>
                  </div>
                  <div className="h-4 w-px bg-default-200"></div>
                  <div className="flex items-center gap-1 text-blue-600">
                    <ShieldCheck className="w-5 h-5" />
                    <span className="text-sm font-medium"> 44 reviews</span>
                  </div>
                </div>
              </div>
              <p>
                Prepare to embark on a sensory journey with the Bosco Apple, a
                fruit that transcends the ordinary and promises an unparalleled
                taste experience. These apples are nothing short of nature’s
                masterpiece, celebrated for their distinctive blend of flavors
                and their captivating visual allure
              </p>
              {/* Pricing Section */}
              <div className="space-y-2">
                <div className="flex items-baseline gap-4">
                  <span className="text-3xl font-bold text-primary">
                    ₹{product.data.price?.toFixed(2)}
                  </span>
                  {product.data.price && (
                    <span className="text-lg text-default-400 line-through">
                      ₹{(product.data.price * 1.15).toFixed(2)}
                    </span>
                  )}
                  <span className="ml-2 px-2 py-1 bg-emerald-100 text-emerald-700 text-sm rounded-full">
                    15% off
                  </span>
                </div>

                {/* Stock Status */}
                <div className="flex items-center gap-2">
                  <span
                    className={cn(
                      "w-2 h-2 rounded-full",
                      product.data.stock > 10
                        ? "bg-emerald-500"
                        : product.data.stock > 0
                        ? "bg-amber-500"
                        : "bg-default-400"
                    )}
                  />
                  <span className="text-sm font-medium capitalize">
                    {product.data.stock > 10
                      ? "In Stock"
                      : product.data.stock > 0
                      ? `Only ${product.data.stock} left`
                      : "Out of Stock"}
                  </span>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                {/* Quantity Selector */}
                <div className="flex items-center border rounded-lg bg-primary-50/50 w-full sm:w-auto">
                  <Button
                    size="sm"
                    variant="ghost"
                    className="w-12 rounded-r-none text-xl text-primary-950 hover:bg-primary/10"
                    aria-label="Decrease quantity"
                  >
                    -
                  </Button>
                  <Input
                    type="number"
                    className="w-full md:w-16 border-0 bg-transparent text-center dark:text-card [appearance:textfield] focus-visible:ring-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:appearance-none"
                    value="1"
                    min="1"
                  />
                  <Button
                    size="sm"
                    variant="ghost"
                    className="w-12 rounded-l-none text-xl text-primary-950 hover:bg-primary/10"
                    aria-label="Increase quantity"
                  >
                    +
                  </Button>
                </div>

                {/* Add to Cart Button */}
                <Button
                  className="w-full sm:w-48 text-lg font-medium shadow-sm hover:shadow-md transition-shadow"
                  disabled={product.data.stock === 0}
                >
                  {product.data.stock === 0 ? "Out of Stock" : "Add To Cart"}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ShaaredLayout>
  );
}
