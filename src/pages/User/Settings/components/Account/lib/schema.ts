import { z } from "zod";

export const AccountSchema = z
  .object({
    oldPassword: z
      .string()
      .min(1, { message: "Password is required" })
      .max(128, { message: "Password must not exceed 256 characters" }),
    newPassword: z
      .string()
      .min(8, { message: "Password must be at least 8 characters" })
      .max(128, { message: "Password must not exceed 128 characters" }),
    confirmNewPassword: z
      .string()
      .min(1, { message: "Confirm password is required" }),
  })
  .refine((values) => values.newPassword === values.confirmNewPassword, {
    message: "New Passwords do not match",
    path: ["confirmNewPassword"],
  });
