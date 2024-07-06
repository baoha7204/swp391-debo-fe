import { useContext } from "react";
import { ProgressContext } from "../progress.context";
import { Dayjs } from "dayjs";
import SlotPicker from "@/components/SlotPicker";
import useFetchSlots from "../hooks/useFetchSlots";

const BookingSlotPicker = () => {
  const { setData, handleDoneIncrement } = useContext(ProgressContext);

  const handleSlot = (slot: number, date: Dayjs) => {
    setData((prev) => ({ ...prev, date, slot }));
    handleDoneIncrement();
  };

  return <SlotPicker handleSubmit={handleSlot} fetchSlots={useFetchSlots} />;
};

export default BookingSlotPicker;
