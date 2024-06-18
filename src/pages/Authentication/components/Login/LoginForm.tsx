import { Box, Checkbox, FormControlLabel } from "@mui/material";

import MyButton from "@/components/MyButton";
import useToggle from "@/hooks/useToggle";
import useLogin from "./hooks/useLogin";
import FormInputText from "@/components/Form/FormInputText";
import authApi from "@/utils/api/authApi";

export type LoginFormProps = typeof authApi.login;

const LoginForm = ({ auth }: { auth: LoginFormProps }) => {
  const [handleSubmit, isSubmitting, control] = useLogin(auth);

  const [check, toggleCheck] = useToggle("persist", false);

  return (
    <Box
      component="form"
      noValidate
      onSubmit={handleSubmit}
      sx={{
        mt: 3,
        display: "flex",
        flexDirection: "column",
        gap: 1,
      }}
    >
      <FormInputText
        control={control}
        name="user"
        outsideLabel="Login"
        required
        fullWidth
        id="user"
        label="Email or phone number"
        inputProps={{ "data-testid": "user" }}
        autoFocus
      />
      <FormInputText
        isPassword
        control={control}
        name="password"
        inputProps={{ "data-testid": "password" }}
      />
      <MyButton
        data-testid="login"
        type="submit"
        fullWidth
        variant="contained"
        disabled={isSubmitting}
      >
        Sign in
      </MyButton>
      <FormControlLabel
        control={
          <Checkbox
            value="remember"
            checked={check}
            onChange={toggleCheck}
            color="primary"
          />
        }
        label="Remember me"
      />
    </Box>
  );
};

export default LoginForm;
