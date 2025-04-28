"use client";
import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

import { Form } from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import Image from "next/image";
import { startTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
const contactFormSchema = z.object({
  name: z.string().nonempty("Full name is required"),
  sub: z.string().nonempty("Sub  is required"),

  email: z.string().email("Invalid email format").nonempty("Email is required"),

  message: z.string().nonempty("Message is required"),
});

export default function ContactForm() {
  const fadeInZoom = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  };
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      sub: "",
      message: "",
    },
  });

  const onSubmit: SubmitHandler<z.infer<typeof contactFormSchema>> = (data) => {
    startTransition(async () => {
      try {
        toast.success("Form submit successful");
        form.reset();
      } catch (error) {
        console.error("Error during update:", error);
        toast.error("Unexpected error occurred");
      }
    });
  };
  return (
    <div className="max-w-6xl mx-auto my-14">
      <div className=" grid grid-cols-1 lg:grid-cols-2 gap-6">
        {" "}
        <Form {...form}>
          <form
            className="space-y-4 px-6 border bg-card py-14 "
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <h1 className="text-5xl text-default-700 text-center">
              Get in touch
            </h1>
            <p className="text-default-800 text-center">
              Get in touch Your email address will not be published. Required
              fields are marked *
            </p>
            <div className="pt-14 space-y-6">
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="name"
                placeholder="Full Name"
                iconAlt="user"
              />
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="email"
                placeholder="Enter Email"
                type="email"
                iconAlt="user"
              />
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                control={form.control}
                name="sub"
                placeholder="Enter a subject name"
              />

              <CustomFormField
                fieldType={FormFieldType.TEXTAREA}
                control={form.control}
                name="message"
                placeholder="Write something  to your message "
              />
              <Button type="submit" color="primary">
                Submit
              </Button>
            </div>
          </form>
        </Form>
        <motion.div
          className="bg-primary/50 hidden lg:block contact p-6 shadow-md"
          variants={fadeInZoom}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <Image
            src="/images/hero1.jpg"
            alt="Product 1"
            width={500}
            height={500}
          />
        </motion.div>
      </div>
    </div>
  );
}
