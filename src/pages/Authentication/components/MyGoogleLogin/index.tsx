import { Grid } from "@mui/material";

import MyButton from "@/components/MyButton";
import useGoogleSignin from "./hooks/useGoogleSignin";

const MyGoogleLogin = () => {
  const handleGoogleLogin = useGoogleSignin();
  return (
    <MyButton onClick={() => handleGoogleLogin()} fullWidth variant="contained">
      <Grid container justifyContent={"center"} alignItems={"center"} gap={1}>
        <Grid item width={20} height={20}>
          <img src="/assets/Google-Logo.svg" alt="google-logo" />
        </Grid>
        <Grid item>Google sign in</Grid>
      </Grid>
    </MyButton>
  );
};
export default MyGoogleLogin;
