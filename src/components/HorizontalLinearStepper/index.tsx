import Box from "@mui/material/Box";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";
import { IconButton } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export type HorizontalLinearStepperProps = {
  steps: string[];
  activeStep: number;
  isStepSkipped: (step: number) => boolean;
  onBack: () => void;
};

const HorizontalLinearStepper = ({
  steps,
  activeStep,
  isStepSkipped,
  onBack,
}: HorizontalLinearStepperProps) => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
          } = {};
          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep > 0 && (
        <IconButton
          color="inherit"
          disabled={activeStep === 0}
          onClick={onBack}
          sx={{ mr: 1 }}
        >
          <ArrowBackIcon />
        </IconButton>
      )}
    </Box>
  );
};

export default HorizontalLinearStepper;
