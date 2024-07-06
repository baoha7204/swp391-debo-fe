import {
  DatePicker,
  DateValidationError,
  LocalizationProvider,
} from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CustomInputAdornment from "./CustomInputAdornment";
import { Dayjs } from "dayjs";
import { useState } from "react";

export type MyDatePickerProps = {
  label?: string;
  value: Dayjs | null;
  onChange: (newValue: Dayjs | null) => void;
  disablePast?: boolean;
  minDate?: Dayjs;
};

const MyDatePicker = ({
  value,
  onChange,
  label = "Date",
  disablePast = true,
  minDate,
  ...rest
}: MyDatePickerProps) => {
  const [error, setError] = useState<DateValidationError>(null);
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
        disablePast={disablePast}
        onError={setError}
        slots={{
          inputAdornment: CustomInputAdornment,
        }}
        slotProps={{
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          inputAdornment: { hasError: !!error } as any,
        }}
        minDate={minDate}
        {...rest}
      />
    </LocalizationProvider>
  );
};

export default MyDatePicker;
