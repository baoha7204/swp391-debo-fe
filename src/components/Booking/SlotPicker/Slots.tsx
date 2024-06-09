import { Stack } from "@mui/material";
import { Item } from "./style";
import { formatTime } from "@/utils/helper";
import useFetchSlots from "./hooks/useFetchSlots";
import CircularIndeterminate from "@/components/CircularIndeterminate";
import { useContext } from "react";
import { ProgressContext } from "../progress.context";

const Slots = () => {
  const { setData, handleDoneIncrement } = useContext(ProgressContext);
  const { slots, isLoading } = useFetchSlots();

  const handleSlot = (slot: number) => {
    setData((prev) => ({ ...prev, slot }));
    handleDoneIncrement();
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
