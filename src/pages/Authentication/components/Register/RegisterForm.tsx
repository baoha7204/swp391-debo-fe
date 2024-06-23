import { Box } from "@mui/material";

import MyButton from "@/components/MyButton";
import useRegister from "./hooks/useRegister";
import FormInputText from "@/components/Form/FormInputText";
import authApi from "@/utils/api/authApi";

export type RegisterFormProps = typeof authApi.register;

const RegisterForm = ({ auth }: { auth: RegisterFormProps }) => {
  const [handleSubmit, isSubmitting, control] = useRegister(auth);

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
        inputProps={{ "data-testid": "email" }}
      />
      <FormInputText
        control={control}
        name="phoneNumber"
        outsideLabel="Phone"
        label="0123456789"
        required
        fullWidth
        id="phoneNumber"
        inputProps={{ "data-testid": "phoneNumber" }}
      />
      <FormInputText
        isPassword
        control={control}
        name="password"
        label="Must be 8 characters"
        inputProps={{ "data-testid": "password" }}
      />
      <FormInputText
        isPassword
        control={control}
        outsideLabel="Confirm password"
        label="Repeat password"
        name="confirmPassword"
        id="confirmPassword"
        inputProps={{ "data-testid": "confirmPassword" }}
      />
      <MyButton
        data-testid="register"
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
