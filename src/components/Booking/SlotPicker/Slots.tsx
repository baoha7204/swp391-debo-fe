import { Stack } from "@mui/material";
import { Item } from "./style";
import { formatTime } from "@/utils/helper";
import useFetchSlots from "./hooks/useFetchSlots";
import CircularIndeterminate from "@/components/CircularIndeterminate";

const Slots = () => {
  const { slots, isLoading } = useFetchSlots();

  const handleSlot = (slot: number) => {
    console.log(slot);
  };

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
        <Item key={slot} onClick={() => handleSlot(slot)}>
          {formatTime(slot)}
        </Item>
      ))}
    </Stack>
  );
};

export default Slots;
