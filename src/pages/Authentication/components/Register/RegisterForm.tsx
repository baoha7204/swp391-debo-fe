import { Box } from "@mui/material";

import MyButton from "@/components/MyButton";
import MyTextField from "@/components/MyTextField";
import PasswordField from "@/components/PasswordField";

const RegisterForm = () => {
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
        outsideLabel="Email"
        required
        fullWidth
        id="email"
        label="example@gmail.com"
        name="email"
        autoComplete="email"
        autoFocus
      />
      <PasswordField label="Must be 8 characters" />
      <PasswordField
        outsideLabel="Confirm password"
        label="Repeat password"
        name="confirmPassword"
        id="confirmPassword"
      />
      <MyButton type="submit" fullWidth variant="contained">
        Sign up
      </MyButton>
    </Box>
  );
};
export default RegisterForm;
