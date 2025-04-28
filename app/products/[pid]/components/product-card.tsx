"use client";

import CustomImage from "@/components/Custom-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Rating } from "@/components/ui/rating";

import Link from "next/link";

export default function ProductsCard({ product }: { product: any }) {
  return (
    <Card className="group w-full p-0 rounded-xl shadow-md border overflow-hidden">
      <div className="relative w-full p-2 overflow-hidden border-b">
        <CustomImage
          src={product.image}
          alt={product.name}
          aspectRatio="4/3"
          className="rounded-lg transform scale-100 group-hover:scale-110 transition-all duration-300"
        />

        {product.discountPrice < product.price && (
          <Badge className="absolute top-3 left-3 bg-red-500 text-white">
            -
            {Math.round(
              ((product.price - product.discountPrice) / product.price) * 100
            )}
            %
          </Badge>
        )}
      </div>

      <CardContent className="p-2 space-y-1">
        <Link href={`/products/${product.id}`}>
          <h2 className="font-semibold line-clamp-1 text-lg hover:text-primary">
            {product.name}
          </h2>
        </Link>

        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <span className="font-bold text-primary">
              ${product.discountPrice.toFixed(2)}
            </span>
            {product.discountPrice < product.price && (
              <span className="text-sm text-default-400 line-through">
                ${product.price.toFixed(2)}
              </span>
            )}
          </div>

          <div className="flex items-center">
            <Rating
              className="gap-x-.5 max-w-[100px]"
              value={Math.floor(product.ratings)}
            />
            <span className="ml-1 text-sm font-medium">
              {product.ratings.toFixed(1)}
            </span>
          </div>
        </div>

        <div className="flex justify-between text-sm text-gray-600">
          <span className="capitalize">{product.category}</span>
          <span
            className={product.stock > 0 ? "text-green-600" : "text-red-500"}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>
        </div>
      </CardContent>

      <CardFooter className="p-4">
        <Button className="w-full">Add to Cart</Button>
      </CardFooter>
    </Card>
  );
}
