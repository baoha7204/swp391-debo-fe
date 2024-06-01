import { styled } from "@mui/material";

export const PopperInner = styled("div")(({ theme }) => ({
  maxWidth: "100%",
  width: 400,
  "& > div": {
    padding: "5px 10px",
    "& .rs__popper_actions": {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      "& .MuiIconButton-root": {
        color: theme.palette.primary.contrastText,
      },
    },
  },
}));

export const EventActions = styled("div")(({ theme }) => ({
  display: "inherit",
  "& .MuiIconButton-root": {
    color: theme.palette.primary.contrastText,
  },
  "& .MuiButton-root": {
    "&.delete": {
      color: theme.palette.error.main,
      fontWeight: 800,
      backgroundColor: theme.palette.secondary.main,
    },
    "&.cancel": {
      color: theme.palette.secondary.main,
      fontWeight: 800,
    },
  },
}));
