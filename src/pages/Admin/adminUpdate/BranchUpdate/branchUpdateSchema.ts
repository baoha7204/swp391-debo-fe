import { PhoneSchema } from "@/lib/schema";
import { z } from "zod";

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
        .any(),

});