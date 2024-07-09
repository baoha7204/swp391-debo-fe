import { useContext } from "react";
import { RescheduleContext } from "../reschedule.context";
import { Box, Typography } from "@mui/material";
import DentistCardSummary from "../TempDentist/DentistCardSummary";

const RescheduleConfirmation = () => {
  const { data } = useContext(RescheduleContext);
  return (
    <Box display="flex" flexDirection="column" gap={4} width="50%">
      <Typography variant="h6">
        You will assign this dentist to the appointment?
      </Typography>
      <DentistCardSummary {...data!.newDentist!} />
    </Box>
  );
};

export default RescheduleConfirmation;
