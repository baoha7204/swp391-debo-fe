import { PhoneSchema } from "@/lib/schema";
import { z } from "zod";

export const allStaffSchema = z.object({
    // brId: z.coerce
    //     .number(),
    // dateOfBirthday: z
    //     .string(),
    username: z
        .string()
        .min(1, { message: "Username is required" })
        .max(256, { message: "Username must not exceed 256 characters" }),
    password: z
        .string()
        .min(1, { message: "Password is required" })
        .max(256, { message: "Password must not exceed 256 characters" }),
    email: z
        .string()
        .email({ message: "Invalid email" }),
    firstName: z
        .string()
        .min(1, { message: "First name is required" })
        .max(256, { message: "First name must not exceed 256 characters" }),
    lastName: z
        .string()
        .min(1, { message: "Last name is required" })
        .max(256, { message: "Last name must not exceed 256 characters" }),
    phone: z
        .string()
        .min(1, { message: "Phone number is required" })
        .max(10, { message: "Phone number must not exceed 10 characters" })
        .and(PhoneSchema),
    gender: z
        .boolean()
        .nullable()
        .default(null),
    address: z
        .string()
        .max(256, { message: "Address must not exceed 256 characters" }),
});