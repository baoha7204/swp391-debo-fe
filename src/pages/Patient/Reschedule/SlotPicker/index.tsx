import { Dayjs } from "dayjs";
import { useContext } from "react";
import SlotPicker from "@/components/SlotPicker";
import useFetchReSlot from "../hooks/useFetchReSlot";
import { RescheduleContext } from "../reschedule.context";

const RescheduleSlotPicker = () => {
  const { handleNext, setData } = useContext(RescheduleContext);
  const handleSlot = (slot: number, date: Dayjs) => {
    setData((prev) => ({
      ...prev,
      newDate: date,
      newSlot: slot,
    }));
    handleNext();
  };

  return <SlotPicker handleSubmit={handleSlot} fetchSlots={useFetchReSlot} />;
};

export default RescheduleSlotPicker;
