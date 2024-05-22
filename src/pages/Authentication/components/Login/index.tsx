import { Box, Divider, Grid, Typography } from "@mui/material";

import Logo from "@/components/Logo";
import MyTextField from "@/components/MyTextField";
import MyButton from "@/components/MyButton";

const Login = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("email"));
  };
  return (
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
      <div>
        <Typography
          sx={{
            fontSize: 20,
            fontWeight: 600,
          }}
        >
          Nice to see you again
        </Typography>
        <Box
          component="form"
          noValidate
          onSubmit={handleSubmit}
          sx={{
            mt: 3,
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <MyTextField
            outsideLabel="Login"
            required
            fullWidth
            id="email"
            label="Email or phone number"
            name="email"
            autoComplete="email"
            autoFocus
          />
          <MyTextField
            outsideLabel="Password"
            required
            fullWidth
            name="password"
            label="Enter password"
            type="password"
            id="password"
            autoComplete="current-password"
          />
          <MyButton type="submit" fullWidth variant="contained">
            Sign In
          </MyButton>
        </Box>
      </div>
      <Divider />
      <Grid container>
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
      </Grid>
    </Box>
  );
};

export default Login;
