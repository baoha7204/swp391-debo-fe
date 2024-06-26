import { Fragment, useRef } from "react";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import CloseIcon from "@mui/icons-material/Close";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { FileAttachmentProps } from "./types/core";

const FileAttachment = ({
  size,
  file,
  index,
  disabled,
  handleRemoveFile,
}: FileAttachmentProps) => {
  const avatarRef = useRef<HTMLDivElement | null>(null);

  let icon: React.ReactNode = (
    <InsertDriveFileOutlinedIcon color="primary" fontSize="large" />
  );

  // Set icon for compressed files
  if (/\.(g?zip|tar|gz|rar)$/i.test(file.name)) {
    icon = <ArchiveOutlinedIcon color="primary" fontSize="large" />;
  }

  return (
    <>
      <Box
        sx={{
          mb: 0,
          display: "flex",
          alignItems: "center",
          "&:nth-of-type(even)": {
            backgroundColor: (theme) => theme.palette.action.hover,
          },
        }}
      >
        <Box sx={{ display: "flex", flexGrow: 1, alignItems: "center" }}>
          <Avatar
            alt=""
            src={file.path}
            ref={avatarRef}
            variant="rounded"
            sx={{
              m: 0.5,
              width: 32,
              height: 32,
              display: "flex",
              background: "transparent",
            }}
          >
            {icon}
          </Avatar>
          <Typography
            component="div"
            sx={{ display: "inline-grid", alignItems: "center" }}
          >
            <Typography variant="body2" noWrap>
              {file.name}
            </Typography>
            <Typography variant="caption" noWrap>
              <Fragment>
                <b>{size}</b> |{" "}
                <b>{file?.extension ? file.extension.toLowerCase() : ""}</b>
              </Fragment>
            </Typography>
          </Typography>
        </Box>

        <Typography component="div" sx={{ mr: -0.5, textAlign: "right" }}>
          <IconButton
            disabled={disabled}
            onClick={(event): void => handleRemoveFile(event, index)}
          >
            <CloseIcon />
          </IconButton>
        </Typography>
      </Box>
    </>
  );
};

export default FileAttachment;
