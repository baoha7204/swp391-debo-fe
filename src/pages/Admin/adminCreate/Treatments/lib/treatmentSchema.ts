import { z } from "zod";

export const treatmentSchema = z.object({
    id: z.coerce
        .number({ required_error: "ID should be integer number" })
        .int({ message: "ID should be integer number" })
        .min(1, { message: "ID must be at least 1" })
        .safe(),
    name: z
        .string()
        .min(1, { message: "Name is required" })
        .max(256, { message: "Name must not exceed 256 characters" }),
    description: z
        .string()
        .min(1, { message: "Description is required" })
        .max(256, { message: "Description must not exceed 256 characters" }),
    price: z.coerce
        .number({ required_error: "Price should be integer number" })
        .int({ message: "Price should be integer number" })
        .gt(1, { message: "Price must be at least 1" })
        .safe(),
    category: z.coerce
        .number()
        .int()
        .min(1, { message: "Category must be at least 1" })
        .safe(),
});