import { useContext } from "react";
import { Box, Paper, Typography } from "@mui/material";
import LinearDeterminate from "../LinearDeterminate";
import { ProgressContext, ProgressProvider } from "./progress.context";
import { BookingStage, StepLabels } from "./config";
import HorizontalLinearStepper from "../HorizontalLinearStepper";

const BookingContent = () => {
  const { done, activeStep, isStepSkipped } = useContext(ProgressContext);
  return (
    <Paper
      elevation={0}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <HorizontalLinearStepper
        steps={StepLabels}
        activeStep={activeStep}
        isStepSkipped={isStepSkipped}
      />
      {activeStep === 0 && (
        <Box display="flex" flexDirection="column" gap={3}>
          <LinearDeterminate done={done} all={BookingStage.length} />
          <Typography variant="h5">{BookingStage[done].header}</Typography>
          {BookingStage[done].component}
        </Box>
      )}
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
