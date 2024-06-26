import { validateFile } from "@/utils/fileHelper";
import { Box, Button, Grid, Hidden, Paper, Typography } from "@mui/material";
import {
  ChangeEvent,
  DragEvent,
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

import VisuallyHiddenInput from "../VisuallyHiddenInput";
import { toastSuccess } from "@/utils/toast";
import { errorToastHandler } from "@/utils/toast/actions";
import { FileActionProps, FilePickerProps, FileProps } from "./types/core";
import { StyledContainer } from "./style";
import FileAttachment from "./FileAttachment";

const FilePicker = forwardRef<HTMLInputElement, FilePickerProps>(
  ({ value, onUpload, disabled }: FilePickerProps, forwardedRef) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const cardRef = useRef<HTMLDivElement>(null);
    useImperativeHandle(
      forwardedRef,
      () => inputRef.current as HTMLInputElement
    );
    const [action, setAction] = useState<FileActionProps | null>();
    const [file, setFile] = useState<FileProps | null>(null);
    const [animate, setAnimate] = useState<boolean>();
    const [error, setError] = useState<string | null>(null);

    const addFile = (
      event: ChangeEvent<HTMLInputElement> | DragEvent<HTMLElement>,
      fileTab?: File
    ) => {
      setAnimate(false);
      setError(null);

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
      const extension = file.type.split("/")[1];

      reader.addEventListener(
        "load",
        async () => {
          // const data = await onUpload(file);
          // if (!data) {
          //   errorToastHandler({ message: "Upload failed, please try again" });
          //   return;
          // }
          setFile({
            name: file.name,
            size: file.size,
            // eslint-disable-next-line
            // @ts-ignore
            path: this.result,
            type: file.type,
            contentType: file.type,
            // eslint-disable-next-line
            // @ts-ignore
            lastModified: file.lastModified,
            extension: extension?.toLowerCase(),
          });
          setError(null);
          toastSuccess("Upload successfully!");
        },
        false
      );

      reader.readAsDataURL(file);
    };

    // const handleClick = () => {
    //   inputRef.current?.click();
    // };

    const handleDelete = async () => {
      setError(null);
      const data = await onUpload(null);
      if (typeof data === "undefined") {
        errorToastHandler({ message: "Delete failed, please try again" });
        return;
      }
      setFile(null);
      toastSuccess("Delete successfully!");
    };

    const handleDragEnter = useCallback<React.DragEventHandler<HTMLElement>>(
      (event: DragEvent<HTMLElement>) => {
        event.preventDefault();
        setAnimate(true);
      },
      []
    );

    const handleDragOver = useCallback<React.DragEventHandler<HTMLElement>>(
      (event: DragEvent<HTMLElement>): void => {
        event.stopPropagation();
        event.preventDefault();
      },
      []
    );

    const handleDrop = useCallback<React.DragEventHandler<HTMLElement>>(
      (event: DragEvent<HTMLElement>): void => {
        event.stopPropagation();
        event.preventDefault();

        setAnimate(false);

        setAction({
          event,
          files: event.dataTransfer?.files,
        });
      },
      []
    );

    const handleDragLeave = useCallback((): void => {
      setAnimate(false);
    }, []);

    useEffect(() => {
      const dragDiv = cardRef.current;

      if (dragDiv && !dragDiv.ondrop && !disabled) {
        // eslint-disable-next-line
        // @ts-ignore
        dragDiv.ondrop = handleDrop;
        // eslint-disable-next-line
        // @ts-ignore
        dragDiv.ondragend = handleDragLeave;
        // eslint-disable-next-line
        // @ts-ignore
        dragDiv.ondragover = handleDragOver;
        // eslint-disable-next-line
        // @ts-ignore
        dragDiv.ondragenter = handleDragEnter;
      }
      // eslint-disable-next-line
    }, [cardRef.current]);

    useEffect(() => {
      if (action?.event && action?.files) {
        addFile(action.event, action.files[0]);
        setAction(null);
      }
    }, [file, action]);

    return (
      <Paper sx={{ p: 1 }} elevation={0} ref={cardRef} variant="outlined">
        {file && (
          <Box sx={{ fontSize: 12 }}>
            <Typography>1 file joined</Typography>
          </Box>
        )}
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
        {error && <Typography sx={{ color: "error.main" }}>{error}</Typography>}
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
          {file && (
            <FileAttachment
              file={file}
              size={file.size + ""}
              index={0}
              disabled={disabled}
              key={`upload-file--0`}
              handleRemoveFile={handleDelete}
            />
          )}
        </StyledContainer>
      </Paper>
    );
  }
);

export default FilePicker;
