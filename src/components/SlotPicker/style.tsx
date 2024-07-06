import { Paper, styled } from "@mui/material";

export const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(1),
  textAlign: "center",
  color: theme.palette.secondary.main,
  backgroundColor: theme.palette.primary.main,
  fontWeight: "bold",
  flexGrow: 1,
  minWidth: "200px",
}));
