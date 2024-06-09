import { Box } from "@mui/material";
import useCreateAppointment from "./hooks/useCreateAppointment";
import BranchCardSummary from "./components/BranchCard";
import DentistCardSummary from "./components/DentistCard";
import TreatmentCardSummary from "./components/TreatmentCard";
import DateSlotCard from "./components/DateSlotCard";

const SummaryBooking = () => {
  // const { isLoading, appointment } = useCreateAppointment();

  return (
    <Box>
      <BranchCardSummary />
      <TreatmentCardSummary />
      <DentistCardSummary />
      <DateSlotCard />
    </Box>
  );
};

export default SummaryBooking;
