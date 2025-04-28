"use client";
import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import { Button } from "@/components/ui/button";
import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

export default function CommentForm() {
  const formSchema = z.object({
    comment: z
      .string()
      .min(10, "Comment must be at least 10 characters long")
      .max(1000, "Comment must be less than 1000 characters long"),
    // rating: z
    //   .number()
    //   .min(1, "Rating must be at least 1")
    //   .max(5, "Rating must be at most 5"),
    // anonymous: z.boolean(),
    // createdAt: z.date(),
  });

  type formData = z.infer<typeof formSchema>;

  const form = useForm<formData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      // anonymous: false,
      // createdAt: new Date(),
      comment: "",
    },
  });

  const onSubmit: SubmitHandler<formData> = (data: any) => {};
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className=" border p-4  rounded-md bg-card space-y-4"
      >
        <CustomFormField
          fieldType={FormFieldType.TEXTAREA}
          control={form.control}
          name="comment"
          iconAlt="user"
        />
        <Button variant="soft" color="info">
          Submit
        </Button>
      </form>
    </Form>
  );
}
