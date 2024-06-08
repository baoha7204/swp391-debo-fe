import { PhoneSchema } from "@/lib/schema";
import { z } from "zod";

export const staffSchema = z.object({
    createUsername: z
        .string()
        .min(1, { message: "Username is required" })
        .max(256, { message: "Username must not exceed 256 characters" }),
    createPassword: z
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
        .max(256, { message: "Phone number must not exceed 256 characters" })
        .and(PhoneSchema),
    role: z
        .string()
        .min(1, { message: "Role is required" })
        .max(256, { message: "Role must not exceed 256 characters" }),
    gender: z
        .string()
        .min(1, { message: "Gender is required" })
        .max(256, { message: "Role must not exceed 256 characters" }),
});