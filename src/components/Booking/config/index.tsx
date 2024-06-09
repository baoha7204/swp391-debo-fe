import BranchList from "@/components/Branch/BranchList";
import DentistList from "@/components/Dentist/DentistList";
import TreatmentList from "@/components/Treatment/TreatmentList";
import SlotPicker from "../SlotPicker";
import SummaryBooking from "../SummaryBooking";

export const BookingStage = [
  { level: 0, header: "Our branches", component: <BranchList /> },
  { level: 1, header: "All treatments", component: <TreatmentList /> },
  { level: 2, header: "Select your dentist", component: <DentistList /> },
  { level: 3, header: "Select your wished date", component: <SlotPicker /> },
  { level: 4, header: "Appointment Summary", component: <SummaryBooking /> },
];

export const StepLabels = [
  "Appointment information",
  "Payment information",
  "Booking is confirmed!",
];
