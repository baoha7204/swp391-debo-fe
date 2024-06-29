import { Fragment } from "react";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ArchiveOutlinedIcon from "@mui/icons-material/ArchiveOutlined";
import CloseIcon from "@mui/icons-material/Close";
import DownloadIcon from "@mui/icons-material/Download";
import { Avatar, Box, IconButton, Typography } from "@mui/material";
import { FileAttachmentProps } from "./types/core";
import { calculateFileSize } from "@/utils/fileHelper";

const FileAttachment = ({
  file,
  disabled,
  handleRemoveFile,
}: FileAttachmentProps) => {
  const icon: React.ReactNode = /\.(g?zip|tar|gz|rar)$/i.test(file.name) ? (
    // Set icon for compressed files
    <ArchiveOutlinedIcon color="primary" fontSize="large" />
  ) : (
    <InsertDriveFileOutlinedIcon color="primary" fontSize="large" />
  );

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
            alt="attachment"
            src={file.path}
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
                <b>{calculateFileSize(file.size)}</b> |{" "}
                <b>{file?.extension ? file.extension.toLowerCase() : ""}</b>
              </Fragment>
            </Typography>
          </Typography>
        </Box>

        <Typography component="div" sx={{ mr: -0.5, textAlign: "right" }}>
          <IconButton
            disabled={disabled}
            href={file.url}
            download={file.name}
            target="_blank"
          >
            <DownloadIcon />
          </IconButton>
        </Typography>
        <Typography component="div" sx={{ mr: -0.5, textAlign: "right" }}>
          <IconButton disabled={disabled} onClick={() => handleRemoveFile()}>
            <CloseIcon />
          </IconButton>
        </Typography>
      </Box>
    </>
  );
};

export default FileAttachment;
