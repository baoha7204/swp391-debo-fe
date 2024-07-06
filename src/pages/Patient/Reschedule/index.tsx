import { Box, Button, Paper, Typography } from "@mui/material";
import { useContext } from "react";
import { RescheduleContext, RescheduleProvider } from "./reschedule.context";
import HorizontalLinearStepper from "@/components/HorizontalLinearStepper";
import { RescheduleStage, StepLabels } from "./config";

const RescheduleContent = () => {
  const { activeStep, isStepSkipped, handleBack, handleNext } =
    useContext(RescheduleContext);

  return (
    <Paper
      elevation={0}
      sx={{ display: "flex", flexDirection: "column", gap: 2 }}
    >
      <HorizontalLinearStepper
        steps={StepLabels}
        activeStep={activeStep}
        isStepSkipped={isStepSkipped}
        onBack={handleBack}
      />
      <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
        <Button
          color="inherit"
          disabled={activeStep === 0}
          onClick={handleBack}
          sx={{ mr: 1 }}
        >
          Previous
        </Button>
        <Box sx={{ flex: "1 1 auto" }} />
        {activeStep === 1 && <Button onClick={handleNext}>Reschedule</Button>}
      </Box>
      <Typography variant="h5">{RescheduleStage[activeStep].header}</Typography>
      {RescheduleStage[activeStep].component}
    </Paper>
  );
};

const PatientReschedulePage = () => {
  return (
    <RescheduleProvider>
      <RescheduleContent />
    </RescheduleProvider>
  );
};

export default PatientReschedulePage;
