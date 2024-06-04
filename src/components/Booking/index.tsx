import { useContext } from "react";
import { Paper } from "@mui/material";
import BranchList from "../Branch/BranchList";
import LinearDeterminate from "../LinearDeterminate";
import TreatmentList from "../Treatment/TreatmentList";
import { ProgressContext, ProgressProvider } from "./progress.context";
import { MAX_DONE } from "@/config";

const BookingStage = [
  { level: 0, component: <BranchList /> },
  { level: 1, component: <TreatmentList /> },
];

const BookingContent = () => {
  const { done } = useContext(ProgressContext);
  return (
    <Paper
      elevation={0}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <LinearDeterminate done={done} all={MAX_DONE} />
      {BookingStage[done].component}
    </Paper>
  );
};

const BookingPage = () => {
  return (
    <ProgressProvider>
      <BookingContent />
    </ProgressProvider>
  );
};

export default BookingPage;
