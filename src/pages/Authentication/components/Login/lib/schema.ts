import { z } from "zod";

import { VietnamesePhoneNumberRegex } from "@/utils/helper";

export const EmailSchema = z
  .string()
  .email({ message: "Invalid email address" });
export const PhoneSchema = z.string().regex(VietnamesePhoneNumberRegex);

export const LoginFormSchema = z.object({
  // user is either email or phone number
  user: z
    .string()
    .min(1, { message: "Email/phone number is required" })
    .max(256, { message: "Email/phone number must not exceed 256 characters" })
    .or(EmailSchema)
    .or(PhoneSchema),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .max(128, { message: "Password must not exceed 128 characters" }),
});
