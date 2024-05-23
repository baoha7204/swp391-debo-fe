import { useState } from "react";
import {
  Box,
  CssBaseline,
  Divider,
  Grid,
  Paper,
  Typography,
} from "@mui/material";
import Logo from "@/components/Logo";
import LoginForm from "../Login/LoginForm";
import RegisterForm from "../Register/RegisterForm";
import MyGoogleLogin from "../MyGoogleLogin";
import AuthModeOffer from "../AuthModeOffer";

const AuthLayout = () => {
  const [authMode, setAuthMode] = useState<"signin" | "signup">("signin");

  const handleAuthModeChange = () =>
    setAuthMode(authMode === "signin" ? "signup" : "signin");

  return (
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
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <Grid item xs={12} sm={8} md={4} component={Paper} elevation={6} square>
        <Box
          sx={{
            my: 8,
            mx: 6,
            display: "flex",
            flexDirection: "column",
            gap: 5,
          }}
        >
          <Logo />
          <Grid container flexDirection={"column"}>
            <Grid item>
              <Typography
                sx={{
                  fontSize: 20,
                  fontWeight: 600,
                }}
              >
                {authMode === "signin"
                  ? "Nice to see you again"
                  : "Create account"}
              </Typography>
            </Grid>
            <Grid item>
              {authMode === "signin" ? <LoginForm /> : <RegisterForm />}
            </Grid>
          </Grid>
          <Divider />
          <Grid container flexDirection={"column"}>
            {authMode === "signin" && (
              <>
                <Grid item>
                  <Typography
                    sx={{
                      fontSize: 20,
                      fontWeight: 600,
                    }}
                  >
                    For Admin
                  </Typography>
                </Grid>
                <Grid item>
                  <MyGoogleLogin />
                </Grid>
              </>
            )}
            <AuthModeOffer
              authMode={authMode}
              onAuthModeChange={handleAuthModeChange}
            />
          </Grid>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AuthLayout;
