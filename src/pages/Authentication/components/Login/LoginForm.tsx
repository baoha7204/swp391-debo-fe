import { Box } from "@mui/material";

import MyTextField from "@/components/MyTextField";
import PasswordField from "@/components/PasswordField";
import MyButton from "@/components/MyButton";

const LoginForm = () => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log(data.get("email"));
  };
  return (
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
      <PasswordField />
      <MyButton type="submit" fullWidth variant="contained">
        Sign in
      </MyButton>
    </Box>
  );
};

export default LoginForm;
