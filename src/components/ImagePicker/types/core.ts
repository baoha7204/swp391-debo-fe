import { ChangeEventHandler } from "react";
import { RefCallBack } from "react-hook-form";

type ImagePickerProps = {
  value: string | ArrayBuffer | null;
  ref: RefCallBack;
  onUpload: UploadFunction;
  onChange: ChangeEventHandler;
};

type UploadFunction = (
  data: string | ArrayBuffer | null
) => Promise<string | null | undefined>;

export type { ImagePickerProps, UploadFunction };
