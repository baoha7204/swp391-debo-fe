import { Box, Divider } from "@mui/material";
import { useContext, useState } from "react";
import { Dayjs } from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import Slots from "./Slots";
import { ProgressContext } from "../progress.context";

const SlotPicker = () => {
  const { data, setData } = useContext(ProgressContext);
  const [chosenDate, setChosenDate] = useState<Dayjs | null>(null);

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Box>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Choose a date"
            value={chosenDate}
            onChange={(newValue) => {
              setChosenDate(newValue);
              setData((prev) => ({ ...prev, date: newValue }));
            }}
            disablePast
          />
        </LocalizationProvider>
      </Box>
      <Divider flexItem />
      <Box>{data?.date && <Slots />}</Box>
    </Box>
  );
};

export default SlotPicker;
