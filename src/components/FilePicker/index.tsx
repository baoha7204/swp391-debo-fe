import { validateFile } from "@/utils/fileHelper";
import { Box, Button, Grid, Hidden, Paper, Typography } from "@mui/material";
import {
  ChangeEvent,
  DragEvent,
  forwardRef,
  useCallback,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import VisuallyHiddenInput from "../VisuallyHiddenInput";
import { toastSuccess } from "@/utils/toast";
import { errorToastHandler } from "@/utils/toast/actions";
import { FilePickerProps, FileProps } from "./types/core";
import { StyledContainer } from "./style";
import FileAttachment from "./FileAttachment";

const FilePicker = forwardRef<HTMLInputElement, FilePickerProps>(
  (
    { value, onUpload, disabled, readonly = false }: FilePickerProps,
    forwardedRef
  ) => {
    const inputRef = useRef<HTMLInputElement>(null);
    useImperativeHandle(
      forwardedRef,
      () => inputRef.current as HTMLInputElement
    );
    // eslint-disable-next-line
    // @ts-ignore
    const [file, setFile] = useState<FileProps | null>(() => {
      if (!value.url || !value.metadata) return null;
      return {
        name: value.metadata.name,
        size: value.metadata.size,
        path: value.url,
        url: value.url,
        type: value.metadata.contentType!,
        contentType: value.metadata.contentType,
        lastModified: new Date(value.metadata.lastModified!),
        extension: value.metadata.name.split(".").pop()?.toLowerCase(),
      };
    });
    const [animate, setAnimate] = useState<boolean>();
    const [error, setError] = useState<string | null>(null);

    const addFile = useCallback(
      (
        event: ChangeEvent<HTMLInputElement> | DragEvent<HTMLElement>,
        fileTab?: File
      ) => {
        setAnimate(false);
        setError(null);

        if (!onUpload) return;

        // Get file from input
        let file;
        if (fileTab) {
          file = fileTab;
        } else {
          const { files } = event.target as HTMLInputElement;
          const selectedFiles = files as FileList;
          file = selectedFiles[0];
        }
        if (!file) {
          errorToastHandler({ message: "No file selected" });
          return;
        }
        // Validate file
        const validationResult = validateFile(file);
        if (!validationResult.success) {
          setError(validationResult.message);
          return;
        }
        // Read file
        const reader = new FileReader();
        reader.addEventListener(
          "load",
          async function (this) {
            const data = await onUpload(file, {
              nameFile: file.name,
              fileSize: file.size,
              lastModified: new Date(file.lastModified),
              contentType: file.type,
            });
            if (!data) {
              errorToastHandler({ message: "Upload failed, please try again" });
              return;
            }
            const extension = file.type.split("/")[1];
            setFile({
              name: file.name,
              size: file.size,
              // eslint-disable-next-line
              // @ts-ignore
              path: this.result,
              type: file.type,
              url: data,
              contentType: file.type,
              lastModified: new Date(file.lastModified),
              extension: extension?.toLowerCase(),
            });
            setError(null);
            toastSuccess("Upload successfully!");
          },
          false
        );

        reader.readAsDataURL(file);
      },
      [onUpload]
    );

    const handleDelete = async () => {
      setError(null);

      if (!onUpload) return;

      if (inputRef.current) {
        inputRef.current.value = "";
      }

      const data = await onUpload(null);
      if (typeof data === "undefined") {
        errorToastHandler({ message: "Delete failed, please try again" });
        return;
      }
      setFile(null);
      toastSuccess("Delete successfully!");
    };

    const handleDragEnter = useCallback<React.DragEventHandler<HTMLElement>>(
      (event) => {
        event.preventDefault();
        setAnimate(true);
      },
      []
    );

    const handleDragOver = useCallback<React.DragEventHandler<HTMLElement>>(
      (event) => {
        event.stopPropagation();
        event.preventDefault();
      },
      []
    );

    const handleDrop = useCallback<React.DragEventHandler<HTMLDivElement>>(
      (event) => {
        event.stopPropagation();
        event.preventDefault();

        setAnimate(false);
        addFile(event, event.dataTransfer.files[0]);
      },
      [addFile]
    );

    const handleDragLeave = useCallback(() => {
      setAnimate(false);
    }, []);

    return (
      <Paper
        component="div"
        sx={{ p: 1 }}
        elevation={0}
        onDrop={!disabled ? handleDrop : undefined}
        onDragEnd={!disabled ? handleDragLeave : undefined}
        onDragOver={!disabled ? handleDragOver : undefined}
        onDragEnter={!disabled ? handleDragEnter : undefined}
        variant="outlined"
      >
        {file && (
          <Box sx={{ fontSize: 12 }}>
            <Typography>1 file joined</Typography>
          </Box>
        )}
        {!readonly && (
          <>
            <Paper
              elevation={0}
              sx={{
                p: 1,
                transition: 500,
                background: (theme) =>
                  animate
                    ? theme.palette.secondary.main
                    : theme.palette.primary.main,
              }}
            >
              <Grid
                container
                spacing={2}
                alignItems="center"
                justifyContent="center"
              >
                <Grid
                  item
                  xs={12}
                  sm
                  md
                  sx={{
                    color: (theme) => theme.palette.secondary.main,
                    textAlign: "center",
                    mt: { xs: 0, sm: 2 },
                  }}
                >
                  <Hidden smDown>
                    <Typography variant="h5">
                      <b>Drag to drop</b>
                    </Typography>
                  </Hidden>
                  <Hidden smUp>
                    <Typography variant="h6">
                      <b>Drag to drop</b>
                    </Typography>
                  </Hidden>
                  <Typography variant="caption">
                    or
                    <Button
                      component="label"
                      variant="contained"
                      role={undefined}
                      tabIndex={-1}
                      startIcon={<CloudUploadIcon />}
                      sx={{ ml: 1, mt: 1, borderRadius: 0 }}
                    >
                      Upload file
                      <VisuallyHiddenInput
                        type="file"
                        ref={inputRef}
                        onChange={addFile}
                      />
                    </Button>
                  </Typography>
                </Grid>
              </Grid>
            </Paper>
            {error && (
              <Typography sx={{ color: "error.main" }}>{error}</Typography>
            )}
          </>
        )}
        <StyledContainer
          component="div"
          sx={{
            overflowY: "auto",
            mt: 2,
            mr: -1,
            pr: 1,
            height: 300,
            maxHeight: 357,
          }}
        >
          {file ? (
            <FileAttachment
              file={file}
              disabled={disabled}
              handleRemoveFile={handleDelete}
              readonly={readonly}
            />
          ) : (
            "No medical record yet"
          )}
        </StyledContainer>
      </Paper>
    );
  }
);

export default FilePicker;
