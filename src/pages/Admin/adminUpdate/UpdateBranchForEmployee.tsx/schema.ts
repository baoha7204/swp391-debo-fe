import { z } from "zod";

export const updateEmployeeSchema = z.object({
    id: z
        .any(),
    brId: z.coerce
        .number({ required_error: "Branch ID should be integer number" })
        .min(1, { message: "ID is required" }),
    salary: z
        .number()
});