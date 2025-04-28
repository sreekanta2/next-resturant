"use client";
import CustomFormField, { FormFieldType } from "@/components/custom-form-field";
import SubmitButton from "@/components/submit-button";
import { SiteLogo } from "@/components/svg";
import { Form } from "@/components/ui/form";
import { Separator } from "@/components/ui/separator";
import { LoginSchema } from "@/schemas/auth";

import { zodResolver } from "@hookform/resolvers/zod";
import { Icon } from "@iconify/react";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useTransition } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

const LogInForm = () => {
  const [isPending, startTransition] = useTransition();

  const [passwordType, setPasswordType] = useState<boolean>(false);
  type FormData = z.infer<typeof LoginSchema>;

  const router = useRouter();
  const form = useForm<FormData>({
    resolver: zodResolver(LoginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    startTransition(async () => {
      try {
        // Simulate login API call
        await new Promise((resolve) => setTimeout(resolve, 2000));
      } catch (error) {
        console.error("Error during login:", error);
      }
    });
  };

  return (
    <div className="w-full h-screen flex flex-col justify-center items-center px-4">
      <div className="w-full h-fit p-6 rounded-md max-w-[550px] border bg-card">
        <Link href="/" className="flex justify-center mb-4">
          <SiteLogo className="h-10 w-10 2xl:w-14 2xl:h-14 text-primary" />
        </Link>
        <Separator />
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-5 xl:mt-7 space-y-4"
          >
            <div className="relative">
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="email"
                control={form.control}
                placeholder="Email"
                label="Email"
                type="email"
              />
            </div>
            <div className="relative">
              <CustomFormField
                fieldType={FormFieldType.INPUT}
                name="password"
                control={form.control}
                placeholder=" Password"
                label=" Password"
                type={passwordType ? "text" : "password"}
              />

              <div
                className="absolute top-12 -translate-y-1/2 right-4  cursor-pointer"
                onClick={() => setPasswordType(!passwordType)}
              >
                {passwordType ? (
                  <Icon
                    icon="heroicons:eye"
                    className="w-5 h-5 text-default-400"
                  />
                ) : (
                  <Icon
                    icon="heroicons:eye-slash"
                    className="w-5 h-5 text-default-400"
                  />
                )}
              </div>
            </div>

            <SubmitButton className="w-full" isLoading={isPending}>
              Login
            </SubmitButton>
          </form>
        </Form>
        {/* <div className="mt-6 xl:mt-8 flex justify-center gap-4">
          {[googleIcon, githubIcon].map((icon, index) => (
            <Button
              key={index}
              type="button"
              size="icon"
              variant="outline"
              className="rounded-full border-default-300 hover:bg-transparent"
              disabled={isPending}
              onClick={() =>
                signIn(
                  icon === googleIcon
                    ? "google"
                    : icon === githubIcon
                    ? "github"
                    : undefined,
                  {
                    callbackUrl: "/",
                    redirect: icon !== githubIcon,
                  }
                )
              }
            >
              <Image
                src={icon}
                alt="Social login icon"
                className="w-5 h-5"
                priority
              />
            </Button>
          ))}
        </div> */}

        <div className="mt-5 2xl:mt-8 text-center text-base text-default-600">
          Don't have an account ?{" "}
          <Link href="/auth/register" className="text-primary">
            Sign Up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LogInForm;
