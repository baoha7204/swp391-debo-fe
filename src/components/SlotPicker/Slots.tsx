import { Stack } from "@mui/material";
import { Dayjs } from "dayjs";
import { Item } from "./style";
import { formatTime } from "@/utils/helper";
import CircularIndeterminate from "@/components/CircularIndeterminate";
import { SlotPickerProps } from ".";

const Slots = ({
  date,
  fetchSlots,
  handleSubmit,
}: { date: Dayjs } & SlotPickerProps) => {
  const { slots, isLoading } = fetchSlots(date);

  return isLoading ? (
    <CircularIndeterminate />
  ) : (
    <Stack
      direction={{ xs: "column", sm: "row" }}
      spacing={{ xs: 1, sm: 2, md: 4 }}
      useFlexGap
      flexWrap="wrap"
    >
      {slots.map((slot) => (
        <Item key={slot} onClick={() => handleSubmit(slot, date)}>
          {formatTime(slot)}
        </Item>
      ))}
    </Stack>
  );
};

export default Slots;
