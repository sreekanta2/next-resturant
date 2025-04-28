"use client";

import CustomImage from "@/components/Custom-image";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

import Link from "next/link";

export default function ClassesCard({ product }: { product: any }) {
  return (
    <Card className="group w-full p-0 rounded-xl shadow-md border overflow-hidden">
      <div className="relative w-full p-2 overflow-hidden border-b">
        <CustomImage
          src={product.image}
          alt={product.name}
          aspectRatio="4/3"
          className="rounded-lg transform scale-100 group-hover:scale-110 transition-all duration-300"
        />

        <Badge className="absolute top-3 left-3 bg-red-500 text-white">
          {(Math.random() * 100).toFixed(2)} min
        </Badge>
      </div>

      <CardContent className="p-2 space-y-1">
        <Link href={`/products/${product.id}`}>
          <h2 className="font-semibold line-clamp-1 text-lg hover:text-primary">
            {product.title}
          </h2>
        </Link>

        <p>{product.content.slice(0, 100)}</p>
      </CardContent>

      <CardFooter className="p-4">
        <Button className="w-full">Book Class</Button>
      </CardFooter>
    </Card>
  );
}
