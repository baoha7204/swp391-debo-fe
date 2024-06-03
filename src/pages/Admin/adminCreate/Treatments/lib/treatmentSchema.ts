import { z } from "zod";

export const treatmentSchema = z.object({
    name: z
        .string()
        .min(1, { message: "Name is required" })
        .max(256, { message: "Name must not exceed 256 characters" }),
    description: z
        .string()
        .min(1, { message: "Description is required" })
        .max(256, { message: "Description must not exceed 256 characters" }),
    price: z
        .string()
        .regex(/^\d+(\.\d{1,2})?$/, { message: "Price must be a valid number" })
});