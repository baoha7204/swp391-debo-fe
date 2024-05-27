import { toastError } from "@/utils/toast";
import { z } from "zod";

export const handleSubmitForm = <T extends z.ZodTypeAny>(
  data: unknown,
  schema: T
) => {
  const result = schema.safeParse(data) as z.infer<T>;
  if (result.success) {
    return { success: true, data: result.data };
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
};

export const isParsingError = <T extends z.ZodTypeAny>(
  data: unknown,
  schema: T
) => {
  const result = schema.safeParse(data) as z.infer<T>;

  if (!result.success && result.error) {
    toastError(result.error.format());
    return true;
  }

  return false;
};
