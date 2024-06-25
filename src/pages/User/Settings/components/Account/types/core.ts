import { z } from "zod";
import { AccountSchema } from "../lib/schema";

export type AccountInputs = z.infer<typeof AccountSchema>;
