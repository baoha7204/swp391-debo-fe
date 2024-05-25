import { z } from "zod";

import { LoginFormSchema } from "../lib/schema";

export type LoginInputs = z.infer<typeof LoginFormSchema>;
