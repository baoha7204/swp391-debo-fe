import { EmailSchema } from "@/lib/schema";
import { z } from "zod";

export const RegisterFormSchema = z
  .object({
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .max(256, {
        message: "Email/phone number must not exceed 256 characters",
      })
      .and(EmailSchema),
    password: z
      .string()
      .min(1, { message: "Password is required" })
      .max(128, { message: "Password must not exceed 128 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Password is required" })
      .max(128, { message: "Password must not exceed 128 characters" }),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
