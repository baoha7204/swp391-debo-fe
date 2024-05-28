import { z } from "zod";

import { RegisterFormSchema } from "../lib/schema";

export type RegisterInputs = z.infer<typeof RegisterFormSchema>;
