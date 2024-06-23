import { styled } from "@mui/material";

const ImagePickerStyles = styled("div")(({ theme }) => ({
  root: {
    width: "100%",
    display: "flex",
  },
  icon: {
    margin: theme.spacing(2),
  },
  cardContainer: {
    width: "100px",
    margin: "10px",
  },
  cardRoot: {
    paddingBottom: "14px !important",
  },
  cardRootHide: {
    paddingBottom: "14px !important",
    margin: "-16px",
  },
  input: {
    display: "none",
  },
  button: {
    margin: 10,
  },
  logo: {
    width: "100px",
    height: "100px",
  },
  submit: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: "120px",
  },
}));

export default ImagePickerStyles;
