"use client";
import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Form } from "@/components/ui/form";
import { Label } from "@/components/ui/label";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export default function CheckoutForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const formSchema = z
    .object({
      name: z.string().min(2, "First name required"),
      email: z.string().email("Invalid email address"),
      phoneNumber: z.string().min(10, "Phone number required"),
      paymentMethod: z.enum(["creditCard", "paypal"], {
        required_error: "Payment method required",
      }),
      // Card details
      cardName: z.string().optional(),
      cardNumber: z.string().optional(),
      expiryMonth: z.string().optional(),
      expiryYear: z.string().optional(),
      cvv: z.string().optional(),
    })
    .superRefine((data, ctx) => {
      if (data.paymentMethod === "creditCard") {
        if (!data.cardName) {
          ctx.addIssue({
            code: "custom",
            path: ["cardName"],
            message: "Card name is required",
          });
        }
        if (!data.cardNumber) {
          ctx.addIssue({
            code: "custom",
            path: ["cardNumber"],
            message: "Card number is required",
          });
        }
        if (!data.expiryMonth) {
          ctx.addIssue({
            code: "custom",
            path: ["expiryMonth"],
            message: "Expiry month is required",
          });
        }
        if (!data.expiryYear) {
          ctx.addIssue({
            code: "custom",
            path: ["expiryYear"],
            message: "Expiry year is required",
          });
        }
        if (!data.cvv) {
          ctx.addIssue({
            code: "custom",
            path: ["cvv"],
            message: "CVV is required",
          });
        }
      }
    });

  type FormData = z.infer<typeof formSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phoneNumber: "",
      paymentMethod: "creditCard",
      cardName: "",
      cardNumber: "",
      expiryMonth: "",
      expiryYear: "",
      cvv: "",
    },
  });

  const selectedPaymentMethod = form.watch("paymentMethod");

  const onSubmit: SubmitHandler<FormData> = (data) => {
    setIsSubmitting(true);
    // console.log(data);
    // Simulate API call
    setTimeout(() => setIsSubmitting(false), 2000);
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        {/* User Information */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            name="name"
            control={form.control}
            placeholder="Enter full name"
            label="Title"
          />
        </div>
        <div className="flex flex-col lg:flex-row   justify-between gap-4">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            name="email"
            control={form.control}
            placeholder="Enter email"
            label="Title"
          />
          <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT}
            name="phoneNumber"
            control={form.control}
            label="Phone Number"
            placeholder="Enter phone number"
          />
        </div>
        <p>
          Existing Customer? Click here to{" "}
          <Link href="/auth/login" className="text-info">
            login
          </Link>
        </p>
        <div className="space-y-2">
          <h1 className="text-lg font-medium">Payment Methods</h1>
          <hr className="my-4" />
          {/* Credit Card Checkbox */}
          <div className="flex items-center gap-x-4">
            <Checkbox
              checked={selectedPaymentMethod === "creditCard"}
              onCheckedChange={() =>
                form.setValue("paymentMethod", "creditCard")
              }
            />
            <Label>Credit Card</Label>
          </div>
          {/* Credit Card Information */}
          {selectedPaymentMethod === "creditCard" && (
            <div className="space-y-4">
              <div className="flex flex-col lg:flex-row   justify-between gap-4">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  name="cardName"
                  control={form.control}
                  placeholder="Enter Card name"
                  label="Card name"
                />
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  name="cardNumber"
                  control={form.control}
                  placeholder="Enter Card Number"
                  label="Card Number"
                />
              </div>
              <div className="flex flex-col lg:flex-row   justify-between gap-4">
                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  name="expiryMonth"
                  control={form.control}
                  placeholder="Enter Expiry Month"
                  label="Expiry Month"
                />

                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  name="expiryYear"
                  control={form.control}
                  placeholder="Enter Expiry Year"
                  label="Expiry Year"
                />

                <CustomFormField
                  fieldType={FormFieldType.INPUT}
                  name="cvv"
                  control={form.control}
                  placeholder="Enter CVV"
                  label="CVV"
                />
              </div>
            </div>
          )}
          {/* PayPal Checkbox */}
          <div className="flex items-center gap-x-4">
            <Checkbox
              checked={selectedPaymentMethod === "paypal"}
              onCheckedChange={() => form.setValue("paymentMethod", "paypal")}
            />
            <Label>PayPal</Label>
          </div>
        </div>
        {/* Confirm and Pay */}
        <Button type="submit">
          <Link href="payment-success">Confirm and Pay</Link>
        </Button>
      </form>
    </Form>
  );
}
