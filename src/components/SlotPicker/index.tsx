import { Box, Divider } from "@mui/material";
import { useState } from "react";
import { Dayjs } from "dayjs";
import Slots from "./Slots";
import MyDatePicker from "../MyDatePicker";

export type SlotPickerProps = {
  fetchSlots: (date: Dayjs) => {
    slots: number[];
    isLoading: boolean;
  };
  handleSubmit: (slot: number, date: Dayjs) => void;
};

const SlotPicker = ({ fetchSlots, handleSubmit }: SlotPickerProps) => {
  const [chosenDate, setChosenDate] = useState<Dayjs | null>(null);

  const handleDateChange = (newValue: Dayjs | null) => {
    setChosenDate(newValue);
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
      <Box>
        {chosenDate && (
          <Slots
            date={chosenDate}
            fetchSlots={fetchSlots}
            handleSubmit={handleSubmit}
          />
        )}
      </Box>
    </Box>
  );
};

export default SlotPicker;
