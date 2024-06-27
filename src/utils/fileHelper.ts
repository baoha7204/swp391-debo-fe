export const MAX_FILE_SIZE = 1 * 1024 * 1024; // 1MB
export const ACCEPTED_IMAGE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
];

export const ACCEPTED_FILE_TYPES = [
  "image/jpeg",
  "image/jpg",
  "image/png",
  "image/gif",
  "image/tiff",
  "application/pdf",
  "text/plain",
  "application/msword",
  "application/vnd.openxmlformats-officedocument.wordprocessingml.document",
  "text/csv",
  "application/zip",
  "application/x-zip-compressed",
  "application/vnd.rar",
  "application/x-rar-compressed",
  "application/x-tar",
  "application/gzip",
  "application/x-compressed",
];

export const SIZE_UNITS = ["Bytes", "KB", "MB", "GB"];

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

export const validateFile = (file: File) => {
  // Check size 5MB
  if (file.size > 5 * MAX_FILE_SIZE) {
    return { success: false, message: "Max file size is 5MB." };
  }

  if (!ACCEPTED_FILE_TYPES.includes(file.type)) {
    return {
      success: false,
      message:
        "Only image (jpeg, jpg, png, gif, tiff), pdf, doc, docx, txt, csv, zip, tar, gz, rar formats are supported.",
    };
  }

  return {
    success: true,
    message: null,
  };
};

export const calculateFileSize = (size: number) => {
  let i = 0;
  let sizeInBytes = size;
  while (sizeInBytes > 900) {
    sizeInBytes /= 1024;
    i++;
  }
  const exactSize = Math.round(sizeInBytes * 100) / 100 + " " + SIZE_UNITS[i];
  return exactSize;
};
