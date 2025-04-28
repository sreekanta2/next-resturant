import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";
import Link from "next/link";

export default function PaymentSuccess() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-50 px-4">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg">
        {/* Success Icon */}
        <div className="flex flex-col items-center text-center">
          <CheckCircle className="h-16 w-16 text-green-500" />
          <h2 className="mt-4 text-2xl font-semibold text-gray-800">
            Payment Successful!
          </h2>
          <p className="mt-2 text-gray-600">
            Thank you for your payment. Your transaction has been completed.
          </p>
        </div>

        {/* Order Details */}
        <div className="mt-6 space-y-2 border-t pt-4 text-sm text-gray-600">
          <p>
            <span className="font-medium text-gray-800">Order ID:</span> #123456
          </p>
          <p>
            <span className="font-medium text-gray-800">Amount Paid:</span>{" "}
            $120.00
          </p>
          <p>
            <span className="font-medium text-gray-800">Payment Method:</span>{" "}
            Credit Card
          </p>
        </div>

        {/* CTA Buttons */}
        <div className="mt-6 flex flex-col gap-3">
          <Link href="/orders">
            <Button className="w-full" variant="outline">
              View Order Details <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
          <Link href="/">
            <Button className="w-full" variant="outline">
              Return to Home
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
