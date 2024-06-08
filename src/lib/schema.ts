import { z } from "zod";

import { VietnamesePhoneNumberRegex } from "@/utils/helper";

export const EmailSchema = z
  .string()
  .email({ message: "Invalid email address" });

export const PhoneSchema = z
  .string()
  .regex(VietnamesePhoneNumberRegex, "Invalid phone number");

export const DatetimeSchema = z.string().datetime();

export const DateSchema = z.string().date();
