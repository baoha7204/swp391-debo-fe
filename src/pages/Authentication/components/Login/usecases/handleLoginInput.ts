import { LoginFormSchema } from "../lib/schema";
import { Inputs } from "../types/core";

export const handleSubmitForm = (data: Inputs) => {
  const result = LoginFormSchema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
};
