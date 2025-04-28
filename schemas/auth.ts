import * as z from "zod";

export const LoginSchema = z.object({
  email: z.string().email({ message: "Your email is required." }),
  password: z.string({ required_error: "Please enter your password" }),
});

export const RegisterSchema = z
  .object({
    name: z
      .string()
      .min(3, {
        message: "First Name is required .",
      })
      .trim(),

    email: z.string().email({ message: "Your email is invalid." }).trim(),
    password: z.string().min(6, { message: "Password must 6 characters ." }),
    confirmPassword: z.string().min(6, {
      message: "Confirm Password must 6 characters .",
    }),
    role: z
      .enum(["doctor", "admin", "patient"], {
        errorMap: () => {
          return { message: "Role must be one" };
        },
      })
      .refine((val) => ["doctor", "admin", "patient"].includes(val), {
        message: "Invalid role provided.",
      }),
  })
  .superRefine(({ password, confirmPassword }, ctx) => {
    if (password !== confirmPassword) {
      ctx.addIssue({
        code: z.ZodIssueCode.custom,
        path: ["confirmPassword"],
        message: "Passwords do not match.",
      });
    }
  });
