export const handleSubmitForm = <T>(data: T, schema: any) => {
  const result = schema.safeParse(data);

  if (result.success) {
    return { success: true, data: result.data };
  }

  if (result.error) {
    return { success: false, error: result.error.format() };
  }
};
