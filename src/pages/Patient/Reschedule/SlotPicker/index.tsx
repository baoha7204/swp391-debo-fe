import SlotPicker from "@/components/SlotPicker";
import useFetchReSlot from "../hooks/useFetchReSlot";
import { Dayjs } from "dayjs";

const RescheduleSlotPicker = () => {
  const handleSlot = (slot: number, date: Dayjs) => {
    console.log(date, slot);
  };

  return <SlotPicker handleSubmit={handleSlot} fetchSlots={useFetchReSlot} />;
};

export default RescheduleSlotPicker;
