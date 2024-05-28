import { Box } from "@mui/material";

import MyButton from "@/components/MyButton";
import useRegister from "./hooks/useRegister";
import FormInputText from "@/components/Form/FormInputText";

const RegisterForm = () => {
  const [handleSubmit, isSubmitting, control] = useRegister();

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
      <FormInputText
        control={control}
        name="email"
        outsideLabel="Email"
        label="example@gmail.com"
        required
        fullWidth
        id="email"
        autoFocus
      />
      <FormInputText
        isPassword
        control={control}
        name="password"
        label="Must be 8 characters"
      />
      <FormInputText
        isPassword
        control={control}
        outsideLabel="Confirm password"
        label="Repeat password"
        name="confirmPassword"
        id="confirmPassword"
      />
      <MyButton
        type="submit"
        fullWidth
        variant="contained"
        disabled={isSubmitting}
      >
        Sign up
      </MyButton>
    </Box>
  );
};
export default RegisterForm;
