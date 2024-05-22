import { PropsWithChildren } from "react";
import { CssBaseline, Grid, Paper } from "@mui/material";

const AuthLayout = ({ children }: PropsWithChildren) => (
  <Grid container component="main" sx={{ height: "100vh" }}>
    <CssBaseline />
    <Grid
      item
      xs={false}
      sm={4}
      md={8}
      sx={{
        backgroundImage: "url(https://source.unsplash.com/random?wallpapers)",
        backgroundRepeat: "no-repeat",
        backgroundColor: (t) =>
          t.palette.mode === "light" ? t.palette.grey[50] : t.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    />
    <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
      {children}
    </Grid>
  </Grid>
);

export default AuthLayout;
