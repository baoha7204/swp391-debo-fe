import { UploadFunction } from "@/components/ImagePicker/types/core";
import { ChangeEventHandler } from "react";
import { RefCallBack } from "react-hook-form";

export type FilePickerProps = {
  value: {
    url: string | null;
    metadata: Pick<
      FileProps,
      "contentType" | "name" | "size" | "lastModified"
    > | null;
  };
  ref?: RefCallBack;
  onUpload?: UploadFunction;
  onChange?: ChangeEventHandler;
  disabled: boolean;
  readonly?: boolean;
};

export interface FileAttachmentProps {
  file: FileProps;
  index?: number;
  disabled?: boolean;
  readonly: boolean;
  // eslint-disable-next-line @typescript-eslint/ban-types
  handleRemoveFile: Function;
}

export interface FileProps extends Blob {
  name: string;
  size: number;
  path: string;
  type: string;
  url: string;
  lastModified?: Date;
  lastModifiedDate?: Date;
  extension?: string;
  webkitRelativePath?: string;
  contentType?: string;
}

export type MetadataFile = {
  nameFile: string;
  fileSize: number;
  lastModified: Date;
  contentType: string;
};
