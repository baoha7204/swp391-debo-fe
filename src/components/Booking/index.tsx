import { useContext, useLayoutEffect } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import LinearDeterminate from "../LinearDeterminate";
import { ProgressContext, ProgressProvider } from "./progress.context";
import { BookingStage, FirstStageLength, StepLabels } from "./config";
import HorizontalLinearStepper from "../HorizontalLinearStepper";
import { matchPath, useLocation } from "react-router-dom";

const BookingContent = () => {
  const location = useLocation();
  const {
    done,
    setDone,
    activeStep,
    setActiveStep,
    isStepSkipped,
    handleDoneIncrement,
    handleDoneDecrement,
    handleNext,
    handleBack,
    firstTime,
  } = useContext(ProgressContext);

  useLayoutEffect(() => {
    if (!matchPath("/patient/booking/payment-status/:id", location.pathname)) {
      return;
    }
    setDone(6);
    setActiveStep(2);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSubmitAppointment = () => {
    handleDoneIncrement();
    handleNext();
  };

  const handleBackStep = () => {
    handleBack();
    handleDoneDecrement();
  };

  return (
    <Paper
      elevation={0}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <HorizontalLinearStepper
        steps={StepLabels}
        activeStep={activeStep}
        isStepSkipped={isStepSkipped}
        onBack={handleBackStep}
      />
      {activeStep === 0 && (
        <Box display="flex" flexDirection="column">
          <LinearDeterminate done={done} all={FirstStageLength} />
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={firstTime ? done === 2 : done === 0}
              onClick={() => {
                if (firstTime && done === 2) {
                  handleDoneDecrement();
                }
                handleDoneDecrement();
              }}
              sx={{ mr: 1 }}
            >
              Previous
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            {done === FirstStageLength - 1 && (
              <Button onClick={handleSubmitAppointment}>Submit</Button>
            )}
          </Box>
        </Box>
      )}
      <Typography variant="h5">{BookingStage[done].header}</Typography>
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
