export const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB
export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
];

export const validateImage = (image: File) => {
  if (image.size > MAX_FILE_SIZE) {
    return { success: false, message: "Max image size is 1MB." };
  }

  if (!ACCEPTED_IMAGE_TYPES.includes(image.type)) {
    return {
      success: false,
      message: "Only .jpg, .jpeg, .png and .gif formats are supported.",
    };
  }

  return {
    success: true,
    message: null,
  };
};
