import { EmailSchema, PhoneSchema } from "@/lib/schema";
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
    phoneNumber: z
      .string()
      .min(1, { message: "Phone number is required" })
      .max(10, { message: "Phone number must not exceed 10 characters" })
      .and(PhoneSchema),
    password: z
      .string()
      .min(8, { message: "Password is required" })
      .max(128, { message: "Password must not exceed 128 characters" }),
    confirmPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
  })
  .refine((values) => values.password === values.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  });
