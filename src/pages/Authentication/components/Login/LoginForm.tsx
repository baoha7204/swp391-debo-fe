import { Box, Checkbox, FormControlLabel } from "@mui/material";

import MyButton from "@/components/MyButton";
import useToggle from "@/hooks/useToggle";
import useLogin from "./hooks/useLogin";
import FormInputText from "@/components/Form/FormInputText";

const LoginForm = () => {
  const [handleSubmit, isSubmitting, control] = useLogin();

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
        data-testid="user"
        autoFocus
      />
      <FormInputText
        data-testid="password"
        isPassword
        control={control}
        name="password"
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
