import { Box, Grid } from "@mui/material";
import MyButton from "@/components/MyButton";
import FormImagePicker from "@/components/Form/FormImagePicker";
import useProfile from "./hooks/useProfile";
import FormInputText from "@/components/Form/FormInputText";

const Profile = () => {
  const [handleSubmit, isSubmitting, control] = useProfile();

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
      <Grid
        container
        gap={{
          xs: 1,
          sm: 0,
        }}
        spacing={5}
      >
        <Grid container item xs={12} sm={8}>
          <FormInputText
            control={control}
            name="username"
            outsideLabel="Username"
            fullWidth
            id="username"
            label="john doe"
            inputProps={{ "data-testid": "username" }}
            autoFocus
          />
          <FormInputText
            control={control}
            name="firstName"
            outsideLabel="First name"
            fullWidth
            id="firstName"
            label="John"
            inputProps={{ "data-testid": "firstName" }}
          />
          <FormInputText
            control={control}
            name="lastName"
            outsideLabel="Last name"
            fullWidth
            id="lastName"
            label="Doe"
            inputProps={{ "data-testid": "lastName" }}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          {/* <FormImagePicker name="avt" control={control} /> */}
        </Grid>
      </Grid>
      <MyButton
        data-testid="update"
        type="submit"
        fullWidth
        variant="contained"
        disabled={isSubmitting}
      >
        Update profile
      </MyButton>
    </Box>
  );
};

export default Profile;
