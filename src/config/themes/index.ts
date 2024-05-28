import { createTheme } from "@mui/material";

const themes = createTheme({
  direction: "ltr",
  typography: {
    fontFamily: ["Manrope", "sans-serif"].join(","),
  },
  palette: {
    primary: {
      main: "#4660E7",
      light: "#7EBDFD",
    },
    secondary: {
      main: "#F0F2FC",
      dark: "#C8CCD6",
    },
    common: {
      black: "#000",
      white: "#fff",
    },
    text: {
      primary: "#263446",
    },
  },
});

export default themes;
