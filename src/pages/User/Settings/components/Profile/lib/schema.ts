import dayjs, { type Dayjs } from "dayjs";
import { z } from "zod";
import { nullable } from "@/utils/zod";

export const ProfileSchema = nullable(
  z.object({
    username: z
      .string()
      .max(256, { message: "Username must not exceed 256 characters" }),
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
