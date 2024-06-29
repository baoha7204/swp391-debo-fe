import { PhoneSchema } from "@/lib/schema";
import { z } from "zod";

const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];

export const branchUpdateSchema = z.object({
    id: z.coerce
        .number({ required_error: "ID should be integer number" })
        .int({ message: "ID should be integer number" })
        .min(1, { message: "ID must be at least 1" })
        .safe(),
    mngId: z
        .any(),
    mngName: z
        .any(),
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
        .max(10, { message: "Phone number must not exceed 10 characters" })
        .and(PhoneSchema),
    email: z
        .string()
        .email({ message: "Invalid email" }),
    avt: z
        .any()
        .refine((files) => files?.[0]?.size <= MAX_FILE_SIZE, `Max image size is 5MB.`)
        .refine(
            (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
            "Only .jpg, .jpeg, .png and .webp formats are supported."
        ),
});