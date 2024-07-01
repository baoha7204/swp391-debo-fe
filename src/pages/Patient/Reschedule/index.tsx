import RescheduleSlotPicker from "./SlotPicker";
import { RescheduleProvider } from "./reschedule.context";

const ReschedulePage = () => {
  return (
    <RescheduleProvider>
      <RescheduleSlotPicker />
    </RescheduleProvider>
  );
};

export default ReschedulePage;
