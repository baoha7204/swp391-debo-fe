import useAnchorEl from "@/hooks/useAnchorEl";
import { Box, IconButton, Menu, MenuItem, Tooltip } from "@mui/material";
import { Fragment } from "react/jsx-runtime";
import EditIcon from "@mui/icons-material/Edit";

const EditMenu = ({
  image,
  onUpload,
  onRemove,
}: {
  image: string | ArrayBuffer | null;
  onUpload: () => void;
  onRemove: () => void;
}) => {
  const [anchorEl, handleClick, handleClose] = useAnchorEl();
  const open = Boolean(anchorEl);

  return (
    <Fragment>
      <Box sx={{ display: "flex", alignItems: "center", textAlign: "center" }}>
        <Tooltip title="Edit image">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{
              backgroundColor: (theme) => theme.palette.primary.main,
              color: (theme) => theme.palette.secondary.main,
              ":hover": {
                backgroundColor: (theme) => theme.palette.primary.light,
                color: (theme) => theme.palette.secondary.main,
              },
              borderRadius: "50%",
            }}
            aria-controls={open ? "account-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
          >
            <EditIcon />
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="edit-image-menu"
        open={open}
        onClose={handleClose}
        onClick={handleClose}
        slotProps={{
          paper: {
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&::before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          },
        }}
        transformOrigin={{ horizontal: "right", vertical: "top" }}
        anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
      >
        <MenuItem onClick={onUpload}>Upload a photo...</MenuItem>
        {image && <MenuItem onClick={onRemove}>Remove photo</MenuItem>}
      </Menu>
    </Fragment>
  );
};

export default EditMenu;
