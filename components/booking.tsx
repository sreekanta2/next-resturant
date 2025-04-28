"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "framer-motion";
import { startTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import CustomFormField, { FormFieldType } from "./custom-form-field";
import { Button } from "./ui/button";
import { Form } from "./ui/form";
import { SelectItem } from "./ui/select";

const fadeInZoom = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
const services = [
  {
    id: 1,
    name: "Car Repair",
  },
  {
    id: 2,
    name: "Car Wash",
  },
  {
    id: 3,
    name: "Car Wax",
  },
];
export const formSchema = z.object({
  name: z.string().nonempty("First name is required"),

  email: z.string().email("Invalid email format").nonempty("Email is required"),
  date: z.date({ required_error: "Date is required" }),
  message: z.string().nonempty("Message is required"),
  service: z.string().nonempty("Service is required"),
});

export default function LandingBookingPage() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      date: new Date(),
      service: "",
      message: "",
    },
  });
  const onSubmit: SubmitHandler<z.infer<typeof formSchema>> = (data) => {
    console.log(data);
    startTransition(async () => {
      try {
        toast.success("Form submit successful");
      } catch (error) {
        console.error("Error during update:", error);
        toast.error("Unexpected error occurred");
      }
    });
  };

  return (
    <div className=" ">
      <motion.div
        className="   "
        variants={fadeInZoom}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <h2 className="text-2xl  text-primary  my-4   font-medium">
          Book For A Service
        </h2>
        <Form {...form}>
          <form
            className="space-y-4 border p-2 bg-muted"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="name"
              placeholder="John Doe"
              iconAlt="user"
            />
            <CustomFormField
              fieldType={FormFieldType.INPUT}
              control={form.control}
              name="email"
              placeholder="john.doe@example.com"
              type="email"
              iconAlt="user"
            />

            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="service"
              placeholder="Select a service"
            >
              {services.map((service) => (
                <SelectItem key={service.id} value={service.name}>
                  <div className="flex cursor-pointer items-center gap-2">
                    {/* <Image
                          src={doctor.image}
                          width={32}
                          height={32}
                          alt="doctor"
                          className="rounded-full border border-dark-500"
                        /> */}
                    <p>{service.name}</p>
                  </div>
                </SelectItem>
              ))}
            </CustomFormField>

            <CustomFormField
              fieldType={FormFieldType.TEXTAREA}
              control={form.control}
              name="message"
              placeholder="Write Service details..."
            />
            <Button type="submit" color="primary">
              Submit
            </Button>
          </form>
        </Form>
      </motion.div>
    </div>
  );
}
