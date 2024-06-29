import { Box, Button, Typography } from "@mui/material";
import useAccount from "./hooks/useAccount";
import FormInputText from "@/components/Form/FormInputText";

const Account = () => {
  const [handleSubmit, isSubmitting, control] = useAccount();

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
      <Typography variant="h5" gutterBottom>
        Change Password
      </Typography>
      <FormInputText
        isPassword
        control={control}
        name="oldPassword"
        outsideLabel="Old Password"
        id="oldPassword"
        inputProps={{ "data-testid": "oldPassword" }}
      />
      <FormInputText
        isPassword
        control={control}
        name="newPassword"
        outsideLabel="New Password"
        id="newPassword"
        inputProps={{ "data-testid": "newPassword" }}
      />
      <FormInputText
        isPassword
        control={control}
        name="confirmNewPassword"
        outsideLabel="Confirm New Password"
        id="confirmNewPassword"
        inputProps={{ "data-testid": "confirmNewPassword" }}
      />
      <Button
        data-testid="update"
        type="submit"
        variant="contained"
        disabled={isSubmitting}
        sx={{
          mt: 2,
          width: "fit-content",
          alignSelf: "left",
          textTransform: "none",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: 1,
        }}
      >
        Update password
      </Button>
    </Box>
  );
};

export default Account;
