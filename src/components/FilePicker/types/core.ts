import { UploadFunction } from "@/components/ImagePicker/types/core";
import { ChangeEventHandler, DragEvent } from "react";
import { RefCallBack } from "react-hook-form";

export type FilePickerProps = {
  value: string | null;
  ref?: RefCallBack;
  onUpload: UploadFunction;
  onChange?: ChangeEventHandler;
  disabled: boolean;
};

export interface FileAttachmentProps {
  size: string;
  file: FileProps;
  index: number;
  disabled?: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleRemoveFile: Function;
}

export interface FileProps extends Blob {
  name: string;
  size: number;
  path: string;
  type: string;
  lastModified?: Date;
  lastModifiedDate?: Date;
  extension?: string;
  webkitRelativePath?: string;
  contentType?: string;
}

export interface FileActionProps {
  event: DragEvent<HTMLElement>;
  files: FileList;
}
