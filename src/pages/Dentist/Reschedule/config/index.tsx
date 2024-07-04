import RescheduleConfirmation from "../Confirm";
import RescheduleSuccess from "../Success";
import RescheduleTempDent from "../TempDentist";

export const RescheduleStage = [
  {
    header: "Pick a new dentist",
    component: <RescheduleTempDent />,
  },
  {
    header: "Your reschedule summary",
    component: <RescheduleConfirmation />,
  },
  {
    header: "Your request is being sent!",
    component: <RescheduleSuccess />,
  },
];

export const StepLabels = [
  "Choose temporary dentist",
  "Review and confirm",
  "Notification sent!",
];
