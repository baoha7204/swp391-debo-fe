import { z } from "zod";

import { PhoneSchema } from "@/lib/schema";

export const LoginFormSchema = z.object({
  // user is either email or phone number
  user: z
    .string()
    .min(1, { message: "Email/phone number is required" })
    .max(256, { message: "Email/phone number must not exceed 256 characters" })
    .email({ message: "Invalid email/phone number" })
    .or(PhoneSchema),
  password: z
    .string()
    .min(1, { message: "Password is required" })
    .max(128, { message: "Password must not exceed 128 characters" }),
});
