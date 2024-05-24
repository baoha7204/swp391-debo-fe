import { z } from "zod";

import { LoginFormSchema } from "../lib/schema";

export type Inputs = z.infer<typeof LoginFormSchema>;
