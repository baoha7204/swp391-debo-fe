import RescheduleConfirmation from "../Confirm";
import RescheduleSlotPicker from "../SlotPicker";
import RescheduleSuccess from "../Success";

export const RescheduleStage = [
  {
    header: "Pick a new date and time",
    component: <RescheduleSlotPicker />,
  },
  {
    header: "Your reschedule summary",
    component: <RescheduleConfirmation />,
  },
  {
    header: "Reschedule is confirmed!",
    component: <RescheduleSuccess />,
  },
];

export const StepLabels = [
  "Choose date and time",
  "Summary review",
  "Reschedule is confirmed!",
];
