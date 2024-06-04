import { PhoneSchema } from "@/lib/schema";
import { z } from "zod";

export const branchSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Name is required" })
        .max(256, { message: "Name must not exceed 256 characters" }),
    address: z
        .string()
        .min(1, { message: "Address is required" })
        .max(256, { message: "Address must not exceed 256 characters" }),
    phone: z
        .string()
        .min(1, { message: "Phone number is required" })
        .max(256, { message: "Phone number must not exceed 256 characters" })
        .and(PhoneSchema),
    altPhone: z
        .string()
        .and(PhoneSchema),
    email: z
        .string()
        .email({ message: "Invalid email" }),
});