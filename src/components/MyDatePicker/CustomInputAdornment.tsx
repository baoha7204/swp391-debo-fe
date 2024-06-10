import { InputAdornment, InputAdornmentProps } from "@mui/material";
import PriorityHighIcon from "@mui/icons-material/PriorityHigh";

const CustomInputAdornment = (
  props: InputAdornmentProps & { hasError?: boolean }
) => {
  const { hasError, children, ...other } = props;
  return (
    <InputAdornment {...other}>
      <PriorityHighIcon
        color="error"
        sx={{ marginLeft: 1, opacity: hasError ? 1 : 0 }}
      />
      {children}
    </InputAdornment>
  );
};

export default CustomInputAdornment;
