import { Button, ButtonProps } from "@mui/material";

const MyButton = ({ children, ...buttonProps }: ButtonProps) => (
  <Button
    {...buttonProps}
    sx={{
      color: (theme) => theme.palette.secondary.main,
      textTransform: "none",
      fontSize: 15,
      fontWeight: 700,
      letterSpacing: 1,
    }}
  >
    {children}
  </Button>
);
export default MyButton;
