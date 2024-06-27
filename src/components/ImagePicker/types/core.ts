import { MetadataFile } from "@/components/FilePicker/types/core";
import { ChangeEventHandler } from "react";
import { RefCallBack } from "react-hook-form";

type ImagePickerProps = {
  value: string | null;
  ref: RefCallBack;
  onUpload: UploadFunction;
  onChange: ChangeEventHandler;
};

type UploadFunction = (
  data: File | null,
  config?: MetadataFile
) => Promise<string | null | undefined>;

export type { ImagePickerProps, UploadFunction };
