import { Button, Grid, Typography } from "@mui/material";

export type AuthModeOfferProps = {
  authMode: "signin" | "signup";
  onAuthModeChange: () => void;
};

const AuthModeOffer = ({ authMode, onAuthModeChange }: AuthModeOfferProps) => (
  <Grid container justifyContent={"center"} gap={1}>
    <Typography
      sx={{
        fontSize: 14,
        fontWeight: 400,
        textAlign: "center",
        alignSelf: "center",
      }}
    >
      {authMode === "signin"
        ? "Don't have an account?"
        : "Already have an account?"}
    </Typography>
    <Button
      type="button"
      variant="text"
      sx={{
        color: (theme) => theme.palette.primary.light,
        textTransform: "none",
      }}
      onClick={onAuthModeChange}
    >
      {authMode === "signin" ? "Sign up now" : "Sign in"}
    </Button>
  </Grid>
);

export default AuthModeOffer;
