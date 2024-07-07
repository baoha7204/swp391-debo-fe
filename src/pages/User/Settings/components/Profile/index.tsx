import { Box, Button, Grid } from "@mui/material";
import FormImagePicker from "@/components/Form/FormImagePicker";
import useProfile from "./hooks/useProfile";
import FormInputText from "@/components/Form/FormInputText";
import FormDatePicker from "@/components/Form/FormDatePicker";
import FormSelect from "@/components/Form/FormSelect";

const Profile = () => {
  const [handleSubmit, isSubmitting, control, onUpload] = useProfile();

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
        <Grid container item xs={12} sm={8} gap={2}>
          <FormInputText
            control={control}
            name="email"
            outsideLabel="Email"
            label="example@gmail.com"
            required
            fullWidth
            id="email"
            inputProps={{ "data-testid": "email" }}
            disabled
          />
          <FormInputText
            control={control}
            name="phone"
            outsideLabel="Phone"
            label="0123456789"
            fullWidth
            required
            id="phone"
            inputProps={{ "data-testid": "phone" }}
          />
          <FormInputText
            control={control}
            name="username"
            outsideLabel="Username"
            fullWidth
            id="username"
            label="john doe"
            inputProps={{ "data-testid": "username" }}
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
          <FormDatePicker control={control} name="dateOfBirthday" />
          <FormSelect
            control={control}
            name="gender"
            label="Gender"
            options={[
              { value: true, label: "Male" },
              { value: false, label: "Female" },
            ]}
            sx={{
              width: "fit-content",
            }}
          />
          <FormInputText
            control={control}
            name="address"
            outsideLabel="Address"
            fullWidth
            id="address"
            label="Quan 9 TPHCM"
            inputProps={{ "data-testid": "address" }}
          />
        </Grid>
        <Grid
          item
          xs={12}
          sm={4}
          display="flex"
          justifyContent={{
            xs: "flex-start",
            sm: "center",
          }}
        >
          <FormImagePicker
            name="avt"
            control={control}
            onUpload={onUpload(true)}
          />
        </Grid>
      </Grid>
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
        Update profile
      </Button>
    </Box>
  );
};

export default Profile;
