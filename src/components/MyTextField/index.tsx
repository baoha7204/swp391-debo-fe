import { BaseTextFieldProps, Grid, TextField, Typography } from "@mui/material";

export type MyTextFieldProps = {
  outsideLabel: string;
};

const MyTextField = ({
  outsideLabel,
  ...textFieldProps
}: BaseTextFieldProps & MyTextFieldProps) => (
  <Grid container>
    <Typography
      sx={{
        color: (theme) => theme.palette.text.primary,
        fontSize: 11,
        fontWeight: 400,
        paddingLeft: 2,
      }}
    >
      {outsideLabel}
    </Typography>
    <TextField sx={{ mt: 1.5 }} {...textFieldProps} />
  </Grid>
);
export default MyTextField;
