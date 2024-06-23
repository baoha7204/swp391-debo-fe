import { z } from "zod";

const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB
const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
];

const ImageSchema = z
  .any()
  .refine((file) => file?.size <= MAX_FILE_SIZE, "Max image size is 1MB.")
  .refine(
    (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type),
    "Only .jpg, .jpeg, .png and .gif formats are supported."
  );

export { ImageSchema, MAX_FILE_SIZE, ACCEPTED_IMAGE_TYPES };
