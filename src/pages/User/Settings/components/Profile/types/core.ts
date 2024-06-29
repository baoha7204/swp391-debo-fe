import { z } from "zod";
import { ProfileSchema } from "../lib/schema";

export type ProfileInputs = z.infer<typeof ProfileSchema>;
