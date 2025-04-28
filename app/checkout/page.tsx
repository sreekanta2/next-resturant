import PageHero from "@/components/page-hero";

import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CheckoutForm from "./components/checkout-form";

export default function CheckoutPage() {
  return (
    <>
      <PageHero title="Checkout" breadcrumbs="checkout" />
      <div className="bg-background pt-8">
        <div className=" container rounded-md mb-8 ">
          <div className="">
            <div className="flex flex-col lg:flex-row justify-between gap-8">
              <div className="w-full bg-card p-6 border rounded-md ">
                <h2 className="text-lg font-semibold">Personal Information</h2>
                <hr />
                <CheckoutForm />
              </div>
              <div className="w-full bg-card lg:max-w-sm border rounded-md ">
                <h2 className="text-lg font-semibold p-6">Booking Summary</h2>
                <hr />

                <div className="flex   items-start gap-x-4 p-6  ">
                  <div className="p-0 border-b-0 rounded-md overflow-hidden ">
                    <Image
                      src={"/images/product/product2.png"}
                      alt="jj"
                      width={80}
                      height={80}
                      className="border rounded-md"
                    />
                  </div>
                  <div className="space-y-1 p-0 flex justify-between items-center w-full">
                    <div>
                      <div className="flex items-center gap-x-4">
                        <h1 className="text-lg">
                          <Link href={`/doctors/${1}`}>Later bag</Link>
                        </h1>
                      </div>
                      <p className="text-xs text-default-600 -mt-1">
                        1 × $940.00
                      </p>
                    </div>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-7 w-7"
                      color="destructive"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex   items-start gap-x-4 p-6  ">
                  <div className="p-0 border-b-0 rounded-md overflow-hidden ">
                    <Image
                      src={"/images/product/product1.png"}
                      alt="jj"
                      width={80}
                      height={80}
                      className="border rounded-md"
                    />
                  </div>
                  <div className="space-y-1 p-0 flex justify-between items-center w-full">
                    <div>
                      <div className="flex items-center gap-x-4">
                        <h1 className="text-lg">
                          <Link href={`/doctors/${1}`}>Later bag</Link>
                        </h1>
                      </div>
                      <p className="text-xs text-default-600 -mt-1">
                        1 × $940.00
                      </p>
                    </div>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-7 w-7"
                      color="destructive"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <div className="flex   items-start gap-x-4 p-6  ">
                  <div className="p-0 border-b-0 rounded-md overflow-hidden ">
                    <Image
                      src={"/images/product/product3.png"}
                      alt="jj"
                      width={80}
                      height={80}
                      className="border rounded-md"
                    />
                  </div>
                  <div className="space-y-1 p-0 flex justify-between items-center w-full">
                    <div>
                      <div className="flex items-center gap-x-4">
                        <h1 className="text-lg">
                          <Link href={`/doctors/${1}`}>Later bag</Link>
                        </h1>
                      </div>
                      <p className="text-xs text-default-600 -mt-1">
                        1 × $940.00
                      </p>
                    </div>
                    <Button
                      size="icon"
                      variant="outline"
                      className="h-7 w-7"
                      color="destructive"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <ul className="p-6 space-y-2 border-t">
                  <li className="flex justify-between items-center">
                    <span>Consulting Fee</span>
                    <span>$100</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Booking fee</span>
                    <span>$10</span>
                  </li>
                  <hr />
                  <li className="flex justify-between items-center">
                    <span>Total</span>
                    <span>$110</span>
                  </li>
                </ul>
                <p></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
