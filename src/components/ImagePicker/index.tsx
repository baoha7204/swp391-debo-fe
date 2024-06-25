import {
  ChangeEvent,
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { Avatar, Badge, Box, Button, Typography } from "@mui/material";
import { ImagePickerProps } from "./types/core";
import EditMenu from "./EditMenu";
import VisuallyHiddenInput from "../VisuallyHiddenInput";
import { errorToastHandler } from "@/utils/toast/actions";
import { toastSuccess } from "@/utils/toast";
import { validateImage } from "@/utils/imageHelper";

const ImagePicker = forwardRef<HTMLInputElement, ImagePickerProps>(
  ({ value, onUpload, onChange }: ImagePickerProps, forwardedRef) => {
    const ref = useRef<HTMLInputElement>(null);
    useImperativeHandle(forwardedRef, () => ref.current as HTMLInputElement);
    const [image, setImage] = useState<string | ArrayBuffer | null>(
      () => value || null
    );
    const [error, setError] = useState<string | null>(null);
    const handleUploadClick = (event: ChangeEvent<HTMLInputElement>) => {
      const { files } = event.target;
      const selectedFiles = files as FileList;
      const file = selectedFiles[0];
      if (!file) {
        errorToastHandler({ message: "No file selected" });
      }
      const validationResult = validateImage(file);
      if (!validationResult.success) {
        setError(validationResult.message);
        return;
      }
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = async () => {
        const data = await onUpload(reader.result);
        if (!data) {
          errorToastHandler({ message: "Upload failed, please try again" });
          return;
        }
        setImage(data);
        onChange({ target: { value: data } } as ChangeEvent<HTMLInputElement>);
        setError(null);
        // toastSuccess("Upload successfully!");
        // setImage(reader.result);
        // onChange({
        //   target: { value: file.name },
        // } as ChangeEvent<HTMLInputElement>);
        // setError(null);
        // toastSuccess("Upload successfully!");
      };
    };

    const handleClick = () => {
      ref.current?.click();
    };

    const handleDelete = async () => {
      const data = await onUpload(null);
      if (!data) {
        errorToastHandler({ message: "Delete failed, please try again" });
        return;
      }
      setImage(null);
      onChange({ target: { value: data } } as ChangeEvent<HTMLInputElement>);
      setError(null);
      toastSuccess("Delete successfully!");
    };

    return (
      <Box>
        <Badge
          overlap="circular"
          anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
          badgeContent={
            <EditMenu
              image={image}
              onUpload={handleClick}
              onRemove={handleDelete}
            />
          }
        >
          <Button
            component="label"
            role={undefined}
            tabIndex={-1}
            sx={{
              borderRadius: "50%",
              padding: 0,
              "&:hover": {
                backgroundColor: "rgba(0, 0, 0, 0.5)",
              },
            }}
          >
            <VisuallyHiddenInput
              type="file"
              ref={ref}
              onChange={handleUploadClick}
            />
            <Avatar
              sx={{
                width: 200,
                height: 200,
              }}
              src={(image as string) || "/broken-image.jpg"}
            />
          </Button>
        </Badge>
        {error && <Typography sx={{ color: "error.main" }}>{error}</Typography>}
      </Box>
    );
  }
);

export default ImagePicker;
