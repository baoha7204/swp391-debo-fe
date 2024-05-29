import { Grid, TextField, TextFieldProps, Typography } from "@mui/material";

export type MyTextFieldProps = {
  outsideLabel?: string;
} & TextFieldProps;

const MyTextField = ({ outsideLabel, ...textFieldProps }: MyTextFieldProps) => (
  <Grid container>
    <Typography
      sx={{
        color: (theme) => theme.palette.text.primary,
        fontSize: 11,
        fontWeight: 400,
        paddingLeft: 0,
      }}
    >
      {outsideLabel}
    </Typography>
    <TextField sx={{ mt: 1.5 }} {...textFieldProps} />
  </Grid>
);
export default MyTextField;
