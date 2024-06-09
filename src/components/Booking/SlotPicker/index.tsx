import { Box, Divider } from "@mui/material";
import { useContext, useState } from "react";
import { Dayjs } from "dayjs";
import Slots from "./Slots";
import { ProgressContext } from "../progress.context";
import MyDatePicker from "@/components/MyDatePicker";

const SlotPicker = () => {
  const { data, setData } = useContext(ProgressContext);
  const [chosenDate, setChosenDate] = useState<Dayjs | null>(null);

  const handleDateChange = (newValue: Dayjs | null) => {
    setChosenDate(newValue);
    setData((prev) => ({ ...prev, date: newValue }));
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 4,
      }}
    >
      <Box>
        <MyDatePicker
          value={chosenDate}
          onChange={handleDateChange}
          label="Choose a date"
        />
      </Box>
      <Divider flexItem />
      <Box>{data?.date && <Slots />}</Box>
    </Box>
  );
};

export default SlotPicker;
