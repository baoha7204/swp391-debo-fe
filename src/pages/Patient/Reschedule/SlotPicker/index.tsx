import { Dayjs } from "dayjs";
import { useContext } from "react";
import SlotPicker from "@/components/SlotPicker";
import useFetchReSlot from "../hooks/useFetchReSlot";
import { RescheduleContext } from "../reschedule.context";
import DefaultError from "@/pages/500";

const RescheduleSlotPicker = () => {
  const { isAllowed, handleNext, setData } = useContext(RescheduleContext);
  const handleSlot = (slot: number, date: Dayjs) => {
    setData((prev) => ({
      ...prev,
      newDate: date,
      newSlot: slot,
    }));
    handleNext();
  };

  return isAllowed ? (
    <SlotPicker
      handleSubmit={handleSlot}
      fetchSlots={useFetchReSlot}
      disablePast={true}
    />
  ) : (
    <DefaultError />
  );
};

export default RescheduleSlotPicker;
