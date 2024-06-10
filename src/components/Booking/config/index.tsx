import BranchList from "@/components/Branch/BranchList";
import DentistList from "@/components/Dentist/DentistList";
import TreatmentList from "@/components/Treatment/TreatmentList";
import SlotPicker from "../SlotPicker";
import SummaryBooking from "../SummaryBooking";
import PaymentPage from "../Payment";

export const BookingStage = [
  { level: 0, header: "Our branches", component: <BranchList /> },
  { level: 0, header: "All treatments", component: <TreatmentList /> },
  { level: 0, header: "Select your dentist", component: <DentistList /> },
  { level: 0, header: "Select your wished date", component: <SlotPicker /> },
  { level: 0, header: "Appointment Summary", component: <SummaryBooking /> },
  { level: 1, header: "Your payment", component: <PaymentPage /> },
];

export const FirstStageLength = BookingStage.reduce((acc, stage) => {
  if (stage.level === 0) acc++;
  return acc;
}, 0);

export const StepLabels = [
  "Appointment information",
  "Payment information",
  "Booking is confirmed!",
];
