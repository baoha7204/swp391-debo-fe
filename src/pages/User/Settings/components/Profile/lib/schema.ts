import dayjs, { type Dayjs } from "dayjs";
import { z } from "zod";
import { nullable } from "@/utils/zod";
import { EmailSchema, PhoneSchema } from "@/lib/schema";

export const ProfileSchema = nullable(
  z.object({
    username: z
      .string()
      .max(256, { message: "Username must not exceed 256 characters" }),
    email: z
      .string()
      .min(1, { message: "Email is required" })
      .max(256, {
        message: "Email/phone number must not exceed 256 characters",
      })
      .and(EmailSchema),
    phone: z
      .string()
      .min(1, { message: "Phone number is required" })
      .max(10, { message: "Phone number must not exceed 10 characters" })
      .and(PhoneSchema),
    firstName: z
      .string()
      .max(256, { message: "First name must not exceed 256 characters" }),
    lastName: z
      .string()
      .max(256, { message: "Last name must not exceed 256 characters" }),
    gender: z.boolean(),
    address: z
      .string()
      .max(256, { message: "Address must not exceed 256 characters" }),
    dateOfBirthday: z.instanceof(dayjs as unknown as typeof Dayjs),
    avt: z.string().url(),
  })
);
